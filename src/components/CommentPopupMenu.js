import styles from '../styles/CommentPopupMenu.module.css'
import { useEffect, useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { getAuth } from "firebase/auth"
import { doc, deleteDoc } from "firebase/firestore"
import db from '../utilities/Firebase'

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

function CommentPopupMenu(props) {

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
    await deleteDoc(doc(db, "comments", props.comment.id))
  }

  return (
    <div className={styles.root}>

      {loginUserId === props.comment.data().userId &&
        <Menu menuButton={<MenuButton className={styles.menuButton}><FaEllipsisH/></MenuButton>} direction='left'>
          <MenuItem onClick={onClickDeleteComment}>コメントを削除</MenuItem>
        </Menu>
      }

    </div>
  )
}

export default CommentPopupMenu