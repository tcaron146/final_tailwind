import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { UserAuth } from "../context/AuthContext"
import { useState, useEffect } from "react"
import { BsPerson } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="flex w-full justify-between items-center absolute h-20 px-4 z-10 text-primary">
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>Soup.</h1>
      </div>
      {/* desktop links */}
      <ul className="hidden sm:flex">
        <li className="text-primary"><a href="/">Home</a></li>
        <li className="text-primary"><a href="/blog">Blog</a></li>
        <li className="text-primary"><a href="/photos">Photos</a></li>
        <li className="text-primary"><a href="/next">Next</a></li>
      </ul>
      {/* login-logout icon + Search Icon*/}
      <div className="hidden sm:flex">
      <BsSearch className="hidden sm:flex mr-2" size={20} />
        {loading ? null : !user ? (
          <div className="flex">
            <BsPerson onClick={handleSignIn} className='' size={20} />
            <p onClick={handleSignIn} className="hidden sm:flex">Login</p>
          </div>
        ) : (
          <div className="flex">
            <BsPerson onClick={handleSignOut} className='' size={20} />
            <p onClick={handleSignOut} className="hidden sm:flex">Logout</p>
          </div>
        )}
      </div>

      {/* hamburger */}
      <div onClick={handleNav} className="cursor-pointer sm:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* mobile menu */}
      <div className={nav ? 'absolute left-0 top-0 w-full bg-secondary px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>Soup.</h1>
          <li className="border-b text-primary"><a href="/">Home</a></li>
          <li className="border-b text-primary"><a href="/blog">Blog</a></li>
          <li className="border-b text-primary"><a href="/photos">Photos</a></li>
          <li className="border-b text-primary"><a href="/next">Next</a></li>
        </ul>
        <div className="flex flex-col">
          {loading ? null : !user ? (
            <button onClick={handleSignIn} className="my-4">Login</button>) : (
            <button onClick={handleSignOut} className="my-4">Logout</button>
          )}
          <button className="">Search</button>
        </div>
        <div className="flex justify-between my-6">
          <a href="https://www.instagram.com/soupdejourtommy/"><FaInstagram className="icon" /></a>
        </div>
      </div>

    </div>
  )
}

export default Navbar