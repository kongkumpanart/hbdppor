import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HBD2P'opor",
  description: "15/09",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <footer className="pointer-events-none fixed bottom-0 right-0 z-50 p-6 text-right text-xs tracking-[0.2em] text-neutral-400">
          kk
        </footer>
      </body>
    </html>
  );
}
