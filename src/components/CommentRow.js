import styles from '../styles/commentRow.module.css'

function CommentRow(props) {
  return (
    <div className={styles.commentRow}>
      <span className={styles.dailyUserId}>{props.dailyUserId}</span>
      <span className={styles.createdAt}>2022-05-27</span>
      <p>{props.text}</p>
    </div>
  )
}

export default CommentRow