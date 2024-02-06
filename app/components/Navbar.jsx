'use client'
import { useState } from "react"
import { BsSearch } from "react-icons/bs"
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex w-full justify-between items-center bg-secondary sticky h-20 px-4 border-b-2 border-primary/50 text-primary z-10">
      <div>
        <h1 className="block text-primary">Soup.</h1>
      </div>
      {/* desktop links */}
      <ul className="hidden sm:flex">
        <li className="text-primary"><a href="/">Home</a></li>
        <li className="text-primary"><a href="/chronicles">Chronicles</a></li>
        <li className="text-primary"><a href="/grits">Eggs & Bacon</a></li>
        <li className="text-primary"><a href="/next">Next</a></li>
      </ul>
      {/* login-logout icon + Search Icon*/}
      <div className="hidden sm:flex">
      <BsSearch className="hidden sm:flex mr-2 cursor-pointer" size={20} />
      </div>

      {/* hamburger */}
      <div onClick={handleNav} className="cursor-pointer text-primary sm:hidden z-10">
        {nav ? <AiOutlineClose size={20}className='text-primary'/> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* mobile menu */}
      <div className={nav ? 'absolute left-0 top-0 w-full bg-secondary px-4 py-7 flex flex-col border-b-2 border-primary/20' : 'absolute left-[-100%]'}>
        <ul className="">
          <h1>Soup.</h1>
          <li className="border-b text-primary flex justify-around"><a href="/">Home</a></li>
          <li className="border-b text-primary flex justify-around"><a href="/chronicles">Chronicles</a></li>
          <li className="border-b text-primary flex justify-around"><a href="/grits">Eggs & Bacon</a></li>
          <li className="border-b text-primary flex justify-around"><a href="/next">Next</a></li>
        </ul>
        <div className="flex justify-between my-6">
          <a href="https://www.instagram.com/soupdejourtommy/"><FaInstagram className="icon" /></a>
        </div>
      </div>

    </div>
  )
}

export default Navbar