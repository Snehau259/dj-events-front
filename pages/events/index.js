import Link from 'next/link'
import React from 'react'
import Layout from '../../components/layout'
import Eventitem from '@/components/eventitem'
//import '../styles/globals.css'

export default function EventsPage(events) {
  //console.log("from client",events.events)
  return (
    
    <Layout>
      <h1>Events</h1>
      {events.events.length===0 && <h3>No events to show</h3>}
      {events.events.map((evt)=>(<Eventitem key={evt.id} evt={evt}></Eventitem>))}
      
     
    </Layout>
  )
}

export async function getStaticProps(){
  const res=await fetch('http://localhost:3000/api/events')
  const events=await res.json()
  //console.log("from server",events);

  return {props:{events:events},revalidate:1}
}
