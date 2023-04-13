import styles from './header.module.css'

const TasksHeader = () => {
  return (
    <header className={styles.tasksHeader}>
      <img className={styles.headerImage} src='../../../../public/images/tasksAppLogo.png' />
      <button className={styles.headerButton}>Logout</button>
    </header>
  )
}

export default TasksHeader
