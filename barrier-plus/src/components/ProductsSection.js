import Link from "next/link"
import styles from "../styles/ProductsSection.module.css";
import Image from "next/image";

const ProductsSection = () => {
    return (
        <section className={styles.section}>
       
        <h1
        className={styles.title}
        >
          Якісна продукція оборонного призначення
          </h1>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Image 
              src="/images/egoza.png" 
              alt="Єгоза" 
              width={240} 
              height={240}
              className={styles.imageProduct}
              />
              </li>
            <li className={styles.item}>
              <Image 
              src="/images/gabion.png" 
              alt="Єгоза" 
              width={240} 
              height={240}
              className={styles.imageProduct}
              />
            </li>
            <li className={styles.item}>
              <Image 
              src="/images/mpp.png" 
              alt="Єгоза" 
              width={240} 
              height={240}
              className={styles.imageProduct}
              />
            </li>
            <li className={styles.item}>
              <Image 
              src="/images/acumulyativnaReshitka.png" 
              alt="Єгоза" 
              width={240} 
              height={240}
              className={styles.imageProduct}
              />
            </li>
          </ul>
        <div className={styles.boxLink}>
        <button className={styles.btn}>
          <Link href="/products" className={styles.wrapper}>
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
            </Link>
        </button>
        </div>
        </section>
    )
}
export default ProductsSection