import styles from '../styles/popupMenu.module.css'
import { useEffect, useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { getAuth } from "firebase/auth"

function PopupMenu(props) {

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [loginUserId, setLoginUserId] = useState('')

  useEffect(() => {
    // Get user
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setLoginUserId(user.uid)
    }
  }, [])

  const onClickDeleteThread = () => {
    setIsOpenMenu(false)
    // TODO: Delete my thread
  }

  const onClickDeleteComment = () => {
    setIsOpenMenu(false)
    // TODO: Delete my comment
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

          {props.isThread && loginUserId === props.userId &&
            <button onClick={onClickDeleteThread}>Delete this thread</button>
          }
          
          {!props.isThread && loginUserId === props.userId &&
            <button onClick={onClickDeleteComment}>Delete this comment</button>
          }


          <button onClick={onClickReport}>Report</button>
        </div>
      }
    </div>
  )
}

export default PopupMenu