import styles from './taskCard.module.css'

const TaskCard = () => {
  return (
    <article className={styles.taskContainer}>
      <div className={styles.tasksElements}>
        <h3>task 1</h3>
        <div className={styles.tags}>
          <span>#tag1</span>
          <span>#tag2</span>
          <span>#tag3</span>
        </div>
        <button>Details</button>
      </div>
    </article>
  )
}

export default TaskCard
