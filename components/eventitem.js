import React from 'react'
import Image from 'next/image'
import styles from '@/styles/eventitem.module.css'
//import images from '@/public/images'
//import events from '@/pages/api/events'

export default function Eventitem({evt}) {
  return (
    <div className={styles.event}>
    <div className={styles.image}>
      <Image src={evt.image?evt.image:'../public/images/event-default.png'} width={170} height={100}></Image>
      </div>
    </div>
  )
}
