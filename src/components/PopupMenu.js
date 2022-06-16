import styles from '../styles/popupMenu.module.css'
import { useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'

function PopupMenu(props) {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const onClickDeleteThread = () => {
    setIsOpenMenu(false)
  }

  const onClickDeleteComment = () => {
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
          {props.isThread &&
            <button onClick={onClickDeleteThread}>Delete this thread</button>
          }
          
          {!props.isThread &&
            <button onClick={onClickDeleteComment}>Delete this comment</button>
          }
          <button onClick={onClickReport}>Report</button>
        </div>
      }
    </div>
  )
}

export default PopupMenu