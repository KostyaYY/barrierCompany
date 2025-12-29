import Link from 'next/link';
import styles from '../styles/Footer.module.css'; 
import Image from 'next/image';

const Footer = () => {
  return (
    <footer aria-labelledby="Єгоза МПП Габіон Метал" className={styles.footer}>
      <div  className={styles.company}>
        <Image src="/images/logo.svg" alt="Логотип компанії" aria-label="Бар'єр плюс" width={80} height={80} priority />
        <div className={styles.contactsContainer}>
        <h3>© 2025 Компанія `Бар`єр Плюс`</h3>
        <div className={styles.contactBlock}>
          <p>Телефон: <a href="tel:+380734220391">+38 0 (98) 955 04 64</a></p>
          <p>Електронна пошта: <a href="mailto:barrierplusukraine@gmail.com">barrierplusukraine@gmail.com</a></p>
          <p>Адреса: Київ, бульвар Вацлава Гавела, буд 8, корпус 9</p>
        </div>
      </div>
      </div>
     <div>
        <span aria-labelledby="Єгоза МПП Габіон Метал">© 2025 All rights reserved Developed a project:{' '}</span>
        <Link
          className={styles.link}
          href="https://github.com/Aleksey0808"
        >
          A
        </Link>
        <span className={styles.span}>&</span>
        <Link
          className={styles.link}
          href="https://github.com/KostyaYY"
        >
          K
        </Link>
      </div>
    </footer>
  )
}

export default Footer