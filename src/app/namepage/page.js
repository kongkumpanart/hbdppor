'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

const MAX_LENGTH = 30;

export default function NamePage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const trimmed = name.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trimmed) return;
    router.push(`/cakepage?name=${encodeURIComponent(trimmed)}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col items-center"
      >
        <h1 className="mb-8 text-center text-3xl font-medium tracking-tight sm:text-4xl">
          What&apos;s your name kub?
        </h1>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={MAX_LENGTH}
          placeholder="Your name"
          autoFocus
          autoComplete="off"
          aria-label="Your name"
          className="mb-6 h-14 w-full rounded-full border border-white/20 bg-transparent px-6 text-center text-xl text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none"
        />

        <Button
          type="submit"
          disabled={!trimmed}
          className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/85 disabled:opacity-30"
        >
          Continue →
        </Button>
      </form>
    </main>
  );
}