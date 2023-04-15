import styles from './header.module.css'
import { useNavigate } from 'react-router-dom'

const TasksHeader = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('token')
    // eslint-disable-next-line no-undef
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <header className={styles.tasksHeader}>
      <div className={styles.headerImage}>
        <img src='../../../../public/images/tasksAppLogo.png' />
      </div>
      <button onClick={handleLogout} className={styles.headerButton}>Logout</button>
    </header>
  )
}

export default TasksHeader
