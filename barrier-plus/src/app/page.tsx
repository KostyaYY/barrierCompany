// import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
// import Header from '../components/Header';
// import Layout from '../components/Layout';
// import ContactsSection from '../components/ContactsSection';

export default function Home() {
  return (
    // <Layout>
    <>
      {/* <Header/> */}
      <main id="products" className={styles.main}>
        {/* <ContactsSection /> */}
        
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
    // </Layout>
  );
}
