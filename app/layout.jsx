"use client"
import Navbar from "@/app/components/Navbar";
import { Inter } from 'next/font/google'
import { AuthContextProvider } from "./context/AuthContext"
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={inter.className}>
        <div>
          <div>
            <AuthContextProvider>
              <Navbar />
              {children}
            </AuthContextProvider>
            </div>
            </div>
          </body>
        </html >
        );
}
