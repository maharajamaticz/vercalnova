"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import {Row } from 'react-bootstrap';
import { postOverViewData } from '@/json/staticData';
import styles from "@/css/communityHub/communitySocial.module.css";
import ComponentLayout from '@/Component/global/componentLayout';
import Friendstories from '@/Component/global/Friendstories';
import PostCardTemplate from '@/Component/global/postCardTemplate';
import CommunitySearch from '@/Component/communityHub/communitySearch';

export default function CommunitySocialPage() {
    const router = useRouter();
    return (
        <ComponentLayout dynamicClass={"communityHubLayout"}>
            <div className={styles.communitySocialPage}>
                <div className={styles.headerPart}>
                    <h2 className='text-blue-gradient'>Community Social</h2>
                </div>
                <div className='mt-4'>
                    <CommunitySearch />
                </div>
                <div className='py-3'>
                    <div>
                        <h2 className={`${styles.storyTitle} text-center my-3`}>Stories</h2>
                        <div>
                            <Friendstories titleText={null} />
                        </div>
                    </div>
                    <Row className='d-flex'>
                        {
                            [...postOverViewData].slice(0, 2).map((item, i) => (
                                <PostCardTemplate item={item} key={i} />
                            ))
                        }
                    </Row>
                    <div className='d-flex justify-content-center mt-3' >
                        <button onClick={() => router.push(`/community-gallery/${101}`)} className='loadMoreBtn'>Load More</button>
                    </div>
                </div>
            </div>
        </ComponentLayout>
    )
}
