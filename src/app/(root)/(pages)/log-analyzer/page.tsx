'use client'
import React from 'react'

import systemLogs from '@/data/systemLogs.json'
import { motion } from 'framer-motion'


const LogAnalyzer = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, ease: 'easeIn', duration: 0.4 },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div
                        className="flex-1 flex items-center xl:justify-center order-1
                    xl:order-none mb-8 xl:mb-0 flex-col gap-6 p-10 bg-secondary rounded-xl font-monospace"
                    >
                        <h1 className="font-black text-4xl mb-3 text-center pl-8 font-monospace">
                            Suspicious System Logs
                        </h1>
                        <ul className="flex flex-col gap-10 p-5 font-monospace">
                            {systemLogs.map((log, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="flex flex-col gap-6 items-start"
                                    >
                                        <div className="rounded-md bg-secondary text-accent flex items-center justify-center">
                                            <div className="text-[28px]">
                                                {log.timestamp}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm text-foreground/70">
                                                Event ID &rarr; {log.event_id}
                                            </p>
                                            <h3 className="text-foreground leading-6">
                                                {log.message}
                                            </h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default LogAnalyzer
