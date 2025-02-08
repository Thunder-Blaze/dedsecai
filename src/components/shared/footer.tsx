import Link from 'next/link'
import { footerLinks, socialLinks } from '@/constants'

import { SiAuth0 } from 'react-icons/si'
import { Input } from '../ui/input'

export const Footer = () => {
    return (
        <footer className="flex flex-col text-foreground/50 text-sm mt-5 border-t border-foreground/10">
            <div className="flex bg-foreground/5 items-center justify-center gap-3 py-5">
                <SiAuth0 className='w-6 h-6 text-accent'></SiAuth0>
                <span className="text-lg font-semibold">DedsecAI</span>
                <div className='flex gap-3'>
                    <Input placeholder="Enter Email Address" type="email" className="w-60 rounded-full" />
                    <button className="bg-accent text-foreground/90 px-4 py-1 rounded-md">Subscribe</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-evenly container mx-auto max-sm:flex-col gap-10 px-6 py-10 sm:gap-20">
                <div className='h-full flex flex-col gap-3 justify-center'>
                    <h1 className='text-4xl text-foreground/90 font-black font-monospace text'>Dedsec<span className='text-accent/90'>AI</span></h1>
                    <div>&copy; 2025</div>
                </div>
                {footerLinks.map((links) => (
                    <div key={links.title}>
                        <h3 className="text-lg font-semibold text-foreground/90">
                            {links.title}
                        </h3>
                        <div className="flex flex-col gap-2 pt-3">
                            {links.links.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.url}
                                    className="text-xs md:text-sm hover:text-accent transition-all duration-300"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
                <div>
                    <h2 className='text-lg font-semibold text-foreground/90'>Follow Us</h2>
                    <div className='flex py-1 pt-3 gap-2'>
                    {socialLinks.map((social) => (
                        <a href={social.url} className='rounded-full bg-accent aspect-square p-2 flex items-center justify-center transition-all duration-300 hover:scale-110' key={social.title}>
                            <social.icon className='w-5 h-5 text-foreground invert'></social.icon>
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
