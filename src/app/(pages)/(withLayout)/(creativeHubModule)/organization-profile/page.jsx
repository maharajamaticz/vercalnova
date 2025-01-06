"use client"
import React from 'react';
import styles from "@/css/creatorHub/organizationProfilePage.module.css";
import Images from '@/app/Images';
import ImgComponent from '@/Component/global/imgComponent';
import { useRouter } from 'next/navigation';
export default function OrganizationProfilePage() {
  const router=useRouter();
  return (
    <section>
      <div className={styles.seactionWrapper}>
        <h2>bio</h2>
        <p>Crafting digital wonders, one stroke at a time. Dive into my world of the 🖌️✨
          imagination! 🖌️✨ Own a piece of digital magic today!</p>
      </div>
      <div className={styles.seactionWrapper}>
        <h2>Governance Proposals</h2>
        <button className='pinkBtn' onClick={() => router.push("/organization-profile/view-proposals")}>View Proposals</button>
      </div>
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
      <div className={styles.seactionWrapper}>
        <h2>DAO Community Chat</h2>
        <button className='pinkBtn'>View Community</button>
      </div>
    </section>
  )
}

