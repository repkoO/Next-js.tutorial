import React from 'react';
import Logo from './dojo-logo.png'
import Link from 'next/link'
import Image from 'next/image';

export default function Navbar() {
  return (
  <nav>
    <Image 
      src={Logo}
      alt="Logo"
      width={70}
      quality={100}
      placeholder="blur"
      />
    <h1>Helpdesk</h1>
    <Link href="/">Dashboard</Link>
    <Link href="/tickets">Tickets</Link>
  </nav>
  )
}
