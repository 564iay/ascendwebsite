import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundShader from "@/components/BackgroundShader";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ascend | AI-Powered Personal Growth RPG",
  description: "Level up your life with Ascend. Build habits, conquer quests, and get guided by your personalized AI mentor.",
  openGraph: {
    title: "Ascend | AI-Powered Personal Growth RPG",
    description: "Level up your life with Ascend. Build habits, conquer quests, and get guided by your personalized AI mentor.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen text-white">
        <BackgroundShader />
        <Navbar />
        <main className="relative z-10 pt-24 pb-16">
          {children}
        </main>
      </body>
    </html>
  );
}
