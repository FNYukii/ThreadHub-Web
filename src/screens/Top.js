import styles from '../styles/top.module.css'

import React, { useEffect, useState } from 'react'
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import db from '../utilities/Firebase'

import ThreadCard from '../components/ThreadCard'
import AddThreadModal from '../components/AddThreadModal'
import InvisibleCard from '../components/InvisibleCard'

function Top() {

  const [documents, setDocuments] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    const q = query(collection(db, 'threads'), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push(doc)
      })

      setDocuments(docs)
    })

    return () => {
      unsubscribe()
    }
    
  }, [])
  
  return (
    <main>
      <AddThreadModal isOpenModal={isOpenModal} close={() => setIsOpenModal(false)}/>

      <div className={styles.largeContainer}>
        <div className={styles.titleBar}>
          <h2>Threads</h2>
          <button onClick={() => setIsOpenModal(true)}>Create new thread</button>
        </div>


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

export default Top