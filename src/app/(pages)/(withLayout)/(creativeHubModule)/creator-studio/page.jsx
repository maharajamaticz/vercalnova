"use client"
import React, { useState } from 'react';
import styles from "@/css/creatorHub/commonStyle.module.css";
import { Col, Row } from 'react-bootstrap';
import ImgComponent from '@/Component/global/imgComponent';
import Images from '@/app/Images';
import ComponentLayout from '@/Component/global/componentLayout';
import { useRouter } from 'next/navigation';

export default function CreatorStudioPgae() {
    const router = useRouter();
    const [cardListData, setCardListData] = useState([
        {
            imgSrc: Images.creatorStudioImg1,
            cardTitle: "Create Passes"
        },
        {
            imgSrc: Images.creatorStudioImg2,
            cardTitle: "Upload Exclusive Content"
        },
        {
            imgSrc: Images.creatorStudioImg3,
            cardTitle: "Create Live Stream"
        },
        {
            imgSrc: Images.creatorStudioImg4,
            cardTitle: "Upload Exclusive Content"
        },
        {
            imgSrc: Images.creatorStudioImg5,
            cardTitle: "One on One Coaching"
        },
        {
            imgSrc: Images.creatorStudioImg6,
            cardTitle: "Create Social Shopping Post"
        },
        {
            imgSrc: Images.creatorStudioImg7,
            cardTitle: "Create ADS"
        },
        {
            imgSrc: Images.creatorStudioImg8,
            cardTitle: "Create Events"
        },
        {
            imgSrc: Images.creatorStudioImg9,
            cardTitle: "List of Products"
        },
        {
            imgSrc: Images.creatorStudioImg10,
            cardTitle: "Partnerships",
            navLink: "find-partnerships"
        },
    ])
    return (
        <ComponentLayout dynamicClass={"communityHubLayout"} backBtn>
            <div className={styles.exclusiveContentPage}>
                <div className={styles.pageTitle}>
                    <h2 className='text-pink-gradient'>Creator Studio</h2>
                </div>
                <div className={styles.tabCardWrapper}>
                    <Row className={`d-flex ${styles.cardWrapper}`}>
                        {
                            cardListData.map((item, i) => (
                                <Col xs={12} sm={6} key={i}>
                                    <div className={styles.cardPart} onClick={() => item.navLink ? router.push(`${item.navLink}`) : null}>
                                        <div className={styles.imgWrapper}>
                                            <ImgComponent src={item.imgSrc} alt="Organization" />
                                        </div>
                                        <h2>{item.cardTitle}</h2>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </div>
        </ComponentLayout>
    )
}
