import styles from '../styles/thread.module.css'

import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { collection, query, onSnapshot, where, doc, getDoc } from "firebase/firestore"
import db from '../utilities/Firebase'

import Header from '../components/Header'
import CommentRow from '../components/CommentRow'
import AddCommentSection from '../components/AddCommentSection'

function Thread() {

  let { threadId } = useParams()

  const [threadTitle, setThreadTitle] = useState()
  const [threadDailyUserId, setThreadDailyUserId] = useState()
  const [threadDetail, setThreadDetail] = useState()
  const [comments, setComments] = useState([])

  useEffect(() => {

    readThread()

    // Get comments
    const q = query(collection(db, "comments"), where("threadId", "==", threadId))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push(doc)
        console.log(`Comment id: ${doc.id}, text: ${doc.data().text}`)
      })

      setComments(docs)
    })

    return () => {
      unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function readThread() {
    const docSnap = await getDoc(doc(db, "threads", threadId))

    if (docSnap.exists()) {
      console.log(`Thread id: ${docSnap.id}, title: ${docSnap.data().title}`)
      setThreadTitle(docSnap.data().title)
      setThreadDailyUserId(docSnap.data().dailyUserId)
      setThreadDetail(docSnap.data().detail)
    } else {
      console.log("Thread not found.")
    }
  }

  return (
    <div>
      <Header/>

      <main>
        <div className={styles.largeContainer}>
          <h2 className={styles.title}>{threadTitle}</h2>

          <div className={styles.contentContainer}>

            <CommentRow order={0} dailyUserId={threadDailyUserId} text={threadDetail}/>

            {
              comments.map(comment => (
                <CommentRow key={comment.id} order={'-'} dailyUserId={comment.data().dailyUserId} text={comment.data().text}/>
              ))
            }

            <AddCommentSection threadId={threadId}/>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Thread