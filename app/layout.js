// import Head from 'next/head'

import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

export const metadata = {
  title: 'Fashion Nail',
  description: 'Get your nails done right',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head></Head> */}
      <body className="root">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
