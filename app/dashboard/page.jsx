"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
export const Dashboard = () => {
const [data, setData] = useState([])
const [err, setError] = useState(false)
const [isLoad, setLoad] = useState(false)

  // useEffect(() =>
  // {
  //     async function getData() {
  //     setLoad(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`,{ cache: 'no-store' })
  //     if (!res.ok) {
  //       setError(true)
  //     } 
  //     const data = await res.json()
  //     setData(data);
  //     setLoad(false)
  //   }
  //   getData()
  // }, [])

  const fetcher = (...args) => fetch(...args).then(res.json());


  return (
    <div>Dashboard</div>
  )
}

export default Dashboard;