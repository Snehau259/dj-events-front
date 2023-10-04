import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout'



export default function About() {
  return (

    <Layout title='about' description='this is about page'>
      <p>About</p>
      <Link href='/events/2000'>event-1</Link>
    </Layout>

  )
}
