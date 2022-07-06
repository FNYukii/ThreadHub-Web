import styles from '../styles/threadCard.module.css'

import { useEffect, useState } from 'react'
import { collection, getDocs, where, query, orderBy, limit } from 'firebase/firestore'
import db from '../utilities/Firebase'
import ThreadPopupMenu from './ThreadPopupMenu'

function ThreadCard(props) {

  const [commentsCount, setCommentsCount] = useState(0)
  const [firstCommentText, setFirstCommentText] = useState('')

  async function getFirstCommentText() {
    const q = query(collection(db, 'comments'), where('threadId', '==', props.document.id), orderBy("createdAt"), limit(1))
    const querySnapshot = await getDocs(q)
    setFirstCommentText(querySnapshot.docs[0].data().text)
  }

  async function getCommentsCount() {
    const q = query(collection(db, 'comments'), where('threadId', '==', props.document.id))
    const querySnapshot = await getDocs(q)
    setCommentsCount(querySnapshot.docs.length)
  }

  useEffect(() => {
    getFirstCommentText()
    getCommentsCount()
    // eslint-disable-next-line
  }, [])

  return (

    <div className={styles.root}>
        <a href={`/threads/${props.document.id}`}> </a>

        <p className={styles.title}>{props.document.data().title}</p>
        <p className={styles.firstCommentText}>{firstCommentText}</p>
        <p className={styles.commentsCount}>{`${commentsCount}`} コメント</p>
        <ThreadPopupMenu thread={props.document}/>
      </div>
  )
}

export default ThreadCard