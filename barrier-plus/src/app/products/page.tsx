// app/products/page.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Productspage.module.css";
import { products } from "../../../lib/data/products";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title} aria-label="Товари оборонного призначення">Перелік продукції</h2>
      <ul className={styles.grid}>
        {products.map((product) => (
          <li key={product.id}>
          <Link href={`/products/${product.id}`} className={styles.card}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className={styles.image}
              aria-label={product.name}
            />
            <h3 className={styles.textName} aria-label={product.name}>{product.name}</h3>
          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
