"use client";

import styles from "../styles/PartnersSection.module.css";
import Image from "next/image";

const partners = [
  { name: "АрселорМіттал", img: "/images/partners/arcelor.png" },
  { name: "Дніпросталь", img: "/images/partners/dniprostal.png" },
  { name: "Державна прикордона служба Укараїни", img: "/images/partners/dpsu.png" },
  { name: "Метинве́ст", img: "/images/partners/metinvest.png" },
  { name: "Міністерство оборони України", img: "/images/partners/mou.png" },
  { name: "Национальная гвардия Украины", img: "/images/partners/ngu.png" },
  { name: "Запоріжсталь", img: "/images/partners/zaporizhstal.png" },
];

const PartnersSection = () => {
  return (
    <section className={styles.partnersSection}>
      <h2 className={styles.title}>Наші партнери</h2>
      <div className={styles.partnersGrid}>
        {partners.map((partner, index) => (
          <div key={index} className={styles.card}>
            <Image src={partner.img} alt={partner.name} width={120} height={120} />
            <p className={styles.name}>{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
