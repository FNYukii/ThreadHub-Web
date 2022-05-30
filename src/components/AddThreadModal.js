import styles from '../styles/addThreadModal.module.css'

function AddThreadModal(props) {
  return (
    <div className={props.isOpenModal ? `${styles.modal}` : `${styles.modal} ${styles.invisible}`}>
      <form>
        <input placeholder="Thread title" required/>
        <input placeholder="Thread detail" required/>
      </form>

      <button>Create</button>
    </div>
  )
}

export default AddThreadModal