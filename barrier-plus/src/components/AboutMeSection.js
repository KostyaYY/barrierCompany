'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Loading from "@/components/Loading";

import styles from '../styles/AboutMeSection.module.css';
import style from "../styles/AboutCompany.module.css";
import Link from 'next/link';
import Image from 'next/image';

const AboutMeSection = () => {
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
    <section className={styles.AboutMeSection} aria-label="Бар'єр плюс">
          {isLoading && <Loading/>}
          <h2 className={styles.title} aria-label="для збройних сил україни">Постачальник металевих виробів оборонного призначення</h2>
           <Image
          src="/about/egoza1.png"
          alt=""
          width={300}
          height={200}
          className={styles.image1}
        />
          <p className={styles.subtitle} aria-label="фортифікаційні споруди">
            Наша компанія спеціалізується на виробництві та постачанні металевих виробів для зміцнення оборонних позицій Збройних Сил України, сил територіальної оборони та інших військових формувань.
            Ми виготовляємо та постачаємо надійні захисні конструкції, укриття, бліндажі, спостережні пости, оборонні модулі та інші інженерні рішення, призначені для укріплення позицій у зоні бойових дій. У нашому асортименті — як типові серійні споруди, так і індивідуальні проєкти, розроблені відповідно до специфіки місцевості та завдань замовника.    
            Основна мета нашої роботи — забезпечити безпеку особового складу, знизити ризики втрат та підвищити ефективність захисту на передовій. 
          </p>
          <Image
            src="/about/tooth2.png"
            alt=""
            width={300}
            height={200}
            className={styles.image2}
          />
          <p className={styles.subtitle} aria-label="будівельні">
            Ми використовуємо високоякісні матеріали, міцні металеві конструкції та сучасні технології виробництва, що гарантують довговічність і стійкість до вогневого ураження.
            Працюємо виключно з перевіреними логістичними партнерами, що дозволяє нам здійснювати оперативні поставки навіть у найскладніші регіони. 
            Наша команда об`єднує професіоналів з досвідом у сфері військового будівництва, інженерії та логістики. Ми пишаємося своєю місією — допомагати захисникам України.
          </p>
        <Link href={'/contacts'}>
          <button className={style.btn}>
            <p className={style.btnText}>Замовити консультацію</p>
          </button>
        </Link>
    </section>
  );
};

export default AboutMeSection;
