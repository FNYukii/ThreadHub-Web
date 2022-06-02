import styles from '../styles/addThreadModal.module.css'

import { FaTimes } from 'react-icons/fa'

function AddThreadModal(props) {
  return (
    <div className={props.isOpenModal ? `${styles.modalShadow}` : `${styles.modalShadow} ${styles.invisible}`}>
      <div className={styles.modal}>

        <button className={styles.timesButton} onClick={() => {props.onTapTimes()}}>
          <FaTimes/>
        </button>

        <form>
          <input placeholder="Thread title" required/>
          <textarea placeholder='Thread detail' rows='5' required/>
        </form>

        <div className={styles.submitButtonContainer}>
          <button>Create a thread</button>
        </div>
      
      </div>
    </div>
  )
}

export default AddThreadModal