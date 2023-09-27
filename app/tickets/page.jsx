
import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'
import Link from 'next/link'


export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets</small></p>
        </div>
      </nav>
      <Link href="/tickets/create">
      <button className='btn-primary'>
        Add New Ticket
      </button>
      </Link>
      <Suspense fallback={<Loading/>}>
        <TicketList />
      </Suspense>
    </main>
  )
}
