import styles from '../login.module.css'
import { Formik } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Not valid email')
      .required('Email required'),
    password: Yup.string()
      .required('Password required')
      .min(4)
  })

  return (
    <main className={styles.loginMain}>
      <section className={styles.loginSection}>
        <div className={styles.loginContainer}>
          <div>
            <h1>TaskToDo</h1>
            <h2>Sign Up</h2>
          </div>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validate}
            onSubmit={(values, { resetForm }) => {
              console.log(values)
              resetForm()
            }}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
              <form className={styles.loginForm}>
                <div className={styles.inputContainer}>
                  <label id='email'>User name</label>
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
                <button className={styles.loginButton}>Login</button>
              </form>
            )}
          </Formik>
          <p>Don't have a account yet? <span><a href='#'>Signup</a></span></p>
        </div>
      </section>
    </main>
  )
}

export default Register
