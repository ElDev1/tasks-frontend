import StatusTable from '../statusTable/StatusTable'
import styles from './tasksTable.module.css'
import { useTasks } from '../../../../hooks/useTasks'

const TasksTable = () => {
  const { tasks } = useTasks()
  console.log(tasks)
  return (
    <div className={styles.tasksContainer}>
      <StatusTable statusTask='To Do' />
      <StatusTable statusTask='In progress' />
      <StatusTable statusTask='Done' />
    </div>
  )
}

export default TasksTable
