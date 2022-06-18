import styles from '../styles/addThreadModal.module.css'

import { FaTimes } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import db from '../utilities/Firebase'
import { getAuth } from "firebase/auth"

function AddThreadModal(props) {

  const [displayName, setDisplayName] = useState('')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    setDisplayName(localStorage.getItem('displayName'))
  }, [])

  const onInputDisplayName = (e) => {
    setDisplayName(e.target.value)
  }

  const onInputTitle = (e) => {
    setTitle(e.target.value)
  }

  const onInputText = (e) => {
    setText(e.target.value)
  }

  const createThread = async() => {
    if (title === '' || text === '') {
      alert('Please enter title and detail.')
      return
    }

    if (title.length > 200) {
      alert('Too many charactors on title.')
      return
    }

    if (text.length > 2000) {
      alert('Too many charactors on detail.')
      return
    }

    localStorage.setItem('displayName', displayName)

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
    const threadId = docRef.id

    addDoc(collection(db, "comments"), {
      createdAt: serverTimestamp(),
      threadId: threadId,
      userId: userId,
      displayName: displayName,
      text: text
    })

    closeModal()
  }

  const closeModal = () => {
    setTitle('')
    setText('')
    props.close()
  }

  return (
    <div className={props.isOpenModal ? '' : styles.invisible}>
      <div className={styles.modalShadow} onClick={() => {closeModal()}}></div>
      <div className={styles.modal}>
        <button className={styles.timesButton} onClick={() => {closeModal()}}>
          <FaTimes/>
        </button>

        <form>
          <input placeholder="タイトル" required onChange={onInputTitle} value={title}/>

          <input placeholder="ニックネーム" required onChange={onInputDisplayName} value={displayName}/>
          <textarea placeholder='コメント' rows='5' required onChange={onInputText} value={text}/>
        </form>

        <div className={styles.submitButtonContainer}>
          <button onClick={createThread}>作成</button>
        </div>
      
      </div>

    </div>
  )
}

export default AddThreadModal