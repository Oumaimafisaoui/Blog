
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import styles from "./page.module.css"

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
 
export const Blog = async () => {

  const data = await getData();
  return (
    <div className={styles.mainContainer} >
    {data.map((item) => (
      <Link passHref href={`\/blog/${item.id}`} className={styles.container} key={item.id}>
      <div className={styles.imageContainer}>
        <Image 
        src="https://code.org/images/fill-480x360/tutorials/hoc2022/dance-party-2022.jpg"
        alt=""
        width={100}
        height={100}
        className={styles.image}
        />
      </div>
      <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
      </div>
      </Link>
    ))};

    </div>
);}

export default Blog;