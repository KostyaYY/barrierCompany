import { ReactNode } from "react";
import styles from "../../styles/Productspage.module.css"

type ProductsProps = {
    children: ReactNode;
};

const ProductsLayout = ({children}: ProductsProps) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default ProductsLayout