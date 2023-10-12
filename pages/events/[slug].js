import React from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout';
import styles from '@/styles/event.module.css'
import { FaPencilAlt, FaTimes } from 'react-icons'
import Link from 'next/link';
import Image from 'next/image';

export default function Id({ evt }) {
  const router = useRouter()
  console.log(router);
  return (
    <Layout>

      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`events/edit/${evt.id}`}><p>Edit Event</p></Link>
          <Link className={styles.delete} href='#' ><p>Delete Event</p></Link>

        </div>
      </div>
      <h2>{evt.date} at {evt.time}</h2>
      <h1>{evt.name}</h1>

      {evt.image && <Image src={evt.image} width={850} height={800}></Image>}
      <h2>Performers:</h2>
      <p>{evt.performers}</p>
      <h2>Description:</h2>
      <p>{evt.description}</p>
      <h2>Venue:</h2>
      <p>{evt.address}</p>
      <Link href='/events'><p>Go Back</p></Link>





    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/events/')

  const events = await res.json()
  const paths = events.map((evt) => ({ params: { slug: evt.slug } }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params: { slug } }) {
  console.log('events from params', slug)
  console.log(`http://localhost:3000/api/events/${slug}`)
  const res = await fetch(`http://localhost:3000/api/events/${slug}`)

  const events = await res.json()
  console.log('events from indu event', events)



  return { props: { evt: events[0] }, revalidate: 1 }
}
