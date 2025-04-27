import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Geist } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const roboto = Roboto({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Goody Cosmetics',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${roboto.variable} flex h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
