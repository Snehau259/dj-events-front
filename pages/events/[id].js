import React from 'react'
import { useRouter } from 'next/router'


export default function Id() {
  const router=useRouter()
  console.log(router);
  return (
    <div>
      <p>This is how you can fetch page using induvidual id</p>
       <p>{router.query.id}</p>
       <button onClick={()=>router.push('/')}>click me</button>

    </div>
  )
}
