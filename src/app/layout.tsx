import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Geist } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ReactQueryProvider } from '@/contexts/react-query-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const roboto = Roboto({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
        className={`${geistSans.variable} ${roboto.className} flex h-screen flex-col antialiased`}
      >
        <ReactQueryProvider>
          <Header />
          <main className="mt-16 flex-1">{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  )
}
