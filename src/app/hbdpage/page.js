import Link from 'next/link';

export const metadata = {
  title: "Happy Birthday P'opor",
};

export default function HbdPage({ searchParams }) {
  const name = (searchParams?.name ?? '').toString().trim().slice(0, 30);
  const age = (searchParams?.age ?? '').toString().replace(/\D/g, '').slice(0, 3);

  if (!age || !name) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <Link
          href="/namepage"
          className="rounded-full border px-6 py-3 text-sm transition-colors hover:bg-neutral-100"
        >
          Start from the beginning
        </Link>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <img
        src="/gifhbd-unscreen.gif"
        alt="Happy Birthday"
        className="mb-10 h-auto w-44 select-none sm:w-56"
        draggable={false}
      />

      <p className="mb-3 text-sm tracking-[0.25em] text-neutral-500">
        Happy Birthday to {name} kubb
      </p>

      <h1 className="mb-10 text-7xl font-semibold tracking-tight sm:text-8xl">
        {age}
        <span className="ml-2 text-3xl font-normal text-neutral-400 sm:text-4xl">yo!</span>
      </h1>

      <div className="max-w-md space-y-2 text-lg leading-relaxed text-neutral-700">
        <p>Wishing you endless happiness every day.</p>
        <p>May you enjoy good health and live the life you&apos;ve always dreamed of.</p>
        <p>Here&apos;s to your success and becoming rich kubbb!!!</p>
      </div>
    </main>
  );
}
