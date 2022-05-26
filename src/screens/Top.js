import styles from '../styles/top.module.css'

import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import db from '../utilities/Firebase';

function Top() {

  const [documents, setDocuments] = useState([])

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
    <main className={styles.main}>
      <div>
        <h2>Top</h2>
      </div>
    </main>
  )
}

export default Top