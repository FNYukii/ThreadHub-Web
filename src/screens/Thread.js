import styles from '../styles/thread.module.css'

import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { collection, query, onSnapshot, where, doc, getDoc, orderBy } from 'firebase/firestore'
import db from '../utilities/Firebase'

import CommentRow from '../components/CommentRow'
import AddCommentModal from '../components/AddCommentModal'

function Thread() {

  let { threadId } = useParams()

  const [threadTitle, setThreadTitle] = useState()
  const [threadDailyUserId, setThreadDailyUserId] = useState()
  const [threadDetail, setThreadDetail] = useState()
  const [comments, setComments] = useState([])

  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {

    readThread()

    // Get comments
    const q = query(collection(db, 'comments'), where('threadId', '==', threadId), orderBy('createdAt', 'asc'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push(doc)
      })

      setComments(docs)
    })

    return () => {
      unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function readThread() {
    const docSnap = await getDoc(doc(db, 'threads', threadId))

    if (docSnap.exists()) {
      console.log(`Thread id: ${docSnap.id}, title: ${docSnap.data().title}`)
      setThreadTitle(docSnap.data().title)
      setThreadDailyUserId(docSnap.data().dailyUserId)
      setThreadDetail(docSnap.data().detail)
    } else {
      console.log('Thread not found.')
    }
  }

  return (
    <main>
      <AddCommentModal isOpenModal={isOpenModal} close={() => setIsOpenModal(false)} threadId={threadId}/>

      <div className={styles.largeContainer}>
        <div className={styles.titleBar}>
          <h2>{threadTitle}</h2>
          <button onClick={() => setIsOpenModal(true)}>Add new comment</button>
        </div>

        <div className={styles.contentContainer}>
          <CommentRow order={0} dailyUserId={threadDailyUserId} text={threadDetail}/>

          {
            comments.map(comment => (
              <CommentRow key={comment.id} order={'-'} dailyUserId={comment.data().dailyUserId} text={comment.data().text}/>
            ))
          }

        </div>
        
      </div>
    </main>
  )
}

export default Thread