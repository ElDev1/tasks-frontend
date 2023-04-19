import TasksHeader from '../tasksHeader/TasksHeader'
import TasksTable from '../tasksContainer/tasksTable/TasksTable'
import styles from './tasksMain.module.css'

const TasksMain = () => {
  return (
    <main>
      <TasksHeader />
      <TasksTable />
    </main>
  )
}

export default TasksMain
