import Head from 'next/head'
import React from 'react'
import Header from './header'
import Footer from './footer'
import Showcase from './showcase'
import Router, { useRouter } from 'next/router'




export default function Layout({title,description,keywords,children}) {
  const router=useRouter()
  return (
    <div>
    <Head >
    <title>{title}</title>
    <meta name='description' content={description}/>
    <meta name='keywords' content={keywords}/>
    </Head>
    <Header/>

    {router.pathname=='/' && <Showcase/>}
    {children}
    <Footer/>
    </div>
  )
}


Layout.defaultProps={title:'dj event',description:'dj description',keywords:'music,dj,party,song'}
