import styles from '../styles/commentRow.module.css'
import dayjs from 'dayjs'
import CommentPopupMenu from './CommentPopupMenu'

function CommentRow(props) {

  return (
    <div className={styles.commentRow}>
      <div className={styles.nameBar}>
        <div className={styles.names}>
          <span className={styles.displayName}>{props.comment.data().displayName}</span>
          <span className={styles.userId}>@{props.comment.data().userId}</span>
          <span className={styles.createdAt}>{dayjs(new Date(props.comment.data({serverTimestamps:"estimate"}).createdAt.toDate())).format('YYYY-MM-DD HH:mm')}</span>
        </div>

        <CommentPopupMenu comment={props.comment}/>
      </div>
      
      <p>{props.comment.data().text}</p>
    </div>
  )
}

export default CommentRow