import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

import Coding from '../../../srcs/public/Coding.jpeg'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{ cache: 'no-store' })
  if (!res.ok) 
  {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export const Post = async ({params}) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>
         {data.title}
        </h1>
        <Image className={styles.img} alt="" src={Coding}/>

      </div>
      <div className={styles.buttom}>
        <p className={styles.text}>
          <em>

          Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Possimus illo reprehenderit distinctio 
           commodi laboriosam rerum dolore molestias dolorem totam 
           consectetur consequuntur,ea autem adipisci architecto beatae 
           animi harum veritatis ut.
           Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Possimus illo reprehenderit distinctio 
           commodi 
          laboriosam rerum dolore molestias dolorem totam 
           consectetur consequuntur, ea autem adipisci architecto beatae 
           animi harum veritatis ut.
           Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Possimus illo reprehenderit distinctio 
           commodi laboriosam rerum dolore molestias dolorem totam 
           consectetur consequuntur, ea autem adipisci architecto beatae 
           animi harum veritatis ut.
           Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Possimus illo reprehenderit distinctio 
           commodi laboriosam rerum dolore molestias dolorem totam 
           consectetur consequuntur, ea autem adipisci architecto beatae 
           animi harum veritatis ut.
           Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Possimus illo reprehenderit distinctio 
           commodi laboriosam rerum dolore molestias dolorem totam 
           consectetur consequuntur, ea autem adipisci architecto beatae 
           animi harum veritatis ut.
           Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Possimus illo reprehenderit distinctio 
           commodi laboriosam rerum dolore molestias dolorem totam 
           consectetur consequuntur, ea autem adipisci architecto beatae 
           animi harum veritatis ut.
           Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Possimus illo reprehenderit distinctio 
           commodi laboriosam rerum dolore molestias dolorem totam 
           consectetur consequuntur, ea autem adipisci architecto beatae 
           animi harum veritatis ut.
           Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Possimus illo reprehenderit distinctio 
           commodi laboriosam rerum dolore molestias dolorem totam 
           consectetur consequuntur, ea autem adipisci architecto beatae 
           animi harum veritatis ut.
           Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Possimus illo reprehenderit distinctio 
           commodi laboriosam rerum dolore molestias dolorem totam 
           consectetur consequuntur, ea autem adipisci architecto beatae 
           animi harum veritatis ut.
          </em>

        </p>
      </div>
    </div>
  )
}

export default Post;
