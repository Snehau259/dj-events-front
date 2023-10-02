import Head from 'next/head'
import React from 'react'
import Header from './header'



export default function Layout({title,description,keywords,children}) {
  return (
    <div>
    <Head >
    <title>{title}</title>
    <meta name='description' content={description}/>
    <meta name='keywords' content={keywords}/>
    </Head>
    <Header/>
    {children}
    </div>
  )
}


Layout.defaultProps={title:'dj event',description:'dj description',keywords:'music,dj,party,song'}
