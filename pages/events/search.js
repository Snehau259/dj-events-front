import Link from 'next/link'
import React from 'react'
import Layout from '../../components/layout'
import Eventitem from '@/components/eventitem'
import qs from 'querystring'
import events from '../api/events'
//import '../styles/globals.css'

export default function SearchPage({event}) {
  console.log("events from search",event)
  return (

    <Layout>
      <h1>Event</h1>
      
      {event.length === 0 && <h3>No events to show</h3>}
      {console.log("events from 1337",events.data)}
      {event.data.map((evt) => (<Eventitem key={evt.id} evt={evt}></Eventitem>))}
      {event.data.length > 0 && (<Link href='/events' className='btn-secondary'>View All</Link>)}



    </Layout>
  )
}

export async function getServerSideProps({query:{term}}) {
  const query = qs.stringify(
    {
      filters: {
        $or: [
          {
            name: {
              $contains: term,
            },
          },
          {
            performers: {
              $contains: term,
            },
          },
          {
            description: {
              $contains: term,
            },
          },
          {
            venue: {
              $contains: term,
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const res = await fetch(`http://127.0.0.1:1337/api/events?filters[name][$contains]=${term}`);

  //const res = await fetch(`http://127.0.0.1:1337/api/events?filters[name][$contains]=${term}`)//
  const events= await res.json()
  //console.log("from server",events);

  return { props: { event: events.data[0] } }
}
