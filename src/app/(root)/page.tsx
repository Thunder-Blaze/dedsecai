import React from 'react'
import { Button } from '@/components/ui/button'
import Forensics from '@/components/shared/forensics'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row container" style={{ minHeight: 'calc(100vh - 90px)' }}>
                <div className='w-full flex flex-col justify-center items-start p-2 md:p-5 lg:p-8 gap-6'>
                    <h1 className='lg:text-3xl text-2xl xl:text-5xl font-bold font-jost' style={{lineHeight: '1.4'}}>Visualize Traffic, Identify Issues & Prevent Cyber Incidents</h1>
                    <p className='text-foreground/80'>Reduce risk and improve your resilience across your on-prem, hybrid and cloud with intelligent network visibility and security monitoring.</p>
                    <div className='flex gap-4 mt-4'>
                        <Link href='/dashboard'>
                            <Button className='bg-accent hover:bg-accent-foreground font-bold'>LAUNCH DEMO</Button>
                        </Link>
                        <Link href='/dashboard'>
                            <Button className='font-bold'>EXPLORE</Button>
                        </Link>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <Image src="https://d117h1jjiq768j.cloudfront.net/images/default-source/flowmon-home/screen-overview.png?sfvrsn=9e2c8f07_1" className='scale-90' alt="Dashboard Preview" />
                </div>
            </div>
            <Forensics />
        </>
    )
}

export default Home
