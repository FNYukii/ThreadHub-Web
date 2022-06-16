import styles from '../styles/popupMenu.module.css'
import { useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'

function PopupMenu() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className={styles.root}>
      <button className={styles.menuButton} onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <FaEllipsisH/>
      </button>

      {isOpenMenu &&
        <div className={styles.menu}>
          <button>Delete</button>
          <button>Report</button>
        </div>
      }
    </div>
  )
}

export default PopupMenu