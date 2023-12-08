"use client"
import Navbar from "@/components/Navbar"
import ScrollSnap from "../components/ScrollSnap"
import Content from "../components/Content"
import Footer from "../components/Footer"


export default function Home() {
  return (<div className='bg-secondary pb-20 h-screen overflow-y-scroll overflow-x-scroll'>
    <Navbar />
    <ScrollSnap />
    <Content />
    <Footer />
    </div>
  )
}
