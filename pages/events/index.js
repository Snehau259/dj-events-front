import Link from 'next/link'
import React from 'react'
import '../../styles/globals.css'


export default function index() {
  return (
    <div>
      <p>this is the events page</p>
      <Link href='/'>Home</Link>
    </div>
  )
}
