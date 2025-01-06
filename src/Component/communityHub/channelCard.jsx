import React from 'react'
import styles from "@/css/global.module.css";
import Images from '@/app/Images';
import ReadMore from '../global/readmore';
import ImgComponent from '../global/imgComponent';
export default function ChannelCard() {
  return (
    <div className={styles.channelCardTemplate}>
            <div className={styles.leftPart}>
                <div className={styles.layerOne}>
                    <ImgComponent src={Images.channelProfileImage} alt="" />
                </div>
                <div className={styles.layerTwo}>
                    <ImgComponent src={Images.channelProfileImage} alt="" />
                    <h2>+30</h2>
                    <ImgComponent src={Images.channelProfileImage} alt="" />
                </div>
                <div className={styles.layerThree}>
                    <ImgComponent src={Images.channelProfileImage} alt="" />
                </div>
            </div>
            <div className={styles.rightPart}>
                <div>
                    <ImgComponent className={styles.dollerImg} src={Images.dollerIcon} alt="doller" />
                    <h2>USDC Inter Community Chat</h2>
                </div>
                <div className={styles.statusPart}>
                    <span className={styles.badge}></span>
                    <p>11 Online</p>
                </div>
                <div>
                   <ReadMore text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloribus, a, et quas officia consequatur architecto aut, veritatis natus voluptates neque libero iste quidem ipsum illo sunt sapiente rem illum."}/>
                </div>
                <div>
                    <button className='blueBtn'>Join Now</button>
                </div>

            </div>
    </div>
  )
}
