import styles from '../styles/commentRow.module.css'
import dayjs from 'dayjs'

function CommentRow(props) {
  return (
    <div className={styles.commentRow}>
      <div className={styles.nameBar}>
        <span className={styles.displayName}>{props.displayName}</span>
        <span className={styles.userId}>@{props.userId}</span>
        <span className={styles.createdAt}>{dayjs(props.createdAt).format('YYYY/MM/DD HH:mm')}</span>
      </div>
      <p>{props.text}</p>
    </div>
  )
}

export default CommentRow