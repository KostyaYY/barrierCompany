// app/products/[id]/page.tsx
"use client";

import { use } from "react";
import { products } from "../../../../lib/data/products";
import { BackButton } from "@/components/BackBtn";
import Image from "next/image";
import styles from "../../../styles/ProductDetailPage.module.css";

interface Props {
  params: Promise<{ id: string }>;
}

const ProductDetailPage = ({ params }: Props) => {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) return <div>Продукт не знайдено</div>;

  const gallery = product.gallery || [];

  return (
    <div className={styles.container}>
      <BackButton />
      <h2 className={styles.title}>{product.name}</h2>

      {gallery.length > 0 && (
        <div className={styles.galleryGrid}>
          {gallery.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Фото ${index + 1}`}
              width={300}
              height={200}
              className={styles.galleryImage}
            />
          ))}
        </div>
      )}

      <p className={styles.description}>{product.description}</p>
      <p className={styles.complects}>{product.complectText}</p>
    </div>
  );
};

export default ProductDetailPage;
