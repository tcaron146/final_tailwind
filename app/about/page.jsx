"use client";
import React from "react";
import ScrollSnap from "@/app/components/ScrollSnap";
import Navbar from "@/app/components/Navbar";
import Content from "@/app/components/Content";
import Footer from "@/app/components/Footer";
import Carousel from "@/app/components/Carousel";


const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow bg-secondary">
      <Navbar />
    </div>
    <Footer />
  </div>
  )
}

export default page