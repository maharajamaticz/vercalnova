"use client"
import React from 'react'
import styles from "@/css/notFound.module.css";
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router=useRouter();
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.container}>
        <h1>404</h1>
        <h2> Page Not Found !</h2>
        <button className='loadMoreBtn' onClick={()=>router.push("/connect")}>Back to Home</button>
      </div>
    </div>
  )
}
