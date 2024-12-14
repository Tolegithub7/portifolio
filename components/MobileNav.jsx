"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: 'home',
        path: '/'
    },{
        name: 'services',
        path: '/services'
    },{
        name: 'work',
        path: '/work'
    },{
        name: 'resume',
        path: '/resume'
    },{
        name: 'contact',
        path: '/contact'
    }
]

const MobileNav = () => {
  return (
    <nav>
      Mb_Navigation
    </nav>
  )
}

export default MobileNav
