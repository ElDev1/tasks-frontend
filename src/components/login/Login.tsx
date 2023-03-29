import styles from './login.module.css'

const Login = () => {
  return (
    <main className={styles.loginMain}>
      <section className={styles.loginSection}>
        <div className={styles.loginContainer}>
          <h1>Sign In</h1>
          <form className={styles.loginForm}>
            <div className={styles.inputContainer}>
              <label id='email'>User name</label>
              <input name='email' type='text' placeholder='type your email' />
            </div>
            <div className={styles.inputContainer}>
              <label id='password'>Password</label>
              <input name='password' type='text' placeholder='type your password' />
            </div>
            <button>Login</button>
          </form>
          <p>Don't have a account yet? <span><a href='#'>Signup</a></span></p>
        </div>
      </section>
    </main>
  )
}

export default Login
