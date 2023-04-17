import styles from './taskCard.module.css'

const TaskCard = () => {
  return (
    <article className={styles.taskContainer}>
      <h3>task 1</h3>
      <div>
        <span>#tag1</span>
        <span>#tag2</span>
        <span>#tag3</span>
      </div>
      <button>View</button>
    </article>
  )
}

export default TaskCard
