import React from 'react'
import styles from "@/css/communityHub/commonStyle.module.css";
import ComponentLayout from '@/Component/global/componentLayout'
import CommunitySearch from '@/Component/communityHub/communitySearch'
import CommunityHubHeader from '@/Component/global/sectionHeader'
import ChatCard from '@/Component/communityHub/chatCard'
import { Col, Row } from 'react-bootstrap'
export default function FindChatPage() {
    return (
        <ComponentLayout dynamicClass={"communityHubLayout"}>
            <div className={styles.communityHubPage}>
                <div className={styles.headerPart}>
                    <h2 className='text-blue-gradient'>Community Hub</h2>
                </div>
                <CommunitySearch filterIcon={false} />
                <div className='mt-3'>
                    <CommunityHubHeader headerType={"type2"} titleText={"Suggested"} />
                    <Row className='d-flex'>
                        <Col sx={12} sm={6} className={"py-2"}>
                            <ChatCard />
                        </Col>
                        <Col xs={12} sm={6} className={"py-2"}>
                            <ChatCard />
                        </Col>
                    </Row>
                </div>
                <div className='mt-3'>
                    <CommunityHubHeader headerType={"type2"} titleText={"Nearby"} />
                    <Row className='d-flex gap-0'>
                        <Col sx={12} sm={6} className={"py-2"}>
                            <ChatCard />
                        </Col>
                        <Col xs={12} sm={6} className={"py-2"}>
                            <ChatCard />
                        </Col>
                    </Row>
                </div>
                <div className='mt-3'>
                    <CommunityHubHeader headerType={"type2"} titleText={"All"} />
                    <Row className='d-flex'>
                        <Col sx={12} sm={6} className={"py-2"}>
                            <ChatCard />
                        </Col>
                        <Col xs={12} sm={6} className={"py-2"}>
                            <ChatCard />
                        </Col>
                    </Row>
                </div>
            </div>
        </ComponentLayout>
    )
}
