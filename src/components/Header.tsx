import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='py-3 xl:py-6 text-white'>
        <div className='container flex justify-between items-center'>
            <Link href={"/"} className='font-bold text-3xl font-monospace'>
                Dedsec<span className='text-accent'>AI</span>
            </Link>
            <div className='hidden lg:flex items-center gap-4'>
                <Nav />
                <Link href={"/contact"}><Button className='font-bold font-monospace'>Contact Us</Button></Link>
            </div>
            <div className='xl:hidden'>
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header