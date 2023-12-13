import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button" 
import { UserAuth } from "../context/AuthContext"
import { useState, useEffect } from "react"

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

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
    <nav className="flexBetween max-container bg-bkg2 padding-container relative z-30 py-5 shadow-lg">
      <Link href= '/'>
        <Image className='flexCenter' src="/noodles.png" alt="logo" width={74} height={29} />
      </Link>

      <ul className="flex h-full gap-12 px-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-primary content-center cursor-pointer pb-1.5 transition-all hover:font-bold hover:underline decoration-highlights">
            {link.label}
          </Link>
        ))}
      </ul>

      {loading ? null : !user ? (
        <ul className="flex text-primary">
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Login
          </li>
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Sign up
          </li>
        </ul>
      ) : (
        <div>
          <p className="text-primary">Welcome, {user.displayName}</p>
          <li className="cursor-pointer text-primary" onClick={handleSignOut}>
            Sign out
          </li>
        </div>
      )}

    </nav>
  )
}

export default Navbar