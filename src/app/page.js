'use client';  // บอกให้ Next.js รู้ว่าไฟล์นี้เป็น Client Component

import Link from 'next/link';
import styles from '@/app/styles/Home.module.css';
import { useState } from 'react';
import { Switch } from "@/components/ui/switch"; // นำเข้า Switch

export default function Home() {
  const [isSwitchOn, setIsSwitchOn] = useState(false); // สร้าง state สำหรับ Switch

  const handleSwitchChange = (checked) => {
    setIsSwitchOn(checked); // อัปเดตสถานะ Switch
    if (checked) {
      window.location.href = '/cakepage'; // เปลี่ยนหน้าเมื่อเปิด Switch
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Press to turn off the light</h1>
      <div className={styles.switchContainer}>
        <Switch
          checked={isSwitchOn}
          onCheckedChange={handleSwitchChange}
          className={`${
            isSwitchOn ? 'bg-black' : 'bg-gray-400'
          } relative inline-flex h-[40px] w-[80px] border-2 border-transparent rounded-full transition-colors duration-200 ease-in-out`} // ปรับขนาดสวิตช์ที่นี่
        >
          <span
            className={`${
              isSwitchOn ? 'translate-x-9' : 'translate-x-0'
            } inline-block h-[36px] w-[36px] bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out`} // ปรับขนาดวงกลมภายในสวิตช์ที่นี่
          />
        </Switch>
      </div>
    </div>
  );
}
