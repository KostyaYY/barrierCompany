import { ReactNode } from "react";
import { Metadata } from "next";
import styles from "../../styles/Productspage.module.css"

type ProductsProps = {
    children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Металі вироби | Барʼєр Плюс',
  description: 'Єгоза, МПП, Габіони, Маскувальна сітка, Антидронова сітка.',
  openGraph: {
    title: 'Металеві вироби',
    description: 'Купити металеві вироби.',
    url: 'https://www.barrierplus.store',
  },
};
const ProductsLayout = ({children}: ProductsProps) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default ProductsLayout