import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout'
import Eventitem from '@/components/eventitem'
//import '../styles/globals.css'

export default function EventsPage({events}) {
  //console.log("from client",events.events)
  return (

    <Layout>
      <h1>Events</h1>
      
      {events.length === 0 && <h3>No events to show</h3>}
      {console.log("events from 1337",events.data)}
      {events.data.map((evt) => (<Eventitem key={evt.id} evt={evt}></Eventitem>))}
      {events.data.length > 0 && (<Link href='/events' className='btn-secondary'>View All</Link>)}



    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:1337/api/events?populate=*&_sort=date:ASC&_limit=3`/')
  const events = await res.json()
  //console.log("from server",events);

  return { props: { events }, revalidate: 1 }
}
