import styles from '../styles/addCommentModal.module.css'

import { FaTimes } from 'react-icons/fa'
import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore';
import db from '../utilities/Firebase'

function AddCommentModal(props) {

  const [text, setText] = useState('')

  const onInputText = (e) => {
    setText(e.target.value)
  }

  const createComment = () => {
    if (text === '') {
      alert('Please enter text.')
      return
    }

    addDoc(collection(db, 'comments'), {
      threadId: props.threadId,
      createdAt: Date(),
      dailyUserId: 'unknown1234',
      text: text,
    })
    console.log(`text: ${text}`)

    closeModal()
  }

  const closeModal = () => {
    props.close()
  }

  return (
    <div className={props.isOpenModal ? `${styles.modalShadow}` : `${styles.modalShadow} ${styles.invisible}`}>
      <div className={styles.modal}>

        <button className={styles.timesButton} onClick={() => {closeModal()}}>
          <FaTimes/>
        </button>

        <form>
          <textarea placeholder='Text' rows='5' required onChange={onInputText}/>
        </form>

        <div className={styles.submitButtonContainer}>
          <button onClick={createComment}>Add</button>
        </div>
      
      </div>
    </div>
  )
}

export default AddCommentModal