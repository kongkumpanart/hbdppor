'use client';

import Link from 'next/link';
import styles from '@/app/styles/Home.module.css';
import { useState } from 'react';
import { Switch } from "@/components/ui/switch"; // นำเข้า Switch
import { useRouter } from 'next/navigation'; // นำเข้า useRouter

export default function Home() {
  const [isSwitchOn, setIsSwitchOn] = useState(false); // สร้าง state สำหรับ Switch
  const router = useRouter(); // เรียกใช้ useRouter

  const handleSwitchChange = (checked) => {
    setIsSwitchOn(checked); // อัปเดตสถานะ Switch
    if (checked) {
      router.push('/cakepage'); // ใช้ router.push แทนการใช้ window.location.href
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Press to turn off the light</h1>
      <div className={styles.switchContainer}>
        <Switch
          id="toggle-switch"
          checked={isSwitchOn}
          onCheckedChange={handleSwitchChange}
          className={`${
            isSwitchOn ? 'bg-black' : 'bg-gray-400'
          } relative inline-flex h-[40px] w-[80px] border-2 border-transparent rounded-full transition-colors duration-200 ease-in-out`}
        >
          <span
            className={`${
              isSwitchOn ? 'translate-x-9' : 'translate-x-0'
            } inline-block h-[36px] w-[36px] bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </div>
  );
}
