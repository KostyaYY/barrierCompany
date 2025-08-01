import styles from "./page.module.css";
import ProductsSection from "../components/ProductsSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <>
      <main id="products" aria-label="Продукція оборонного призначення" className={styles.main}>
        <ProductsSection />
        <PartnersSection/>
      </main>
    </>
  );
}
