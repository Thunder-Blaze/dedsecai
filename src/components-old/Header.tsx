import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

import Nav from '../components/shared/Nav'
import MobileNav from '../components/shared/MobileNav'

const Header = () => {
  return (
    <header className='py-3 xl:py-6 text-white'>
        <div className='container flex justify-between items-center'>
            <Link href={"/"} className='font-bold text-3xl font-monospace'>
                Dedsec<span className='text-accent'>AI</span>
            </Link>
            <div className='hidden lg:flex items-center gap-4'>
                <Nav />
                <Link href={"/contact"}>
                    <Button className='font-monospace bg-accent font-black hover:bg-accent-foreground'>Contact Us</Button>
                </Link>
            </div>
            <div className='xl:hidden'>
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header