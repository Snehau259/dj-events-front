import React from 'react'
import styles from '@/styles/404.module.css'
import Link from 'next/link'
import Layout from '@/components/layout'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
    <div className={styles.error}>
      <h1>404</h1>
      <h4>Sorry, there is nothing here</h4>
      <Link href='/'>Go back to home</Link>
    </div>
    </Layout>
  )
}
