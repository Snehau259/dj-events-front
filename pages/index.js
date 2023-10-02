import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'

export default function Index() {
  return (
    <Layout>
      <Link href='/about'>About</Link>
     <p> this is my home page</p>
    </Layout>
  )
}
