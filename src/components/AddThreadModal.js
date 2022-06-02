import styles from '../styles/addThreadModal.module.css'

import { FaTimes } from 'react-icons/fa'
import React, { useState } from 'react'

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
    console.log(`title: ${title}, detail: ${detail}`)
  }

  return (
    <div className={props.isOpenModal ? `${styles.modalShadow}` : `${styles.modalShadow} ${styles.invisible}`}>
      <div className={styles.modal}>

        <button className={styles.timesButton} onClick={() => {props.onTapTimes()}}>
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