import Link from 'next/link'
import React from 'react'
import styles from '@/styles/footer.module.css'

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
      <p>Copyright &copy; DJ EVENTS</p>
      <p><Link href='/about'>About</Link></p>
      </div>
    </footer>
  )
}
