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
              src="/home/gabion.png" 
              alt="gabion" 
              width={240} 
              height={240}
              className={styles.imageProduct}
              aria-label="gabion"
              />
              </li>
            <li className={styles.item}>
              <Image 
              src="/home/piramida.png" 
              alt="piramida" 
              width={240} 
              height={240}
              className={styles.imageProduct}
              aria-label="piramida"
              />
            </li>
            <li className={styles.item}>
              <Image 
              src="/home/setka.png" 
              alt="setka" 
              width={240} 
              height={240}
              className={styles.imageProduct}
              aria-label="setka"
              />
            </li>
            <li className={styles.item}>
              <Image 
              src="/home/tros.png" 
              alt="tros" 
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