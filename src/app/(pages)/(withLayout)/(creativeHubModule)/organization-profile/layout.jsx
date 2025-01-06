"use client"
import React, { useRef, useState } from 'react';
import styles from "@/css/creatorHub/organizationProfilePage.module.css";
import Images from '@/app/Images';
import ComponentLayout from '@/Component/global/componentLayout';
import ImgComponent from '@/Component/global/imgComponent';
import { FilterModelContent } from '@/Component/model/filterModel';
import { daoFilterList } from '@/json/staticData';

export default function OrganizationProfileLayout({ children }) {
    const [filterModelToggle, setFilterModelToggle] = useState(false);
    const filterButtonRef = useRef(null);

    const handleFilterClick = () => {
        setFilterModelToggle(!filterModelToggle);
    };

    return (
        <ComponentLayout dynamicClass={"communityHubLayout"} backBtn>
            <div className={styles.organizationProfilePage}>
                <div className={styles.bannerPart}>
                    <ImgComponent src={Images.profileBannerImg} alt="banner" />
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
                            <ul>
                                <li>
                                    <p>1000k</p>
                                    <span>following</span>
                                </li>
                                <li>
                                    <p>1000k</p>
                                    <span>followers</span>
                                </li>
                                <li>
                                    <p>100k</p>
                                    <span>Communuity</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.profileOptions}>
                        <h2 className='text-pink-gradient'>The Nova App</h2>
                        <div>
                        <button className={styles.greenTheme}>
                                <ImgComponent src={Images.sendIcon} alt="Message" />
                                <span>Message</span>
                            </button>
                            <button className={styles.blueTheme}>
                                <ImgComponent src={Images.callIcon} alt="Voicecall" />
                                <span>Voicecall</span>
                            </button>
                            <button className={styles.pinkTheme}>
                                <ImgComponent src={Images.videoCallIcon} alt="videoCall" />
                                <span>VideoCall</span>
                            </button>
                        </div>
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

