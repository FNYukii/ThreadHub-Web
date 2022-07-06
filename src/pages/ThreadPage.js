import styles from '../styles/threadPage.module.css'

import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, query, onSnapshot, where, doc, getDoc, orderBy } from 'firebase/firestore'
import db from '../utilities/Firebase'

import CommentRow from '../components/CommentRow'
import AddCommentModal from '../components/AddCommentModal'
import progressView from '../images/progressView.svg'

function ThreadPage() {

  let { threadId } = useParams()

  const [threadTitle, setThreadTitle] = useState('')
  const [comments, setComments] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const [isOpenModal, setIsOpenModal] = useState(false)

  document.title = threadTitle
  const navigate = useNavigate()

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
    } else {
      console.log('Thread not found.')
      navigate('/notFound')
    }
    setIsLoaded(true)
  }

  return (
    <main className={styles.root}>

      <div className={styles.largeContainer}>
        <div className={styles.titleBar}>
          <h2>{threadTitle}</h2>
          <button className={isOpenModal ? styles.buttonWhenPushed : ``} onClick={() => setIsOpenModal(true)}>新規コメント</button>
        </div>

        <div className={styles.contentContainer}>
          {!isLoaded &&
            <img className={styles.progressView} src={progressView} alt=''/>
          }

          {isLoaded &&
            <div>
              {
                comments.map(comment => (
                  <CommentRow key={comment.id} comment={comment}/>
                ))
              }
            </div>
          }
        </div>
        
      </div>

      <AddCommentModal isOpenModal={isOpenModal} close={() => setIsOpenModal(false)} threadId={threadId}/>
    </main>
  )
}

export default ThreadPage