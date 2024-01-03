'use client'
import React from 'react'
import Image from 'next/image'
import sea from "../../public/sea-7484743_1920.jpg"
import { useRef, useState } from 'react';

const Hero = () => {
  
  return (
    <div className="w-full h-[100vh]">
      {/*<Image src={sea} className='w-full h-full object-cover' alt="background image" />*/}
      <div className='m-auto'>
        <div className='absolute px-6 py-4 top-[20%] w-full sm:-[50%] h-full'>
          <div className='flex items-center p-4 justify-around'>
            <h1 className='text-secondary'>Welcome</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero