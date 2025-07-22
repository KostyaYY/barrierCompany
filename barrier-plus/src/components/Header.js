"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src="/images/Logo.png" alt="Company logo" width={120} height={120} priority />
      </Link>

      <button className={styles.burger} onClick={toggleMenu}>
        <Image
          src={isMenuOpen ? "/images/close.png" : "/images/burger.png"}
          alt={isMenuOpen ? "Close menu" : "Open menu"}
          width={30}
          height={30}
          className={styles.burgerImage}
        />
      </button>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <button onClick={() => handleNavigate('/products')} className={styles.underline}>
          Товари
        </button>
        <button onClick={() => handleNavigate('/about')} className={styles.underline}>
          Про компанію
        </button>
        <button onClick={() =>  handleNavigate('/partners')} className={styles.underline}>
          Наші партнери
        </button>
        <button onClick={() => handleNavigate('/contacts')} className={styles.underline}>
          Контакти
        </button>
      </nav>
    </header>
  );
};

export default Header;
