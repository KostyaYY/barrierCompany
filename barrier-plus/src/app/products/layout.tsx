import { ReactNode } from "react";
type ProductsProps = {
    children: ReactNode;
};

const ProductsLayout = ({children}: ProductsProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default ProductsLayout