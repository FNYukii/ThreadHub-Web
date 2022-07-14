import styles from '../styles/NotFoundScreen.module.css'

function NotFoundScreen() {
  return (
    <main>
      <div className={styles.largeContainer}>
        <h2>Page not found.</h2>
        <p>ページが見つかりません。</p>
      </div>
    </main>
  )
}

export default NotFoundScreen