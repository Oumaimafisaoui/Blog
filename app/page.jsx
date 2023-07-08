"use client";

import Image from 'next/image'
import styles from './page.module.css'
// import Spline from '@splinetool/react-spline';
import bg from '@/srcs/public/bg.png';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
      <TypeAnimation
      sequence={[
        'Welcome to my Full stack Demo project!',
        1000,
        'It is made with NextJs and 30 coffee cups latte...', 1000,
      ]}
      className={styles.title}
      wrapper="div"
      speed={30}
      repeat={Infinity}
    />
      <p className={styles.desc}>
        This is a full stack demo project to show case my skills, writings and creativity!
      </p>
      <button className={styles.button}>See my porfolio</button>
      </div>
      <div className={styles.item2}>
      <Image alt="" src={bg} className={styles.img} />
      </div>
    </div>
  )
}
