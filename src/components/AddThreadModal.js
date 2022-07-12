import styles from '../styles/addThreadModal.module.css'

import { FaTimes } from 'react-icons/fa'
import React, { useEffect, useCallback, useState } from "react";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import db from '../utilities/Firebase'
import { getAuth } from "firebase/auth"

function AddThreadModal(props) {

  const [title, setTitle] = useState('')
  const onInputTitle = (e) => {
    setTitle(e.target.value)
  }

  const createThread = async() => {
    if (title === '') {
      alert('Please enter title and detail.')
      return
    }

    if (title.length > 200) {
      alert('Too many charactors on title.')
      return
    }

    // Get user
    const auth = getAuth();
    const user = auth.currentUser;
    let userId = ''
    if (user) {
      userId = user.uid
    } else {
      userId = 'noname'
    }

    const docRef = await addDoc(collection(db, 'threads'), {
      createdAt: serverTimestamp(),
      userId: userId,
      title: title,
    })
    console.log("Document written with ID: ", docRef.id)

    closeModal()
  }

  const closeModal = () => {
    setTitle('')
    props.close()
  }

  const keyboardHandler = useCallback((event) => {
    if (event.keyCode === 27) {
      closeModal()
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keyboardHandler, false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={props.isOpenModal ? '' : styles.invisible}>
      <div className={styles.modalShadow} onClick={() => {closeModal()}}></div>
      <div className={styles.modal}>
        <button className={styles.timesButton} onClick={() => {closeModal()}}>
          <FaTimes/>
        </button>

        <form>
          <input placeholder="スレッドタイトル" required onChange={onInputTitle} value={title}/>
        </form>

        <div className={styles.submitButtonContainer}>
          <button onClick={createThread}>作成</button>
        </div>
      
      </div>

    </div>
  )
}

export default AddThreadModal