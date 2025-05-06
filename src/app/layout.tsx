import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Geist } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context/provider'
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
      <body className={`${geistSans.variable} ${roboto.className} antialiased`}>
        <ReactQueryProvider>
          <CartProvider>
            <div
              className="flex flex-col"
              style={{
                minHeight: 'calc(100vh - 80px)',
              }}
            >
              <Header />
              <main className="flex-1 pb-10">{children}</main>
            </div>
            <Footer />
          </CartProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
