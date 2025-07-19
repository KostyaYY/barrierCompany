import Link from "next/link"
import styles from "../styles/ProductsSection.module.css";
import Image from "next/image";

const ProductsSection = () => {
    return (
        <section className={styles.section}>
       
        <h2
        className={styles.title}
        >
          Якісна продукція оборонного призначення
          </h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Image 
              src="/images/egoza.png" 
              alt="Єгоза" 
              width={200} 
              height={200}
              className={styles.imageProduct}
              />
              </li>
            <li className={styles.item}>
              <Image 
              src="/images/gabion.png" 
              alt="Єгоза" 
              width={200} 
              height={200}
              className={styles.imageProduct}
              />
            </li>
            <li className={styles.item}>
              <Image 
              src="/images/mpp.png" 
              alt="Єгоза" 
              width={200} 
              height={200}
              className={styles.imageProduct}
              />
            </li>
          </ul>
        <Link href="/products" className={styles.wrapper}>
        <button className={styles.btn}>
            <p className={styles.text}>
              Переглянути продукцію
            </p>
            <Image
             src="/images/bullet.png"
            alt="Пуля"
            width={50}
            height={45}
            className={styles.bullet}
            />
        </button>
      </Link>
        </section>
    )
}
export default ProductsSection