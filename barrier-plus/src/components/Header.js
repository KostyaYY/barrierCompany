"use client";

import { useState } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image
          src="/images/Logo.png"
          alt="Company logo"
          width={160}
          height={130}
          priority
        />
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
        <Link
          href="#products"
          className={styles.underline}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('products');
          }}
        >
          Товари
        </Link>
        <Link
          href="#contacts"
          className={styles.underline}
          onClick={() => setIsMenuOpen(false)}
        >
          Контакти
        </Link>
        <Link
          href="#certificates"
          className={styles.underline}
          onClick={() => setIsMenuOpen(false)}
        >
          Сертифікати
        </Link>
        <Link
          href="#they-trust-us"
          className={styles.underline}
          onClick={() => setIsMenuOpen(false)}
        >
          Наші партнери
        </Link>
      </nav>
    </header>
  );
};

export default Header;