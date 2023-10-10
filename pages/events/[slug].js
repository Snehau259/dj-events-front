import React from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout';


export default function Id({ evt }) {
  const router = useRouter()
  console.log(router);
  return (
    <Layout>


      <h1>{evt.name}</h1>
      <button onClick={() => router.push('/')}>click me</button>


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
