"use client"
import React, { useState } from 'react'
import styles from "@/css/creatorHub/organizationProfilePage.module.css";
import Images from '@/app/Images';
import ImgComponent from '../global/imgComponent';
import { Col, Row } from 'react-bootstrap';
export default function PostListCategory({postData}) {
      const [activeTab, setActiveTab] = useState('posts');
    const renderTabContent = () => {
        return postData[activeTab]?.map((item, index) => (
          <Col key={index} xs={4} className={`${styles.columnPart} p-0`}>
            <div className={styles.imgCardPart}>
              <ImgComponent src={item.imgSrc} alt={"post img"}/>
            </div>
          </Col>
        ));
      };
    return (
        <div className={styles.creatorPostsContainer}>
            <div className={styles.tabBtnWrapper}>
                <button
                    className={activeTab === 'posts' ? styles.active : ''}
                    onClick={() => setActiveTab('posts')}
                >
                    <ImgComponent src={Images.postIcon} alt={"posts"} />
                </button>
                <button
                    className={activeTab === 'pins' ? styles.active : ''}
                    onClick={() => setActiveTab('pins')}
                >
                    <ImgComponent src={Images.pinIcon} alt={"pins"} />
                </button>
                <button
                    className={activeTab === 'private' ? styles.active : ''}
                    onClick={() => setActiveTab('private')}
                >
                    <ImgComponent src={Images.privateIcon} alt={"private"} />
                </button>
            </div>
            <div className={styles.tabBodyWrapper}>
                <Row>
                    {renderTabContent()}
                </Row>
            </div>
        </div>
    )
}
