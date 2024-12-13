import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* {logo} */}
            <Link href='/'>
                <h1 className="text-4xl font-semibold">
                    Tolosa <span className="text-accent">.</span>
                </h1>
            </Link>
            {/* Desktop nav  */}
            <div className="hidden xl:flex items-center gap-8">
              <Nav />
              <Link href="/contact">
                <Button>Hire Me</Button>
              </Link>
            </div>
            {/* Mobile nav */}
            <div className="xl:hidden ">
              <Nav />
            </div>
        </div>
    </header>
  )
}

export default Header
