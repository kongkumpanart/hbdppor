'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const MAX_DIGITS = 3;

export default function CakePage() {
  const [age, setAge] = useState('');
  const router = useRouter();

  const handleNumberClick = (n) => {
    setAge((prev) => (prev.length >= MAX_DIGITS ? prev : prev + n));
  };

  const handleClear = () => setAge('');

  const handleSubmit = () => {
    if (age) router.push(`/hbdpage?age=${age}`);
  };

  const keyClass =
    "h-16 w-16 rounded-full border border-white/20 bg-transparent text-lg font-normal text-white hover:bg-white/10 hover:text-white sm:h-[72px] sm:w-[72px]";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <img
        src="/cake.gif"
        alt="Cake"
        className="mb-8 h-auto w-28 select-none sm:w-32"
        draggable={false}
      />

      <h1 className="mb-8 text-center text-3xl font-medium tracking-tight sm:text-4xl">
        Please enter your age kub
      </h1>

      <div
        aria-live="polite"
        className="mb-8 flex h-16 w-56 items-center justify-center rounded-full border border-white/20 text-3xl tracking-widest"
      >
        {age || <span className="text-white/25">–</span>}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {KEYS.map((n) => (
          <Button key={n} onClick={() => handleNumberClick(n)} className={keyClass}>
            {n}
          </Button>
        ))}
        <Button onClick={handleClear} className={keyClass} aria-label="Clear">
          C
        </Button>
        <Button onClick={() => handleNumberClick('0')} className={keyClass}>
          0
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!age}
          aria-label="Enter"
          className="h-16 w-16 rounded-full bg-white text-lg font-medium text-black hover:bg-white/85 disabled:opacity-30 sm:h-[72px] sm:w-[72px]"
        >
          →
        </Button>
      </div>
    </main>
  );
}
