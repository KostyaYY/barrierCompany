import Link from 'next/link';
import styles from '../styles/Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
     <div>
        <span>© 2023 All rights reserved Developed a project:{' '}</span>
        <Link
          className={styles.link}
          href="https://github.com/Aleksey0808"
        >
          Aleksey
        </Link>
        <span className={styles.span}>and</span>
        <Link
          className={styles.link}
          href="https://github.com/KostyaYY"
        >
          Konstantin
        </Link>
      </div>
    </footer>
  )
}

export default Footer