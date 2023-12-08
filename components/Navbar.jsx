import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const Navbar = () => {
  return (
    <nav className="flexBetween max-container bg-bkg2 padding-container relative z-30 py-5 shadow-lg">
      <Link href="/">
        <Image src="/tail.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="flex h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-primary content-center cursor-pointer pb-1.5 transition-all hover:font-bold hover:underline decoration-highlights">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter">
        <Button 
          type="button"
          title="Login"
          icon=""
        />
      </div>

    </nav>
  )
}

export default Navbar