"use client"
import React from 'react';
import styles from "@/css/connect/chat.module.css";
import ComponentLayout from '@/Component/global/componentLayout';
import Images from '@/app/Images';
// import audioSrc from "@/Assets/connect/chatAudio.mp3";
import { ChatGroundArea } from '@/Component/global/chatGroundArea';
import ImgComponent from '@/Component/global/imgComponent';
import ChatInput from '@/Component/global/chatInput';
import { useParams } from 'next/navigation';
import { chatListData } from '@/json/staticData';
const messages = [
    {
        sender: 'Joshual',
        content: 'my message',
        timestamp: '09:00AM',
        type: 'sent',
        contentType: "text",
    },
    {
        sender: 'Raja',
        content: 'my message',
        timestamp: '09:05AM',
        type: 'received',
        contentType: "text",
    },
    {
        sender: 'Joshual',
        content: 'my message',
        timestamp: '09:00AM',
        type: 'sent',
        contentType: "text",
    },
    {
        sender: 'Raja',
        content: 'my message',
        timestamp: '09:05AM',
        type: 'received',
        contentType: "text",
    },
    {
        sender: 'Joshual',
        content: 'my message',
        timestamp: '09:00AM',
        type: 'sent',
        contentType: "text",
    },
    {
        sender: 'Raja',
        content: 'my message',
        timestamp: '09:05AM',
        type: 'received',
        contentType: "text",
    },
    {
        sender: 'Joshual',
        content: 'my message',
        timestamp: '09:00AM',
        type: 'sent',
        contentType: "text",
    },
    {
        sender: 'Raja',
        content: 'my message',
        timestamp: '09:05AM',
        type: 'received',
        contentType: "text",
    },
    {
        sender: 'Raja',
        content: 'my message',
        timestamp: '09:05AM',
        type: 'received',
        contentType: "text",
    },
    // {
    //     sender: 'Joshual',
    //     content: 'my message',
    //     timestamp: '09:00AM',
    //     type: 'sent',
    //     contentType: "audio",
    //     contentSrc: audioSrc,
    // },
    // {
    //     sender: 'Joshual',
    //     content: 'my message',
    //     timestamp: '09:00AM',
    //     type: 'received',
    //     contentType: "audio",
    //     contentSrc: audioSrc,
    // },
];
export default function ChatPage() {
    const { id } = useParams();
    const filterData=chatListData.filter((item)=>item.useId==id)[0];
    return (
        <ComponentLayout>
            <div className={styles.chatPageContainer}>
                <div className={styles.pageTitle}>
                    <h2 className='text-gradient'>Direct Message Service(DMS)</h2>
                </div>
                <div className={styles.chatgroundAreaWrapper}>
                    <div className={styles.chatHeadPart}>
                        <div className={styles.leftPart}>
                            <ImgComponent src={filterData.profileImage} alt="chat Profile" />
                            <h2>{filterData.name}</h2>
                        </div>
                        <div className={styles.rightPart}>
                            <button>
                                <ImgComponent src={Images.videoCallIcon} alt="video call" />
                            </button>
                            <button>
                                <ImgComponent src={Images.callIcon} alt="call" />
                            </button>
                        </div>
                    </div>
                    <div className={styles.chatAreaContainer}>
                        <ChatGroundArea audioOverlayColor={"theme1"} messages={messages} />
                    </div>
                    <ChatInput />
                </div>
            </div>
        </ComponentLayout>
    );
}
