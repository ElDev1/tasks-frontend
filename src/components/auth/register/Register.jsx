import styles from '../login.module.css'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { signup } from '../../../services/signup'
import Swal from 'sweetalert2'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Not valid email')
      .required('Email required'),
    password: Yup.string()
      .required('Password required')
      .min(4),
    userName: Yup.string()
      .required('user name required')
      .min(4)
  })

  const navigate = useNavigate()

  return (
    <main className={styles.loginMain}>
      <section className={styles.loginSection}>
        <div className={styles.loginContainer}>
          <div>
            <h1>TaskToDo</h1>
            <h2>Sign Up</h2>
          </div>
          <Formik
            initialValues={{ userName: '', email: '', password: '' }}
            validationSchema={validate}
            onSubmit={(values, { resetForm }) => {
              signup(values)
                .then(res => {
                  if (res.message === 'the user already exist' || res.message === 'the email already exist') {
                    Swal.fire({
                      title: `${res.message}`,
                      confirmButtonColor: '#ff00f280'
                    })
                    return
                  }
                  Swal.fire({
                    title: 'User created!',
                    confirmButtonColor: '#ff00f280'
                  })
                  // eslint-disable-next-line no-undef
                  localStorage.setItem('token', res.token)
                  navigate('/')
                })
              resetForm()
            }}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
              <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                  <label id='userName'>User name</label>
                  <input
                    name='userName'
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                    placeholder='type your user name'
                  />
                  {errors.userName && touched.userName && <p style={{ color: 'red', fontSize: '12px' }}>{errors.userName}</p>}
                </div>
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
                <button className={styles.loginButton} disabled={isSubmitting}>Register</button>
              </form>
            )}
          </Formik>
          <p>Back to <span><Link to='/login'>Login</Link></span></p>
        </div>
      </section>
    </main>
  )
}

export default Login
