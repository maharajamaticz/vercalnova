"use client"
import React, { useRef, useState } from 'react';
import styles from "@/css/creatorHub/organizationProfilePage.module.css";
import Images from '@/app/Images';
import ComponentLayout from '@/Component/global/componentLayout';
import ImgComponent from '@/Component/global/imgComponent';
import { FilterModelContent } from '@/Component/model/filterModel';
import { daoFilterList } from '@/json/staticData';

export default function ProfileLayout({ children }) {
    const [filterModelToggle, setFilterModelToggle] = useState(false);
    const filterButtonRef = useRef(null);

    const handleFilterClick = () => {
        setFilterModelToggle(!filterModelToggle);
    };

    return (
        <ComponentLayout dynamicClass={"communityHubLayout"} backBtn>
            <div className={`${styles.organizationProfilePage} ${styles.createProfilePage}`}>
                <div className={styles.bannerPart}>
                    <ImgComponent src={Images.bannerImg} alt="banner" />
                    <button ref={filterButtonRef}
                        onClick={handleFilterClick}>
                        <ImgComponent src={Images.profileOptionIcon} alt="option" />
                    </button>
                </div>
                <div className={styles.profileDetails}>
                    <div className={styles.imgAndFollowerPart}>
                        <div className={styles.imgPart}>
                            <ImgComponent src={Images.profileUserImg} alt="profile User" />
                        </div>
                        <div className={styles.followerPart}>
                            <h2 className={`${styles.userNameText} text-orange-gradient`}>
                                Jesse
                            </h2>
                            <ul>
                                <li>
                                    <p>1000</p>
                                    <span>share</span>
                                </li>
                                <li>
                                    <p>1000k</p>
                                    <span>Following</span>
                                </li>
                                <li>
                                    <p>20k</p>
                                    <span>Followers</span>
                                </li>
                                <li>
                                    <p>100k</p>
                                    <span>Tagged Content</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.profileOptions}>
                        <button className={styles.blueTheme}>
                            <ImgComponent src={Images.followIcon} alt="follow" />
                            <span>follow</span>
                        </button>
                        <button className={styles.greenTheme}>
                            <ImgComponent src={Images.sendIcon} alt="Message" />
                            <span>Message</span>
                        </button>
                        <button className={styles.pinkTheme}>
                            <ImgComponent src={Images.videoCallIcon} alt="donate" />
                            <span>donate</span>
                        </button>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
            <FilterModelContent themeType={"theme2"} titleText={"DAO"} filterModelListArr={daoFilterList} filterModelToggle={filterModelToggle} setFilterModelToggle={setFilterModelToggle} filterButtonRef={filterButtonRef} />
        </ComponentLayout>
    )
}

