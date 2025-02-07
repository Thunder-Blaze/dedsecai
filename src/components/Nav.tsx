"use client";
import React from 'react'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "About",
        path: "/about",
    },
];

const Nav = () => {
    const pathname = usePathname();
  return (
    <nav className='flex gap-8 font-semibold pr-4'>
        {links.map((link, index) => (
            <Link key={index} href={link.path} className={`${pathname === link.path ? "text-accent" : ""} transition-all duration-300 hover:text-accent`}>
                {link.name}
            </Link>
        ))}
    </nav>
  )
}

export default Nav