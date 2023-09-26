import './globals.css'
import { Rubik } from 'next/font/google'

//components
import Navbar from './components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Project',
  description: 'Project nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
