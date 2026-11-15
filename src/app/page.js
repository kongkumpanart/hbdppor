'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Switch } from "@/components/ui/switch";

export default function Home() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const router = useRouter();

  const handleSwitchChange = (checked) => {
    setIsSwitchOn(checked);
    if (checked) {
      // ให้หน้าจอค่อยๆ มืดลงก่อนเปลี่ยนหน้า
      setTimeout(() => router.push('/namepage'), 600);
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-10 px-6">
      <img
        src="/light.jpeg"
        alt="Light bulb"
        className="h-auto w-44 select-none sm:w-52"
        draggable={false}
      />

      <h1 className="text-center text-3xl font-medium tracking-tight sm:text-4xl">
        Press to turn off the light
      </h1>

      <Switch
        id="toggle-switch"
        aria-label="Turn off the light"
        checked={isSwitchOn}
        onCheckedChange={handleSwitchChange}
      />

      {/* overlay ตอนปิดไฟ */}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 z-40 bg-black transition-opacity duration-500 ${
          isSwitchOn ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </main>
  );
}
