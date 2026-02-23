import Link from "next/link"
import styles from "../styles/ProductsSection.module.css";
import Image from "next/image";

const ProductsSection = () => {
    return (
        <section aria-labelledby="Єгоза МПП Габіон Метал" className={styles.section}>
        <h1
        aria-labelledby="Єгоза МПП Габіон Метал"
        className={styles.title}
        >
          Надійна та якісна продукція оборонного призначення 
          </h1>
          <p className={styles.textAfter}>Від міцного металу до непохитної оборони – будуємо безпеку разом!</p>
        <div className={styles.boxLink}>
        <button className={styles.btn}>
          <Link href="/products" className={styles.wrapper} aria-label="Товари">
            <p className={styles.text}>
              Каталог товарів
            </p>
            <Image
             src="/images/bullet.png"
            alt="Пуля"
            width={50}
            height={45}
            className={styles.bullet}
            aria-label="Пуля"
            />
            </Link>
        </button>
        </div>
        </section>
    )
}
export default ProductsSection