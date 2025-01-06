import React, { useState } from 'react';
import Images from '@/app/Images';
import { Row } from 'react-bootstrap';
import styles from "@/css/connect/connect.module.css";
import PostCardTemplate from '@/Component/global/postCardTemplate';
import { postOverViewData } from '@/json/staticData';
import ImgComponent from '../global/imgComponent';
function Following() {

    const [creatorimg, setCreatorimg] = useState([
        { img: Images.creator2,imgCapture:"Halley: Illustration " },
        { img: Images.creator2,imgCapture:"Collective:  Trading" },
    ])

    return (
        <div className={`mt-3`}>
            <div className={`${styles.followingContainer}`}>
                <h5 className={`text-white mb-3`}>Following</h5>
                <button className={`${styles.settingBtn}`}>
                    <ImgComponent  src={Images.settingIcon} alt="setting"  />
                    {/* <img src={Images.settingIcon} alt="setting" /> */}
                </button>
            </div>
            <Row className={`${styles.myCreatorWrapper}`}>
            {
              [...postOverViewData].slice(0,2)?.map((item, index) => (
                <PostCardTemplate item={item} key={index} />
              ))
            }
            </Row>
            <div className={styles.btnWrapper}>
                <button className='loadMoreBtn'><span>Load More</span></button>
            </div>
        </div>
    )
}

export default Following