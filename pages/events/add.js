import React from 'react'
import Layout from '@/components/layout'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/form.module.css'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AddEventPage() {
  const [values, setValues] = useState({ name: '', performers: '', venue: '', address: '', date: '', time: '', description: '' })
  const router = useRouter()
  const handleSubmit = async (e) => {
    console.log("======e========", e);
    e.preventDefault()
    console.log("=====submitting values========", values);
    const data = { data: { ...values } };
    const res = await fetch('http://127.0.0.1:1337/api/events?populate=*',
      {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
    if (!res.ok) {
      toast.error('something went wrong')
    }
    else {
      const evt = res.json()
      router.push(`/events/${data.slug}`)
    }
  }
  const handleInputChange = (e) => {
    console.log("=======target========", e.target.value);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  }

  return (
    <Layout title='Add new event'>
      <h1>Add new Event</h1>
      <Link href='/events'>Go back</Link>
      <form onSubmit={handleSubmit} className={styles.form} >
        <div className={styles.grid}>
          <div>
            <label htmlFor='name' >Event Name :</label>
            <input type='text' name='name' id='name' value={values.name} onChange={handleInputChange}></input>
          </div>

          <div>
            <label htmlFor='performers' >Performers :</label>
            <input type='text' name='performers' id='performers' value={values.performers} onChange={handleInputChange}></input>
          </div>

          <div>
            <label htmlFor='venue' >Venue :</label>
            <input type='text' name='venue' id='venue' value={values.venue} onChange={handleInputChange}></input>
          </div>

          <div>
            <label htmlFor='address' >Address :</label>
            <input type='text' name='address' id='address' value={values.address} onChange={handleInputChange}></input>
          </div>

          <div>
            <label htmlFor='date' >Date :</label>
            <input type='date' name='date' id='date' value={values.date} onChange={handleInputChange}></input>
          </div>

          <div>
            <label htmlFor='time' >Time :</label>
            <input type='time' name='time' id='time' value={values.time} onChange={handleInputChange}></input>
          </div>


        </div>


        <div className={styles.grid}>
          <label htmlFor='description' >Description :</label>
          <textarea type='text' name='description' id='description' value={values.description} onChange={handleInputChange}></textarea>

          <input type='submit' value='Add Event' className='btn'></input>
        </div>
      </form>

    </Layout>


  )
}
