import StatusTable from '../statusTable/StatusTable'
import styles from './tasksTable.module.css'

const TasksTable = () => {
  return (
    <div className={styles.tasksContainer}>
      <StatusTable statusTask='To Do' />
      <StatusTable statusTask='In progress' />
      <StatusTable statusTask='Done' />
    </div>
  )
}

export default TasksTable
