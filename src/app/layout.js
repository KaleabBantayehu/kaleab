import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "../data/portfolio.js";
import { portfolio } from "../data/portfolio.js";

const manrope = Manrope({
  weight: ["400", "500","700"],
  subsets: ['latin'],
})

const jetbrains_mono = JetBrains_Mono({
  weight: ["400","500","700"],
  subsets: ["latin"],
})

export const metadata = {
  title: portfolio.name,
  description: portfolio.role,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.className} ${jetbrains_mono.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
