import React from 'react'
import styles from "@/css/communityHub/commonStyle.module.css";
import { Col, Row } from 'react-bootstrap';
import ComponentLayout from '@/Component/global/componentLayout';
import ChatCard from '@/Component/communityHub/chatCard';
export default function CommunityChatListPage() {
    return (
        <ComponentLayout dynamicClass={"communityHubLayout"}>
            <div className={styles.communityTabsPage}>
                <div className={styles.headerPart}>
                    <h2 className='text-blue-gradient'>Communities Chats</h2>
                </div>
                <Row className='d-flex mt-4'>
                    <Col sx={12} sm={6} className='py-2'>
                        <ChatCard />
                    </Col>
                    <Col xs={12} sm={6} className='py-2'>
                        <ChatCard />
                    </Col>
                </Row>
            </div>
        </ComponentLayout>
    )
}
