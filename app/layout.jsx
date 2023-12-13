"use client"
import ScrollSnap from "@/app/components/ScrollSnap";
import Navbar from "@/app/components/Navbar";
import Content from "@/app/components/Content";
import Footer from "@/app/components/Footer";
import Carousel from "@/app/components/Carousel";
import { Inter } from 'next/font/google'
import { AuthContextProvider } from "./context/AuthContext"
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow bg-secondary">
            <AuthContextProvider>
              <Navbar />
              <ScrollSnap />
              <Content />
              <Carousel />
              <Footer />

              {children}
            </AuthContextProvider>
            </div>
            </div>
          </body>
        </html >
        );
}
