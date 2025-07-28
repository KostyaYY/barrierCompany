import Link from "next/link"
import styles from "../styles/ProductsSection.module.css";
import Image from "next/image";

const ProductsSection = () => {
    return (
        <section aria-label="український перелік продукції оборонного призначення" className={styles.section}>
       
        <h1
        aria-label="Якісна продукція"
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
              aria-label="Єгоза"
              />
              </li>
            <li className={styles.item}>
              <Image 
              src="/images/gabion.png" 
              alt="Єгоза" 
              width={240} 
              height={240}
              className={styles.imageProduct}
              aria-label="Габіон"
              />
            </li>
            <li className={styles.item}>
              <Image 
              src="/images/mpp.png" 
              alt="МПП" 
              width={240} 
              height={240}
              className={styles.imageProduct}
              aria-label="Малопомітна піхотна перешкода"
              />
            </li>
            <li className={styles.item}>
              <Image 
              src="/images/acumulyativnaReshitka.png" 
              alt="Решітка" 
              width={240} 
              height={240}
              className={styles.imageProduct}
              aria-label="Решітка"
              />
            </li>
          </ul>
        <div className={styles.boxLink}>
        <button className={styles.btn}>
          <Link href="/products" className={styles.wrapper} aria-label="Товари">
            <p className={styles.text}>
              Переглянути продукцію
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