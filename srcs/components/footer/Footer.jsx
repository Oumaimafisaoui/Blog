import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import images from '@/srcs/public/images.png'
const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2023 Made with &lt;3 by Oumaima Fisaoui. All rights reserved</div>
        <Image src={images} width={20} height={20} alt="" />
    </div>
  )
}

export default Footer