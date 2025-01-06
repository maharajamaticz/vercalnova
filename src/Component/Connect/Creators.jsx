"use client"
import React from 'react'
import styles from "@/css/connect/connect.module.css";
import { Col, Row } from 'react-bootstrap';
import PostCardTemplate from '../global/postCardTemplate';
import { postOverViewData } from '@/json/staticData';
import { useRouter } from 'next/navigation';
function Creators() {
  const router = useRouter();
  return (
    <div className={`mt-3`}>
      <h5 className={`text-white mb-3`}>My Creators</h5>
      <Row className={`${styles.myCreatorWrapper}`}>
        {
          [...postOverViewData].slice(0, 2)?.map((item, index) => (
            <PostCardTemplate item={item} key={index} />
          ))
        }
      </Row>
      <div className={styles.btnWrapper}>
        <button onClick={() => router.push("/mycreator")} className='loadMoreBtn'><span>Load More</span></button>
      </div>
    </div>
  )
}

export default Creators