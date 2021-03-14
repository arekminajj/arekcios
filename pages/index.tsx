import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="/img/saturn.png" />
    </div>
  )
}
