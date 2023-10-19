import React from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout';
import styles from '@/styles/event.module.css'
import { FaPencilAlt, FaTimes } from 'react-icons'
import Link from 'next/link';
import Image from 'next/image';

export default function Id({ evt }) {
  const router = useRouter()
  console.log("============event received from slug================",evt);
  return (
    <Layout>

      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`events/edit/${evt.id}`}><p>Edit Event</p></Link>
          <Link className={styles.delete} href='#' ><p>Delete Event</p></Link>

        </div>
      </div>
      <h2>{new Date (evt.attributes.date).toLocaleDateString('en-US')} at {evt.attributes.time}</h2>
      <h1>{evt.attributes.name}</h1>

      {evt.attributes.image && <Image src={evt.attributes.image.data.attributes.formats.medium.url} width={850} height={800}></Image>}
      <h2>Performers:</h2>
      <p>{evt.attributes.performers}</p>
      <h2>Description:</h2>
      <p>{evt.attributes.description}</p>
      <h2>Venue:</h2>
      <p>{evt.attributes.address}</p>
      <Link href='/events'><p>Go Back</p></Link>





    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://127.0.0.1:1337/api/events?populate=*&_sort=date:ASC&_limit=3`/')

  const events = await res.json()
  const paths = events.data.map((evt) => ({ params: { slug: evt.attributes.slug } }))
  //console.log("paths==============",paths);
  return { paths, fallback: true }
}

export async function getStaticProps({ params: { slug } }) {
  //console.log('events from params', slug)
  //console.log(`http://127.0.0.1:1337/api/events?filters[slug][$eq]=${slug}&populate=*`)//`${API_URL}/api/events?filters[slug][$eq]=${slug}&populate=*`
  const res = await fetch(`http://127.0.0.1:1337/api/events?filters[slug][$eq]=${slug}&populate=*`)

  const events = await res.json()
  console.log('=======events from indu event=========', events)



  return { props: { evt: events.data[0] }, revalidate: 1 }
}