import styles from '../styles/commentPopupMenu.module.css'
import { useEffect, useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { getAuth } from "firebase/auth"

function CommentPopupMenu(props) {

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
          {loginUserId === props.userId &&
            <button className={styles.deleteButton} onClick={onClickDeleteComment}>Delete this comment</button>
          }

          <button onClick={onClickReport}>Report</button>
        </div>
      }
    </div>
  )
}

export default CommentPopupMenu