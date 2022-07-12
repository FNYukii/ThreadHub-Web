import styles from '../styles/threadPopupMenu.module.css'
import { useEffect, useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { getAuth } from "firebase/auth"
import { doc, deleteDoc } from "firebase/firestore"
import db from '../utilities/Firebase'

import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

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

  return (
    <div className={styles.root}>
      {loginUserId === props.thread.data().userId &&
        <div>

          <Menu menuButton={<MenuButton className={styles.menuButton}><FaEllipsisH/></MenuButton>} direction='left'>
            <MenuItem onClick={onClickDeleteThread}>スレッドを削除</MenuItem>
          </Menu>

        </div>
      }
    </div>
  )
}

export default ThreadPopupMenu