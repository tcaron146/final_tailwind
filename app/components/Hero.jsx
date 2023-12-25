import React from 'react'
import Image from 'next/image'
import Form from './Form'
import sea from "../../public/sea-7484743_1920.jpg"

const Hero = () => {

  return (
    <div className="w-full h-[100vh]">
      <Image src={sea} className='w-full h-full object-cover' alt="background image"/>
      <div className='m-auto'>
        <div className='absolute px-6 py-4 top-[40%] w-full sm:-[50%] h-full'>
          <form className='max-w-[600px] m-auto'>
            <h1 className='text-2xl font-bold text-center'>Subscribe to the Newsletter</h1>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Email' />
            <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Hero