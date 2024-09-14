'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import styles from '@/app/styles/CakePage.module.css';
import { useRouter } from 'next/navigation'; // นำเข้า useRouter

export default function CakePage() {
  const [age, setAge] = useState('');
  const router = useRouter(); // เรียกใช้ useRouter

  const handleNumberClick = (number) => {
    setAge((prev) => (prev === '0' ? number : prev + number));
  };

  const handleClear = () => {
    setAge('');
  };

  const handleSubmit = () => {
    if (age) {
      router.push(`/hbdpage?age=${age}`); // ใช้ router.push แทน window.location.href
    }
  };

  return (
    <div className={styles.container}>
      <img src="/boo1.gif" alt="Boo" className={styles.cakeImage} />
      <h1 className={styles.title}>Please enter your age kub</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={age}
          readOnly
          className={styles.input}
        />
        <div className={styles.keypad}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '0'].map((num) => (
            <Button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className={styles.keypadButton}
            >
              {num}
            </Button>
          ))}
          <Button onClick={handleClear} className={styles.keypadButton}>
            C
          </Button>
          <Button onClick={handleSubmit} className={styles.keypadButton}>
            ENTER
          </Button>
        </div>
      </div>
    </div>
  );
}
