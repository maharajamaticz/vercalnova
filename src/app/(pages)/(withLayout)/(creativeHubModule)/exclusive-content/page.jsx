"use client"
import React, { useState } from 'react'
import styles from "@/css/creatorHub/commonStyle.module.css"
import { Col, Row } from 'react-bootstrap'
import ComponentLayout from '@/Component/global/componentLayout'
import { CatagoriesFilterList } from '@/Component/global/categoriesFilterList'
import { OrganizationCard } from '@/Component/global/organizationCard'
import CommunityHubHeader from '@/Component/global/sectionHeader'
import ImageCard from '@/Component/global/imageCard'
import CommunitySearch from '@/Component/communityHub/communitySearch'
import Images from '@/app/Images'
import ImgComponent from '@/Component/global/imgComponent'
import PostCardTemplate from '@/Component/global/postCardTemplate'
import { postOverViewData } from '@/json/staticData'
export default function ExclusiveContentPage() {
  const [organizationData, setOrganizationData] = useState([
    { imgSrc: Images.organizationImg1, contentText: "Collective Capital DAO Profile" },
    { imgSrc: Images.organizationImg2, contentText: "Help the Homeless Charity Profile" },
  ])
  return (
    <ComponentLayout dynamicClass={"communityHubLayout"}>
      <div className={styles.exclusiveContentPage}>
        <div className={styles.pageTitle}>
          <h2 className='text-pink-gradient'>Access Exclusive Content</h2>
        </div>
        <div>
          <CommunitySearch filterIcon={true} themeType='theme2' />
        </div>
        <div>
          <CatagoriesFilterList getFilerValueHandle={null}/>
        </div>
        <div className={styles.creatorSection}>
          <div className='py-3'>
            <CommunityHubHeader titleText={"Exclusive Content"} themeType='theme2' />
            <Row className='d-flex'>
              {
                [...postOverViewData].slice(0, 1).map((item, i) => (
                  <PostCardTemplate item={item} key={i} />
                ))
              }
            </Row>
          </div>
        </div>
        <div className='py-3'>
          <CommunityHubHeader titleText={"Discover Organization"} themeType='theme2' seeAllLink={"/discover-organization"} />
          <div>
            <ul className='d-flex flex-column m-0 p-0'>
              {
                organizationData.map((item, i) => (
                  <li key={i} className='w-100 '>
                    <OrganizationCard ImgSrc={item.imgSrc} content={item.contentText} />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className={styles.tabCardWrapper}>
          <Row className={`d-flex ${styles.cardWrapper}`}>
            <Col xs={12} sm={6}>
              <div className={styles.cardPart}>
                <div className={styles.imgWrapper}>
                  <ImgComponent src={Images.liveStreamIcon} alt="live" />
                </div>
                <h2>One Workshops Event and Live Streams</h2>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className={styles.cardPart}>
                <div className={styles.imgWrapper}>
                  <ImgComponent src={Images.coachingIcon} alt="coaching" />
                </div>
                <h2>One on One Coaching</h2>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className={styles.cardPart}>
                <div className={styles.imgWrapper}>
                  <ImgComponent src={Images.onlineCourseIcon} alt="online course" />
                </div>
                <h2>One Workshops Event and Live Streams</h2>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </ComponentLayout>
  )
}
