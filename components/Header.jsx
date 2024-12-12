import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto">
            {/* {logo} */}
            <Link href='/'>
                <h1 className="text-4xl font-semibold">
                    Tolosa <span className="text-accent">.</span>
                </h1>
            </Link>
            <div className="hidden xl:flex">
              <Nav />
              <Link href="/contact">
                <Button>Hire Me</Button>
              </Link>
            </div>
        </div>
      Header
    </header>
  )
}

export default Header
