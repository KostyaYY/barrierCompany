// import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
// import ContactsSection from '../components/ContactsSection';
// import AboutMeSection from '../components/AboutMeSection';

export default function Home() {
  return (
    <>
      <main id="products" className={styles.main}>
        {/* <ContactsSection /> */}
        {/* <AboutMeSection /> */}
        
        <div className={styles.ctas}>
        
            Deploy now
       
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      <Link
      href="/produts"
      >
        <button>Переглянути продукцію</button>
      </Link>
      </main>
      </>
  );
}
