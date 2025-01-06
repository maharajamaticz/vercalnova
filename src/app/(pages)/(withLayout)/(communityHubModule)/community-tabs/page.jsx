"use client"
import React from 'react';
import ComponentLayout from '@/Component/global/componentLayout';
import styles from "@/css/communityHub/commonStyle.module.css";
import { Row } from 'react-bootstrap';
import Images from '@/app/Images';
import { useRouter } from 'next/navigation';
import ImgComponent from '@/Component/global/imgComponent';
export default function CommunityTabsPage() {
    const router = useRouter();
    return (
        <ComponentLayout dynamicClass={"communityHubLayout"}>
            <div className={styles.communityTabsPage}>
                <div className={styles.headerPart}>
                    <h2 className='text-blue-gradient'>Community Chat</h2>
                </div>
                <Row className={`d-flex ${styles.cardWrapper}`}>
                    <div onClick={() => router.push("/community-chatlist")} className={styles.cardPart}>
                        <ImgComponent src={Images.chatCardIcon} alt="Chats" />
                        <h2>My Chats</h2>
                    </div>
                    <div onClick={() => router.push("/find-chat")} sm={6} className={styles.cardPart}>
                        <ImgComponent src={Images.searchCardIcon} alt="Find" />
                        <h2>Find Community
                            Chat</h2>
                    </div>
                    <div onClick={() => router.push("/create-community")} sm={6} className={styles.cardPart}>
                        <ImgComponent src={Images.groupChatIcon} alt="Community" />
                        <h2>Create a
                            Community Chat</h2>
                    </div>
                </Row>
            </div>

        </ComponentLayout>
    )
}
