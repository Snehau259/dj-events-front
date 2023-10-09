import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/eventitem.module.css'
//import images from '@/public/images'
//import events from '@/pages/api/events'

export default function Eventitem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.image}>
        <Image src={evt.image ? evt.image : '../public/images/event-default.png'} width={170} height={100}></Image>
      </div>
      <div className={styles.info}>
        <span>{evt.date} at {evt.time}</span>
        <h5>{evt.name}</h5></div>
      <div className={styles.link}>
        <Link className='btn' href={`/events/${evt.slug}`}>
        Details
        </Link>
      </div>
    </div>
  )
}
