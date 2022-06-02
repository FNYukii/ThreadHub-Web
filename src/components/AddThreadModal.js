import styles from '../styles/addThreadModal.module.css'

import { FaTimes } from 'react-icons/fa'
import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore';
import db from '../utilities/Firebase'

function AddThreadModal(props) {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

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

    addDoc(collection(db, 'threads'), {
      createdAt: Date(),
      dailyUserId: 'helloooo',
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
    <div className={props.isOpenModal ? `${styles.modalShadow}` : `${styles.modalShadow} ${styles.invisible}`}>
      <div className={styles.modal}>

        <button className={styles.timesButton} onClick={() => {closeModal()}}>
          <FaTimes/>
        </button>

        <form>
          <input placeholder="Thread title" required onChange={onInputTitle}/>
          <textarea placeholder='Thread detail' rows='5' required onChange={onInputDetail}/>
        </form>

        <div className={styles.submitButtonContainer}>
          <button onClick={createThread}>Create a thread</button>
        </div>
      
      </div>
    </div>
  )
}

export default AddThreadModal