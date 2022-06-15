import styles from '../styles/commentRow.module.css'

function CommentRow(props) {
  return (
    <div className={styles.commentRow}>
      <span>{props.order}</span>
      <span className={styles.displayName}>{props.displayName}</span>
      <span className={styles.userId}>@{props.userId}</span>
      <span className={styles.createdAt}></span>
      <p>{props.text}</p>
    </div>
  )
}

export default CommentRow