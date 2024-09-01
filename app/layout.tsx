import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: '300' });

export const metadata: Metadata = {
  title: "Anurag Choudhary's Portfolio",
  description: "Anurag Choudhary | Software Developer in Mumbai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body className={`${jetbrains.className} transition-all duration-300 bg-one text-eight`}>
                <Navbar />
                    {children}
                <Footer />
          </body>
      </html>
  );
}
