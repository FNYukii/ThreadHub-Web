import styles from '../styles/commentRow.module.css'

import { format } from 'date-fns'

function CommentRow(props) {
  return (
    <div className={styles.commentRow}>
      <span>{props.order}</span>
      <span className={styles.dailyUserId}>{props.dailyUserId}</span>
      <span className={styles.createdAt}></span>
      <p>{props.text}</p>
    </div>
  )
}

export default CommentRow