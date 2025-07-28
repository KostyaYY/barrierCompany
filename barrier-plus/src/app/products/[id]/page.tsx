// app/products/[id]/page.tsx
"use client";

import { useState } from "react";
import { products } from "../../../../lib/data/products";
import { BackButton } from "@/components/BackBtn";
import Image from "next/image";
import styles from "../../../styles/ProductDetailPage.module.css";

interface Props {
  params: { id: string };
}

const ProductDetailPage = ({ params }: Props) => {
  const product = products.find((p) => p.id === params.id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return <div>Продукт не знайдено</div>;

  const gallery = product.gallery || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.container}>
      <BackButton/>
      <h2 className={styles.title}>{product.name}</h2>

      {gallery.length > 0 && (
        <div className={styles.sliderWrapper}>
          <button className={styles.arrow} onClick={prevImage}>
            ◀
          </button>

          <Image
            src={gallery[currentImageIndex]}
            alt={`Фото ${currentImageIndex + 1}`}
            width={600}
            height={400}
            className={styles.sliderImage}
          />

          <button className={styles.arrow} onClick={nextImage}>
            ▶
          </button>
        </div>
      )}

      <p className={styles.description}>{product.description}</p>
      <p className={styles.complects}>{product.complectText}</p>
    </div>
  );
};

export default ProductDetailPage;
