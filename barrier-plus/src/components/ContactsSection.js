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
          <p>Телефон: <a href="tel:+380639662916">+38 0 (63) 966 29 16</a></p>
          <p>Електронна пошта: <a href="mailto:barrierplusukraine@gmail.com">barrierplusukraine@gmail.com</a></p>
          <p>Адрес: Київ, бульвар Вацлава Гавела, буд 8, корпус 9</p>
        </div>
      </div>

      <div className={styles.formContainer}>
        <h3>ЗАМОВИТИ ДЗВІНОК</h3>
        <form className={styles.contactForm} action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="6fe05f06-499b-49f1-8a31-c055d9839407" />
           
          <label htmlFor="name">Ваше ім`я</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Миколай"
            required
          />
          <label htmlFor="email">Ваша електронна адреса</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="mikolay@mail.com"
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
           <input type="hidden" name="redirect" value="https://web3forms.com/success" />
          <button type="submit" aria-labelledby="Єгоза МПП Габіон Метал">Замовлення</button>
        </form>
      </div>
    </section>
  );
};

export default ContactsSection;