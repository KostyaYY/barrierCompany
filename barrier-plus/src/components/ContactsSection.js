'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Loading from "@/components/Loading";

import styles from '../styles/ContactsSection.module.css';

const ContactsSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  let timeoutId;
  const handleRouteChange = () => {
    setIsLoading(true)
    timeoutId = setTimeout(() => setIsLoading(false),500);
  };
  handleRouteChange()
  return () => clearTimeout(timeoutId);
}, [pathname, router]);

  return (
    <section className={styles.contactsSection}>
      {isLoading && <Loading/>}
      <div className={styles.contactsContainer}>
        <h2>НАШІ КОНТАКТИ</h2>
        <div className={styles.contactBlock}>
          <p>Телефон: <a href="tel:+380734220391">+38 0 (98) 955 04 64</a></p>
          <p>Електронна пошта: <a href="mailto:barrierplusukraine@gmail.com">barrierplusukraine@gmail.com</a></p>
          <p>Адрес: Київ, бульвар Вацлава Гавела, буд 8, корпус 9</p>
        </div>
      </div>

      <div className={styles.formContainer}>
        <h3>ЗАМОВИТИ ДЗВІНОК</h3>
        <form className={styles.contactForm}>
          <label htmlFor="name">Ваше ім`я</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Steve"
            required
          />
          <label htmlFor="email">Ваша електронна адреса</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="steve@mail.com"
            required
          />
          <label htmlFor="phone">Номер телефону</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+38(0"
            required
          />
          <button type="submit">Замовлення</button>
        </form>
      </div>
    </section>
  );
};

export default ContactsSection;