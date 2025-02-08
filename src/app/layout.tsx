import type { Metadata } from 'next'
import { JetBrains_Mono, Inter, Jost } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'

import ThemeProvider from '@/providers/theme-provider'
import { Navbar } from '@/components/shared/navbar'
import { Footer } from '@/components/shared/footer'
import { Toaster } from '@/components/ui/toaster'

import PageTransition from '@/components/transition/PageTransition'
import StairTransition from '@/components/transition/StairTransition'

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-jetbrainsMono',
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'DedsecAI',
    description: 'A website for the DedsecAI project',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth()

    return (
        <SessionProvider session={session}>
            <html suppressHydrationWarning lang="en">
                <body
                    className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Navbar />
                        <StairTransition />
                        <PageTransition>
                            <main className="flex h-full flex-col items-center justify-center">
                                {children}
                            </main>
                        </PageTransition>
                        <Footer />
                        <Toaster />
                    </ThemeProvider>
                </body>
            </html>
        </SessionProvider>
    )
}
