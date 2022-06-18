import styles from '../styles/top.module.css'

import React, { useEffect, useState } from 'react'
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import db from '../utilities/Firebase'

import ThreadCard from '../components/ThreadCard'
import AddThreadModal from '../components/AddThreadModal'
import InvisibleCard from '../components/InvisibleCard'
import progressView from '../images/progressView.svg'

function TopPage() {

  const [documents, setDocuments] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  
  useEffect(() => {
    const q = query(collection(db, 'threads'), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push(doc)
      })

      setDocuments(docs)
      setIsLoaded(true)
    })

    return () => {
      unsubscribe()
    }
    
  }, [])
  
  return (
    <main className={styles.root}>
      <AddThreadModal isOpenModal={isOpenModal} close={() => setIsOpenModal(false)}/>

      <div className={styles.largeContainer}>
        <div className={styles.titleBar}>
          <h2>スレッド</h2>
          <button className={isOpenModal ? styles.buttonWhenPushed : ``} onClick={() => setIsOpenModal(true)}>新規スレッド</button>
        </div>

        {!isLoaded &&
          <img className={styles.progressView} src={progressView} alt=''/>
        }

        <div className={styles.cardContainer}>
          {
            documents.map(document => (
              <ThreadCard key={document.id} document={document}/>
            ))
          }
          <InvisibleCard/>

        </div>
      
      </div>
    </main>
  )
}

export default TopPage