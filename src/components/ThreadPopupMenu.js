import styles from '../styles/threadPopupMenu.module.css'
import { useEffect, useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { getAuth } from "firebase/auth"
import { doc, deleteDoc } from "firebase/firestore"
import db from '../utilities/Firebase'

function ThreadPopupMenu(props) {

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

  const onClickDeleteThread = async() => {
    setIsOpenMenu(false)
    await deleteDoc(doc(db, "threads", props.thread.id))
  }

  const onClickReportThread = () => {
    setIsOpenMenu(false)
  }

  return (
    <div className={styles.root}>
      <button className={styles.menuButton} onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <FaEllipsisH/>
      </button>

      {isOpenMenu &&
        <div className={styles.menu}>          
          {loginUserId === props.thread.data().userId &&
            <button className={styles.deleteButton} onClick={onClickDeleteThread}>スレッドを削除</button>
          }

          <button onClick={onClickReportThread}>スレッドを報告</button>
        </div>
      }
    </div>
  )
}

export default ThreadPopupMenu