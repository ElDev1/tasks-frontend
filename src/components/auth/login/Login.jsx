import styles from '../login.module.css'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { signin } from '../../../services/signin.js'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Not valid email')
      .required('Email required'),
    password: Yup.string()
      .required('Password required')
      .min(4)
  })

  const navigate = useNavigate()

  return (
    <main className={styles.authMain}>
      <section className={styles.authSection}>
        <div className={styles.authContainer}>
          <div>
            <div className={styles.logo}>
              <img src='../../../../public/images/tasksAppLogo.png' width='110px' height='100px' />
            </div>
            <h2>Sign In</h2>
          </div>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validate}
            onSubmit={(values, { resetForm }) => {
              signin(values).then(res => {
                console.log(res)
                if (res.message === 'user not found') {
                  Swal.fire({
                    title: 'user not found',
                    confirmButtonColor: '#ff00f280'
                  })
                  return
                }
                // eslint-disable-next-line no-undef
                localStorage.setItem('token', res.token)
                navigate('/')
              })
              resetForm()
            }}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
              <form className={styles.authForm} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                  <label id='email'>Email</label>
                  <input
                    name='email'
                    type='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder='type your email'
                  />
                  {errors.email && touched.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email}</p>}
                </div>
                <div className={styles.inputContainer}>
                  <label id='password'>Password</label>
                  <input
                    placeholder='type your password'
                    name='password'
                    type='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && <p style={{ color: 'red', fontSize: '12px' }}>{errors.password}</p>}
                </div>
                <button className={styles.authButton} disabled={isSubmitting}>Login</button>
              </form>
            )}
          </Formik>
          <p>Don't have a account yet? <span><Link to='/register'>Sign up</Link></span></p>
        </div>
      </section>
    </main>
  )
}

export default Login
