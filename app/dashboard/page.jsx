"use client"
import React, { useEffect } from 'react'
import styles from './page.module.css'
export const Dashboard = () => {
const [data, setData] = useState([])

  useEffect(() =>
  {
      async function getData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{ cache: 'no-store' })
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      } 
      return res.json()
    }
    
  }, [])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard;