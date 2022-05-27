import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot, where } from "firebase/firestore";
import db from '../utilities/Firebase';

function Thread() {

  let { threadId } = useParams()

  const [thread, setThread] = useState()
  const [comments, setComments] = useState([])

  useEffect(() => {

    // TODO: Get a thread

    // Get comments
    const q = query(collection(db, "comments"), where("threadId", "==", threadId));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc);
        console.log(`Comment id: ${doc.id}, text: ${doc.data().text}`);
      });

      setComments(docs);
    });

    return () => {
      unsubscribe();
    };
    
  }, []);

  return (
    <main>
      <div className='large-container'>
        <h2>Thread</h2>
        <p>threadId: {threadId}</p>
      </div>
    </main>
  )
}

export default Thread