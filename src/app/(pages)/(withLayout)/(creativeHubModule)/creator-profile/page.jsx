"use client"
import styles from "@/css/creatorHub/organizationProfilePage.module.css";
import Images from '@/app/Images';
import ImgComponent from '@/Component/global/imgComponent';
import { useRouter } from 'next/navigation';
import QRCode from 'react-qr-code';
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { profilePosts } from "@/json/staticData";
import PostListCategory from "@/Component/profiles/postListCategory";

export default function CreatorProfilePage() {
  const router = useRouter();

  return (
    <section>
      <div className={styles.seactionWrapper}>
        <h2>bio</h2>
        <p>Welcome to the DAO Here you can try ,learn ,vote ,and enjoy's your
          experience of being a part of your first DAO. Check the is newsfeed,
          there're some helpful posts to ready!</p>
      </div>
      <div className='d-flex justify-content-between flex-wrap'>
        <div className={styles.seactionWrapper}>
          <h2>Links</h2>
          <div className={styles.socialMedia}>
            <button>
              <ImgComponent src={Images.instagramIcon} alt='instagram' />
            </button>
            <button>
              <ImgComponent src={Images.faceBookIcon} alt='faceBook' />
            </button>
            <button>
              <ImgComponent src={Images.networkIcon} alt='network' />
            </button>
          </div>
        </div>
        {/* <div className={styles.seactionWrapper}>
          <h2>Virtual Contact Card</h2>
          <div>
            <QRCode bgColor='#C52367' size={80} value="https://example.com" />
          </div>
        </div> */}
      </div>
      <div className={`d-flex gap-2 justify-content-between flex-wrap ${styles.profileActionBtns}`}>
        <button className='pinkBtn px-5 py-3'>Edit Profile</button>
        <button className='pinkBtn px-5 py-3'>Share Profile</button>
      </div>
      <PostListCategory postData={profilePosts} />
    </section>
  )
}

