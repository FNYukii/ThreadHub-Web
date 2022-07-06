import styles from '../styles/notFoundPage.module.css'

function NotFoundPage() {
  return (
    <main>
      <div className={styles.largeContainer}>
        <h2>Page not found.</h2>
        <p>ページが見つかりません。</p>
      </div>
    </main>
  )
}

export default NotFoundPage