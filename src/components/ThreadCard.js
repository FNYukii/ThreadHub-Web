import styles from '../styles/threadCard.module.css'

function ThreadCard(props) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{props.document.data().title}</p>
      <p className={styles.comment}>You should use CSS Modules.</p>
    </div>
  )
}

export default ThreadCard