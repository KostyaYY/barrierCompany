// import Image from "next/image";
// import Link from "next/link";
import styles from "./page.module.css";
// import ContactsSection from '../components/ContactsSection';
// import AboutMeSection from '../components/AboutMeSection';
import ProductsSection from "../components/ProductsSection";

export default function Home() {
  return (
    <>
      <main id="products" aria-label="Продукція оборонного призначення" className={styles.main}>
        {/* <AboutMeSection /> */}
        <ProductsSection />
        {/* <ContactsSection /> */}
      </main>
    </>
  );
}
