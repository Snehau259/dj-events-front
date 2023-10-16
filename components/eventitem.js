import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/eventitem.module.css'
//import images from '@/public/images'
//import events from '@/pages/api/events'

export default function Eventitem({ evt }) {
 // console.log()
  return (
    <div className={styles.event}>
      <div className={styles.image}>
      {console.log("image url",evt.attributes.image.data.attributes.formats.medium.url)}
      <Image src={evt.attributes ? evt.attributes.image.data.attributes.formats.medium.url : '/public/images/event-default.png'} width={170} height={100}></Image>
      </div>
      <div className={styles.info}>
        <span>{new Date (evt.attributes.date).toLocaleDateString('en-US')} at {evt.attributes.time}</span>
        <h5>{evt.attributes.name}</h5></div>
      <div className={styles.link}>
        <Link className='btn' href={`/events/${evt.attributes.slug}`}>
          Details
        </Link>
      </div>
    </div>
  )
}
