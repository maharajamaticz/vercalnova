"use client"
import React from 'react'
import styles from "@/css/global.module.css";
import ReadMore from '../global/readmore';
import Images from '@/app/Images';
import { useRouter } from 'next/navigation';
import ImgComponent from '../global/imgComponent';
export default function ChatCard() {
    const router=useRouter();
    return (
        <div className={styles.chatCardTemplate}>
            <div className={styles.headerPart}>
                <h2>USDC Inter Community
                    Chat</h2>
                <button>
                    <ImgComponent src={Images.userIcon} alt="user" />
                    <span>3</span>
                </button>
            </div>
            <div className={styles.bodyPart}>
                <ReadMore wordLimit={10} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloribus, a, et quas officia consequatur architecto aut, veritatis natus voluptates neque libero iste quidem ipsum illo sunt sapiente rem illum."} />
                <div className={styles.imgCardWrapper}>
                    <ImgComponent src={Images.channelProfileImage} alt="profile" />
                    <ImgComponent src={Images.channelProfileImage} alt="profile" />
                    <ImgComponent src={Images.channelProfileImage} alt="profile" />
                    <ImgComponent src={Images.channelProfileImage} alt="profile" />
                </div>
            </div>
            <div className={styles.footerPart}>
                <button className='blueBtn' onClick={()=>router.push("/community-chat")}>Chat Now</button>
            </div>
        </div>
    )
}
