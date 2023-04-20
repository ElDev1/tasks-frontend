import styles from './statusTable.module.css'
import TaskCard from '../taskCard/TaskCard'

const StatusTable = ({ statusTask }) => {
  return (
    <section>
      <div className={styles.table}>
        <h2>{statusTask}</h2>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
      <button className={styles.buttonTable}>Add another card <i /> </button>
    </section>
  )
}

export default StatusTable
