import styles from './statusTable.module.css'
import TaskCard from '../taskCard/TaskCard'

const StatusTable = ({ statusTask }) => {
  return (
    <section className={styles.table}>
      <h2>{statusTask}</h2>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </section>
  )
}

export default StatusTable
