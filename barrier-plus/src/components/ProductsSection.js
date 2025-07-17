import Link from "next/link"
import styles from "../styles/ProductsSection.module.css";
const ProductsSection = () => {
    return (
        <section className={styles.section}>
               <Link
      href="/products"
    //   className={styles.link}
      >
        <h2
        className={styles.text}
        >Найкраща продукція оборонного призначення</h2>
        <button
        className={styles.btn}
        >
            <p
            className={styles.text}
            >Наша продукція</p>
        </button>
      </Link> 
        </section>
    )
}
export default ProductsSection