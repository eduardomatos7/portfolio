import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { AosInit } from "./_components/aos-init";
import Header from "./_components/header/Header";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});
const inter = Inter({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio criativo e interativo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable}`}>
      <body
        className="h-screen bg-repeat-space"
        style={{
          background: "linear-gradient(to bottom, #010028 0%, #122152 41%, #07174A 68%, #010028 100%)"
        }}
      >
        <div className="flex justify-center max-w-[90%] sm:max-w-[90%] md:max-w-[51rem] mx-auto overflow-hidden">
          <Header />
          {children}
          <Analytics />
        </div>
        <Footer />

        <AosInit /> {/* Esse Aos quebra o layout no mobile, por isso se utiliza o overflow hidden acima*/}
      </body>
    </html>
  );
}
