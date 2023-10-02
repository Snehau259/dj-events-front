import Link from 'next/link'
import React from 'react'

export default function Index() {
  return (
    <div>
      <Link href='/about'>About</Link>
     <p> this is my home page</p>
    </div>
  )
}
