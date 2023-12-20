import React from 'react'
import water from "../../public/sea-7484743_1920.jpg"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <Image className='w-full h-full object-cover' src={water} alt="water background image" />
    </div>
  )
}

export default Hero