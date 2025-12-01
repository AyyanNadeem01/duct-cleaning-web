"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/lib/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = setTimeout(() => setLoading(true), 0);
    const end = setTimeout(() => setLoading(false), 500);
    return () => {
      clearTimeout(start);
      clearTimeout(end);
    };
  }, [pathname]);

  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
        >
          <Header />
          {loading && <div className="fixed inset-0 z-9999 flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-cyan-100 bg-opacity-80 backdrop-blur-lg">
            <div className="flex flex-col items-center gap-4 animate-fadeInUp">
              <svg className="animate-spin-slow w-16 h-16 text-blue-500" viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="20" fill="none" stroke="#06b6d4" strokeWidth="6" strokeDasharray="31.4 31.4" />
              </svg>
              <span className="text-xl font-bold text-blue-600 animate-pulse-slow">Loading...</span>
            </div>
          </div>}
          <main className={`transition-all duration-500 ease-in-out ${loading ? 'pointer-events-none opacity-0' : 'opacity-100'} page-fade`}>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
