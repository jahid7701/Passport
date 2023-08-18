import Header from '@/component/header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/component/Footer/Footer'
import Bottomhead from '../component/bottomhead/Bottomhead'
import Middlehead from '@/component/middlehead/Middlehead'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      <Middlehead/>
      <Bottomhead/>
      <div className='hakim'>
        {children}
        </div>
        <Footer/>
        
        </body>
    </html>
  )
}
