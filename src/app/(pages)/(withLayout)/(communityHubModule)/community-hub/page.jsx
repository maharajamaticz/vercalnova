"use client"
import React from 'react'
import styles from "@/css/communityHub/commonStyle.module.css";
import { Row } from 'react-bootstrap';
import ComponentLayout from '@/Component/global/componentLayout';
import CommunityHubHeader from '@/Component/global/sectionHeader';
import PostCardTemplate from '@/Component/global/postCardTemplate';
import CommunitySearch from '@/Component/communityHub/communitySearch';
import ChannelCard from '@/Component/communityHub/channelCard';
import { postOverViewData } from '@/json/staticData';

export default function CommunityHubPage() {
    return (
        <ComponentLayout backBtn={false} dynamicClass={"communityHubLayout"}>
            <div className={styles.communityHubPage}>
                <div className={styles.headerPart}>
                    <h2 className='text-blue-gradient'>Community Hub</h2>
                </div>
                <CommunitySearch filterIcon={false} />
                <div className='mt-3'>
                    <CommunityHubHeader titleText={"Community Social"} seeAllLink={"/community-social"} />
                    <Row className='d-flex'>
                        {
                            [...postOverViewData].slice(0, 10).map((item, i) => (
                                <PostCardTemplate item={item} key={i} />
                            ))
                        }
                    </Row>
                </div>
                <div className='mt-3'>
                    <CommunityHubHeader titleText={"Channels"} />
                    <ChannelCard />
                </div>
                <div className='mt-3'>
                    <CommunityHubHeader titleText={"Chats"} seeAllLink={"/community-tabs"} />
                    <Row className='d-flex'>
                        {
                            [...postOverViewData].slice(0, 2).map((item, i) => (
                                <PostCardTemplate item={item} key={i} />
                            ))
                        }
                    </Row>
                </div>
            </div>
        </ComponentLayout>
    )
}
