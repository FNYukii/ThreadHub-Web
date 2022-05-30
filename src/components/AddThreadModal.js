import styles from '../styles/addThreadModal.module.css'

function AddThreadModal(props) {
  return (
    <div className={props.isOpenModal ? `${styles.modalShadow}` : `${styles.modalShadow} ${styles.invisible}`}>
      <div className={styles.modal}>
        <form>
          <input placeholder="Thread title" required/>
          <input placeholder="Thread detail" required/>
        </form>

        <button>Create</button>

      </div>
    </div>
  )
}

export default AddThreadModal