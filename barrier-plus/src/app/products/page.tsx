import Link from "next/link";
import styles from "../../styles/Productspage.module.css" ;
import { products } from "../../../lib/data/products";
const ProductsPage = () => {
    // const data = await products;
    return (
        <div>
            <h2 className={styles.title}>Наша продукція</h2>
            <ul>
                {products.map((product) => (
        <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProductsPage