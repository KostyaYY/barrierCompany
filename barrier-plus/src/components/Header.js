// import NavBar from './NavBar'
// import styles from '../styles/Header.module.scss'
import styles from '../styles/Header.module.css';
import Link from 'next/link'
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
         <Image
          className={styles.logo}
          src="/images/logo.png"
          alt="logo"
          width={160}
          height={130}
          priority
        />
      </Link> 
    </header>
  )
}

export default Header