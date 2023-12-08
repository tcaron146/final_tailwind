import React from 'react';
import ScrollSnap from '@/components/ScrollSnap';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Content from '@/components/Content';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow bg-secondary overflow-y-scroll'>
        <Navbar />
        <ScrollSnap />
        <Content />
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}