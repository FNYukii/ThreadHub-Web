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

    if (title.length > 100) {
      alert('Too many charactors on title.')
      return
    }

    if (detail.length > 100) {
      alert('Too many charactors on detail.')
      return
    }

    addDoc(collection(db, 'threads'), {
      createdAt: Date(),
      dailyUserId: 'unknown1234',
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
          <input placeholder="Thread title" required onChange={onInputTitle} value={title}/>
          <textarea placeholder='Thread detail' rows='5' required onChange={onInputDetail} value={detail}/>
        </form>

        <div className={styles.submitButtonContainer}>
          <button onClick={createThread}>Create</button>
        </div>
      
      </div>

    </div>
  )
}

export default AddThreadModal