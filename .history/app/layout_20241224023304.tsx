import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Jane Doe - Web Developer Portfolio</title>
        <meta name="description" content="Full Stack Web Developer specializing in React, Node.js, and modern web technologies" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

