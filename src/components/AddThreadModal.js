import styles from '../styles/addThreadModal.module.css'

function AddThreadModal(props) {
  return (
    <div className={props.isOpenModal ? `${styles.modalShadow}` : `${styles.modalShadow} ${styles.invisible}`}>
      <div className={styles.modal}>

        <button className={styles.times}>X</button>

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