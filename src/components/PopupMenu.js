import styles from '../styles/popupMenu.module.css'
import { useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'

function PopupMenu() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const onClickDelete = () => {
    setIsOpenMenu(false)
  }

  const onClickReport = () => {
    setIsOpenMenu(false)
  }

  return (
    <div className={styles.root}>
      <button className={styles.menuButton} onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <FaEllipsisH/>
      </button>

      {isOpenMenu &&
        <div className={styles.menu}>
          <button onClick={onClickDelete}>Delete</button>
          <button onClick={onClickReport}>Report</button>
        </div>
      }
    </div>
  )
}

export default PopupMenu