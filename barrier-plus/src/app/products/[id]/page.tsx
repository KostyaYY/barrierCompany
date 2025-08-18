// app/products/[id]/page.tsx
"use client";

import { use } from "react";
import { products } from "../../../../lib/data/products";
import { BackButton } from "@/components/BackBtn";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/ProductDetailPage.module.css";
import style from "../../../styles/AboutCompany.module.css";

interface Props {
  params: Promise<{ id: string }>;
}

const ProductDetailPage = ({ params }: Props) => {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  
  if (!product) return <div className={styles.errorTitle}>Продукт не знайдено</div>;

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
      <h3 className={styles.featuresTitle}>Характиристики та ціни:</h3>
      <ul>
        {product.types.map((type) => (
          <li key={type.id} className={styles.featuresItem}>
           <Image
            src="/images/bullet.png"
            alt="Пуля"
            width={40}
            height={30}
            aria-label="Пуля"
            className={styles.featuresImg}
            />  
          <div>
          <p className={styles.featuresName}>Найменування: <span className={styles.featuresText}>{type.size}</span></p>   
          {type.length && <p className={styles.featuresName}>Довжина:<span className={styles.featuresText}>{type.length}</span></p>}
          {type.diametr && <p className={styles.featuresName}>Діаметр:<span className={styles.featuresText}>{type.diametr}</span></p>}
          <p className={styles.featuresName}>Ціна:<span className={styles.featuresText}>{type.price} грн</span></p>
          </div>
          </li>
  
        ))}
      </ul>
       <Link href={'/contacts'}>
            <button className={style.btn}>
                <p className={style.btnText}>Замовити консультацію</p>
            </button>
        </Link>
    </div>
  );
};

export default ProductDetailPage;
