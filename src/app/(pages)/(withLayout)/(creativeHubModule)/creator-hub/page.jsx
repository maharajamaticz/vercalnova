"use client"
import React, { useState } from 'react';
import styles from "@/css/creatorHub/commonStyle.module.css";
import ComponentLayout from '@/Component/global/componentLayout';
import CommunitySearch from '@/Component/communityHub/communitySearch';
import CommunityHubHeader from '@/Component/global/sectionHeader';
import { OrganizationCard } from '@/Component/global/organizationCard';
import { Col, Row } from 'react-bootstrap';
import Images from '@/app/Images';
import { postOverViewData } from '@/json/staticData';
import PostCardTemplate from '@/Component/global/postCardTemplate';
import ImgComponent from '@/Component/global/imgComponent';
import { useRouter } from 'next/navigation';

export default function creativeHub() {
  const router=useRouter();
  const [organizationData, setOrganizationData] = useState([
    { imgSrc: Images.organizationImg1, contentText: "Collective Capital DAO Profile" },
    { imgSrc: Images.organizationImg2, contentText: "Help the Homeless Charity Profile" },
  ])
  return (
    <ComponentLayout dynamicClass={"communityHubLayout"} backBtn>
      <div className={styles.creatorHubPage}>
        <div className={styles.pageTitlePart}>
          <h2 className='text-pink-gradient'>Creator Hub</h2>
        </div>
        <div className={styles.searchPart}>
          <CommunitySearch themeType={"theme2"} filterIcon={false} />
        </div>
        <div className={styles.creatorSection}>
          <div className='py-3'>
            <CommunityHubHeader titleText={"Discover Creators"} themeType='theme2' seeAllLink={"/discover-creator"} />
            <Row className='d-flex'>
              {
                [...postOverViewData].slice(0, 2).map((item, i) => (
                  <PostCardTemplate item={item} key={i} />
                ))
              }
            </Row>
          </div>
          <div>
            <CommunityHubHeader titleText={"Access Exclusive Content"} themeType='theme2' seeAllLink={"/exclusive-content"} />
            <Row className='d-flex'>
              {
                [...postOverViewData].slice(0, 2).map((item, i) => (
                  <PostCardTemplate item={item} key={i} />
                ))
              }
            </Row>
          </div>
        </div>
        <div className='py-4'>
          <CommunityHubHeader titleText={"Discover Organization"} themeType='theme2' seeAllLink={"/discover-organization"} />
          <div>
            <ul className='m-0 p-0'>
              {
                organizationData.map((item, i) => (
                  <li key={i}>
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
              <div className={styles.cardPart} onClick={()=>router.push("creator-studio")}>
                <div className={styles.imgWrapper}>
                  <ImgComponent src={Images.reelsCardIcon} alt="Organization" />
                </div>
                <h2>Creator Studio Organization</h2>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </ComponentLayout>
  )
}
