import styles from '../styles/threadCard.module.css'

import { useEffect, useState } from 'react'
import { collection, getDocs, where } from "firebase/firestore"
import db from '../utilities/Firebase'

function ThreadCard(props) {

  const [commentsCount, setCommentsCount] = useState(0)

  async function getCommentsCount() {
    console.log(`threadId: ${props.document.id}`)
    const querySnapshot = await getDocs(collection(db, "comments"), where('threadId', '==', props.document.id));
    setCommentsCount(querySnapshot.docs.length);
  }

  useEffect(() => {
    getCommentsCount()
    // eslint-disable-next-line
  }, [])

  return (
    <a href={`/${props.document.id}`} className={styles.cardAnchor}>
      <div className={styles.card}>
        <p className={styles.title}>{props.document.data().title}</p>
        <p className={styles.detail}>{props.document.data().detail}</p>
        <p className={styles.commentsCount}>{`${commentsCount}`} comments</p>
      </div>
    </a>
  )
}

export default ThreadCard