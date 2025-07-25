// app/products/page.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Productspage.module.css";
import { products } from "../../../lib/data/products";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Перелік продукції</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className={styles.card}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className={styles.image}
            />
            <h3 className={styles.textName}>{product.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
