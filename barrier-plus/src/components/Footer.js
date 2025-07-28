import Link from 'next/link';
import styles from '../styles/Footer.module.css'; 
import Image from 'next/image';

const Footer = () => {
  return (
    <footer aria-label="товари оборонного призначення" className={styles.footer}>
      <div  className={styles.company}>
        <Image src="/images/Logo.png" alt="Логотип компанії" aria-label="Бар'єр плюс" width={80} height={80} priority />
        <div className={styles.contactsContainer}>
        <h3>© 2025 ТОВ `Бар`єр Плюс`. Всі права захищено.</h3>
        <div className={styles.contactBlock}>
          <p>Телефон: <a href="tel:+380734220391">+38 0 (98) 955 04 64</a></p>
          <p>Електронна пошта: <a href="mailto:barrierplusukraine@gmail.com">barrierplusukraine@gmail.com</a></p>
          <p>Адреса: Київ, бульвар Вацлава Гавела, буд 8, корпус 9</p>
        </div>
      </div>
      </div>
     <div>
        <span>© 2025 All rights reserved Developed a project:{' '}</span>
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