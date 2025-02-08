import type { Metadata } from 'next'
import { JetBrains_Mono, Inter, Jost } from 'next/font/google'
import './globals.css'

// Components
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import StairTransition from '@/components/StairTransition'

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-jetbrainsMono',
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'DedsecAI',
    description: 'A website for the DedsecAI project',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} antialiased dark`}
            >
                <Header />
                <StairTransition />
                <PageTransition>
                    {children}
                </PageTransition>
            </body>
        </html>
    )
}
