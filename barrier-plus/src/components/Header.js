"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/logo.svg';

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
    <header aria-label="товари оборонного призначення" className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={Logo} alt="Логотип компанії" aria-label="Бар'єр плюс" width={120} height={120} priority />
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

      <nav aria-label="Пошук товарів оборонного призначення" className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <button aria-label="перелік товарів" onClick={() => handleNavigate('/products')} className={styles.underline}>
          Товари
        </button>
        <button aria-label="про компанію Бар'єр плюс" onClick={() => handleNavigate('/about')} className={styles.underline}>
          Про компанію
        </button>
        <button aria-label="метало прокат" onClick={() =>  handleNavigate('/partners')} className={styles.underline}>
          Наші партнери
        </button>
        <button aria-label="телефон та електронна пошта" onClick={() => handleNavigate('/contacts')} className={styles.underline}>
          Контакти
        </button>
      </nav>
    </header>
  );
};

export default Header;
