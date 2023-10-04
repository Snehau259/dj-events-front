import Head from 'next/head'
import React from 'react'
import Header from './header'
import Footer from './footer'
import Showcase from './showcase'



export default function Layout({title,description,keywords,children}) {
  return (
    <div>
    <Head >
    <title>{title}</title>
    <meta name='description' content={description}/>
    <meta name='keywords' content={keywords}/>
    </Head>
    <Header/>
    <Showcase/>
    {children}
    <Footer/>
    </div>
  )
}


Layout.defaultProps={title:'dj event',description:'dj description',keywords:'music,dj,party,song'}
