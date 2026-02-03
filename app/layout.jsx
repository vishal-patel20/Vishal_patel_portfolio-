import React from "react"
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
    title: 'Full Stack Developer | FastAPI, MERN, AWS',
    description: 'Results-driven Full Stack Developer with expertise in FastAPI, Python, MongoDB, MERN Stack, SQL, and AWS. Building scalable solutions that deliver exceptional user experiences.'

  
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`font-sans antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
