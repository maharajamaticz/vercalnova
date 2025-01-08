"use client"
import React from 'react';
import styles from "@/css/creatorHub/organizationProfilePage.module.css";
import Images from '@/app/Images';
import ImgComponent from '@/Component/global/imgComponent';
import { useRouter } from 'next/navigation';
import { Col, Row } from 'react-bootstrap';
import StarRating from '@/Component/global/starRating';
import { ToggleInput } from '@/Component/form/inputfield';
import PostListCategory from '@/Component/profiles/postListCategory';
import { profilePosts } from '@/json/staticData';
export default function CreatorProfilePage() {
  const router = useRouter();
  return (
    <section>
      <div className={styles.seactionWrapper}>
        <h2>bio</h2>
        <p>Crafting digital wonders, one stroke at a time. Dive into my world of the 🖌️✨
          imagination! 🖌️✨ Own a piece of digital magic today!</p>
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
        <h2>Annonucements</h2>
        <p>Welcome to the DAO Here you can try ,learn ,vote ,and enjoy’s your experience of being a part of your first DAO. Check the is newsfeed, there're some helpful posts to ready!</p>
      </div>
      <div className={`d-flex gap-2 justify-content-between ${styles.profileActionBtns}`}>
        <button className='pinkBtn'>Edit Profile</button>
        <button className='pinkBtn'>Share Profile</button>
      </div>
      <div className={styles.grpProfileWrapper}>

        <div className={styles.creatorPostsContainer}>
          <div className={styles.titleText}>
            Free Live Feedback - Today
          </div>
          <div className={styles.tabBodyWrapper}>
            <Row className='mt-3'>
              <Col xs={4} className={`${styles.columnPart} p-0`}>
                <div className={styles.imgCardPart}>
                  <ImgComponent src={Images.postImg1} alt={"post img"} />
                </div>
              </Col>
              <Col xs={4} className={`${styles.columnPart} p-0`}>
                <div className={styles.imgCardPart}>
                  <ImgComponent src={Images.postImg2} alt={"post img"} />
                </div>
              </Col>
              <Col xs={4} className={`${styles.columnPart} p-0`}>
                <div className={styles.imgCardPart}>
                  <ImgComponent src={Images.postImg3} alt={"post img"} />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.joinedContainer}>
          <h2>Join Group Chat</h2>
          <button>
            +
          </button>
        </div>
        <div className={styles.joinedContainer}>
          <h2>Access Exclusive Content</h2>
          <button>
            +
          </button>
        </div>

        <div className={styles.creatorPostsContainer}>
          <div className={styles.titleText}>
            Partnerships
          </div>
          <div className={styles.tabBodyWrapper}>
            <Row className='mt-3'>
              <Col xs={4} className={`${styles.columnPart} p-0`}>
                <div className={styles.imgCardPart}>
                  <ImgComponent src={Images.postImg1} alt={"post img"} />
                </div>
              </Col>
              <Col xs={4} className={`${styles.columnPart} p-0`}>
                <div className={styles.imgCardPart}>
                  <ImgComponent src={Images.postImg2} alt={"post img"} />
                </div>
              </Col>
              <Col xs={4} className={`${styles.columnPart} p-0`}>
                <div className={styles.imgCardPart}>
                  <ImgComponent src={Images.postImg3} alt={"post img"} />
                </div>
              </Col>
            </Row>
          </div>
        </div>

      </div>
      <div className={styles.eventPassContainer}>
        <div className={styles.passContainer}>
          <h2>Event Pass Memories</h2>
          <div>
            <button>
              <ImgComponent src={Images.addPassIcon} alt={"add"}/>
            </button>
            <div>
              <ImgComponent src={Images.passTicketIcon} alt={"ticket"}/>
            </div>
          </div>
        </div>
        <div className={styles.passContainer}>
          <h2>Membership and Education Passes</h2>
          <div>
            <button>
              <ImgComponent src={Images.addPassIcon} alt={"add"}/>
            </button>
            <div>
              <ImgComponent src={Images.passTicketIcon} alt={"ticket"}/>
            </div>
          </div>
        </div>
        <div className={styles.passContainer}>
          <h2>Product Passes</h2>
          <div>
            <button>
              <ImgComponent src={Images.addPassIcon} alt={"add"}/>
            </button>
            <div>
              <ImgComponent className={styles.arrowIcon} src={Images.passArrowIcon} alt={"arrow"}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reviewContainer}>
          <div className={styles.headerPart}>
            <h2>Review</h2>
            <button>+ Add Review</button>
          </div>
          <div className={styles.reviewPart}>
            <StarRating rateVal={4} readOnly/>
            <div className={styles.reviewDetails}>
              <h2>Rated <span>5.5</span> By James Dec 16 2024</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis praesentium repudiandae quisquam. Eius animi at facilis aperiam facere impedit?</p>
            </div>
          </div>
      </div>
      <div className={styles.toggleContainer}>
        <label htmlFor="makeContentPrivate">
        Make Content Private
        </label>
        <ToggleInput id={"makeContentPrivate"} defaultChecked={true}/>
      </div>
      <PostListCategory postData={profilePosts}/>
    </section>
  )
}