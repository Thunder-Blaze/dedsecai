"use client";
import React from 'react'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        value: "+91 1234567890",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        value: "+dedsec@example.mail",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        value: "+ Dedsec AI, 123, Example Street, City, State, Country",
    },
]

const Contact = () => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition : { delay: 2.4, ease: "easeIn", duration: 0.4 },
            }}
            className='PY-6'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    <div className='xl:h-[54%] order-2 xl:order-none'>
                    <form className='flex flex-cot gap-6 p-10 bg-[#27272C] rounded-xl font-monospace'>
                        <h3 className='text-4xl text-accent'>Contact Us</h3>
                    </form>
                    </div>
                    <div className='flex-1 flex items-center xl:justify-end order-1
                    xl:order-none mb-8 xl:mb-0'>
                        info
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact