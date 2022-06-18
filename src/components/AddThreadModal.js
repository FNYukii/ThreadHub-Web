import styles from '../styles/addThreadModal.module.css'

import { FaTimes } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import db from '../utilities/Firebase'
import { getAuth } from "firebase/auth"

function AddThreadModal(props) {

  const [displayName, setDisplayName] = useState('')
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  useEffect(() => {
    setDisplayName(localStorage.getItem('displayName'))
  }, [])

  const onInputDisplayName = (e) => {
    setDisplayName(e.target.value)
  }

  const onInputTitle = (e) => {
    setTitle(e.target.value)
  }

  const onInputDetail = (e) => {
    setDetail(e.target.value)
  }

  const createThread = () => {
    if (title === '' || detail === '') {
      alert('Please enter title and detail.')
      return
    }

    if (title.length > 200) {
      alert('Too many charactors on title.')
      return
    }

    if (detail.length > 2000) {
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

    addDoc(collection(db, 'threads'), {
      createdAt: serverTimestamp(),
      userId: userId,
      displayName: displayName,
      title: title,
      detail: detail
    })
    console.log(`title: ${title}, detail: ${detail}`)

    closeModal()
  }

  const closeModal = () => {
    setTitle('')
    setDetail('')
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
          <input placeholder="ニックネーム" required onChange={onInputDisplayName} value={displayName}/>
          <input placeholder="タイトル" required onChange={onInputTitle} value={title}/>
          <textarea placeholder='説明' rows='5' required onChange={onInputDetail} value={detail}/>
        </form>

        <div className={styles.submitButtonContainer}>
          <button onClick={createThread}>作成</button>
        </div>
      
      </div>

    </div>
  )
}

export default AddThreadModal