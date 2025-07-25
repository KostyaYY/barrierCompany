'use client'; // обязательно для хуков
import { useRouter } from 'next/navigation';
import styles from "../styles/BackBtn.module.css";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button 
    onClick={() => router.back()}
    className={styles.btn}    
    >
      <p className={styles.text}>⬅ Назад</p>
    </button>
  );
}