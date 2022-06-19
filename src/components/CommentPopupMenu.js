import styles from '../styles/commentPopupMenu.module.css'
import { useEffect, useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { getAuth } from "firebase/auth"
import { doc, deleteDoc } from "firebase/firestore"
import db from '../utilities/Firebase'

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

  const onClickDeleteComment = async() => {
    setIsOpenMenu(false)
    await deleteDoc(doc(db, "comments", props.comment.id))
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
          {loginUserId === props.comment.data().userId &&
            <button className={styles.deleteButton} onClick={onClickDeleteComment}>コメントを削除</button>
          }

          <button onClick={onClickReport}>コメントを報告</button>
        </div>
      }
    </div>
  )
}

export default CommentPopupMenu