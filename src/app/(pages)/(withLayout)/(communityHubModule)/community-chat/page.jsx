"use client"
import React from 'react'
import styles from "@/css/communityHub/communityChatPage.module.css";
import ComponentLayout from '@/Component/global/componentLayout';
import Images from '@/app/Images';
import ChatInput from '@/Component/global/chatInput';
import { ChatGroundArea } from '@/Component/global/chatGroundArea';
import { useRouter } from 'next/navigation';
import ImgComponent from '@/Component/global/imgComponent';
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
   
];
export default function CommunityChatPage() {
    const router=useRouter();
    return (
        <ComponentLayout dynamicClass={"communityHubLayout"}>
            <div className={styles.communityChatPage}>
                <div className={styles.chatHeaderPart}>
                    <div onClick={()=>router.push("/community-channel")} className={styles.leftPart}>
                        <div className={styles.logoImg}>
                            <ImgComponent src={Images.logoIcon} alt="logo" />
                        </div>
                        <div className={styles.detailsPart}>
                            <h2>Nova Wallet</h2>
                            <p>You, Bills, Carvel, Robert, Phil</p>
                        </div>
                    </div>
                    <div className={styles.rightPart}>
                        <button className='blueRoundBtn'>Joined</button>
                    </div>
                </div>
                <ChatGroundArea audioOverlayColor={"theme2"} messages={messages}/>
                <ChatInput />
            </div>
        </ComponentLayout>
    )
}

