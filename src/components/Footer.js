import styles from '../styles/footer.module.css'

function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.largeContainer}>
        <a href="/" className={styles.logo}>Thread Hub</a>
        <p>誰でも利用できる匿名掲示板</p>
        <p className={styles.copyright}>Copyright Yu357 2022.</p>
      </div>
    </footer>
  )
}

export default Footer