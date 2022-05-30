import styles from '../styles/top.module.css'

import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import db from '../utilities/Firebase';

import ThreadCard from '../components/ThreadCard'

function Top() {

  const [documents, setDocuments] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)

  useEffect(() => {
    const q = query(collection(db, "threads"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc);
        console.log(`Thread id: ${doc.id}, title: ${doc.data().title}, createdAt: ${doc.data().createdAt}`);
      });

      setDocuments(docs);
    });

    return () => {
      unsubscribe();
    };
    
  }, []);
  
  return (
    <main>
      <div className={styles.largeContainer}>
        <div className={styles.titleBar}>
          <h2>Threads</h2>
          <button onClick={() => setIsShowModal(true)}>Create new thread</button>
        </div>
        <div className={styles.cardContainer}>
          {
            documents.map(document => (
              <ThreadCard key={document.id} document={document}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Top