import styles from './login.module.css'

const Login = () => {
  return (
    <main className={styles.loginMain}>
      <section className={styles.loginSection}>
        <div className={styles.loginContainer}>
          <div>
            <h1>TaskToDo</h1>
            <h2>Sign In</h2>
          </div>
          <form className={styles.loginForm}>
            <div className={styles.inputContainer}>
              <label id='email'>User name</label>
              <input name='email' type='text' placeholder='type your email' />
            </div>
            <div className={styles.inputContainer}>
              <label id='password'>Password</label>
              <input name='password' type='text' placeholder='type your password' />
            </div>
            <button className={styles.loginButton}>Login</button>
          </form>
          <p>Don't have a account yet? <span><a href='#'>Signup</a></span></p>
        </div>
      </section>
    </main>
  )
}

export default Login
