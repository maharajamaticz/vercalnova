"use client"
import React, { useState } from 'react'
import styles from "@/css/connect/notification.module.css"
import ComponentLayout from '@/Component/global/componentLayout'
import { notificationData } from '@/json/staticData';
import { useParams, useRouter } from 'next/navigation';
import useRandomColor from '@/hooks/randomColor';
export default function NotificationPage() {
    const pageTitle = [
        { matchVal: "communityChatNotification",title:"Community Chat Notifications" }, 
        { matchVal: "communityChannelNotification",title:"Community Chat Channels Notifications" }, 
        { matchVal: "creatorNotification",title:"From Creator  Notification" }
    ];
    const path=useParams();
    const router=useRouter();
    console.log(path);
    const state="communityChatNotification";
    const [notifcationData, setNotifcationData] = useState(notificationData);
    const {getRandomColor}=useRandomColor();
    return (
        <ComponentLayout>
            <section className={styles.notificationPage}>
                <div className={styles.headPart}>
                    <h3>{pageTitle.map((item,index)=>(
                            item.matchVal ==state && item.title
                    ))}</h3>
                </div>
                <div className={styles.bodyPart}>
                    <ul>
                        {
                            notifcationData.map((item, i) => {
                                return <NotificationItem notification={item} key={i} color={getRandomColor()} />
                            })
                        }
                    </ul>
                </div>
            </section>
        </ComponentLayout>
    )
}

const NotificationItem = ({ notification, color }) => {
    const router=useRouter();
    switch (notification.type) {
        case 'post':
            return (
                <li className={`${styles.notificationContainer} ${styles.postTempate}`}>
                    <h2 style={{ color: color }} className={styles.mainTitle}>{notification.category}</h2>
                    <h3 className={styles.subTitle}><span>{notification.receivedName}</span></h3>
                    <p>{notification.content}</p>
                </li>
            );
        case 'comment':
            return (
                <li className={`${styles.notificationContainer} ${styles.postTempate}`}>
                    <h3 className={styles.subTitle}> <span style={{ color: color }}>{notification.receivedName}: </span>Replied to your Comment</h3>
                    <p>{notification.content}</p>
                </li>
            );
        case 'creator':
            const dynamicURL=notification.typeOfPost=="image"?`/post/${notification.id}`:`/reels`;
            return (
                <li onClick={()=>router.push(dynamicURL)} className={`${styles.notificationContainer} ${styles.postTempate}`}>
                    <h3 className={styles.subTitle}><span style={{ color: color }}>{notification.userName}: </span>{notification.userRole}</h3>
                    <p>{notification.content}</p>
                </li>
            );
        default:
            return null;
    }
};


