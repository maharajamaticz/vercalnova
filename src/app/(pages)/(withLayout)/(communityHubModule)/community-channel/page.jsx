"use client"
import React, { useState } from 'react'
import styles from "@/css/communityHub/communityChannelPage.module.css";
import ComponentLayout from '@/Component/global/componentLayout';
import Images from '@/app/Images';
import { useRouter } from 'next/navigation';
import ImgComponent from '@/Component/global/imgComponent';
export default function CommunityChannelPage() {
    const router = useRouter();
    const [memberList, setMemberList] = useState([
        { memberName: "Alice Johnson", profileImgComponent: Images.channelProfileImage, admin: true },
        { memberName: "Bob Smith", profileImgComponent: Images.channelProfileImage, admin: false },
        { memberName: "Carlos Rivera", profileImgComponent: Images.channelProfileImage, admin: false },
        { memberName: "Diana Wu", profileImgComponent: Images.channelProfileImage, admin: false },
        { memberName: "Emily Brown", profileImgComponent: Images.channelProfileImage, admin: false },
        { memberName: "Frank Thomas", profileImgComponent: Images.channelProfileImage, admin: false },
        { memberName: "Grace Lee", profileImgComponent: Images.channelProfileImage, admin: false },
        { memberName: "Henry Martin", profileImgComponent: Images.channelProfileImage, admin: false },
        { memberName: "Isabel Garcia", profileImgComponent: Images.channelProfileImage, admin: false },
        { memberName: "Jack Wilson", profileImgComponent: Images.channelProfileImage, admin: false }
    ]);

    return (
        <ComponentLayout dynamicClass={"communityHubLayout"}>
            <div className={styles.communityChannelPage}>
                <div className={styles.topPart}>
                    <div className={styles.bannerPart}>
                        <ImgComponent src={Images.profileBannerImg} alt="" />
                        <button className='blueRoundBtn'>Joined</button>
                    </div>
                    <div className={styles.detailsPart}>
                        <div className={styles.ImgComponentPart}>
                            <ImgComponent src={Images.logoIcon} alt="logo" />
                        </div>
                        <h2>Nova Wallet App</h2>
                        <p>Group 180 Members</p>
                    </div>
                    <div className={styles.btnWrapper}>
                        <button onClick={() => router.push("/sub-chat")}>
                            <ImgComponent src={Images.addChatIcon} alt="chat" />
                            <p>Add Sub Chat</p>
                        </button>
                        <button>
                            <ImgComponent src={Images.addTaskIcon} alt="task" />
                            <p>Add Task</p>
                        </button>
                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    <div className={styles.descriptionPart}>
                        <p>Add Community Description</p>
                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    <div className={styles.optionsPart}>
                        <ul>
                            <li>
                                <div>
                                    <ImgComponent src={Images.mediaIcon} alt="media" />
                                    <p>Media, Links and Docs</p>
                                </div>
                                <div>
                                    <span>150</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <ImgComponent src={Images.starIcon} alt="star" />
                                    <p>Show Sub chat Started </p>
                                </div>
                                <div>
                                    <button className={styles.arrowIcon}>
                                        <ImgComponent src={Images.rightArrowIcon} alt="arrow" />
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <ImgComponent src={Images.pinedIcon} alt="pin" />
                                    <p>Pinned Message to Community</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.memberListContainer}>
                    <div className={styles.headerPart}>
                        <h2>List of Members</h2>
                        <button className={styles.searchIcon}>
                            <ImgComponent src={Images.memberSearchIcon} alt="search" />
                        </button>
                    </div>
                    <div className={styles.cardWrapper}>
                        <div className={styles.memberList}>
                            <ul>
                                {
                                    memberList.map((item, i) => (
                                        <li key={i}>
                                            <div>
                                                <ImgComponent src={Images.channelProfileImage} alt="profile" />
                                                <p>{item.memberName}</p>
                                            </div>
                                            <div>
                                                {
                                                    item.admin ?
                                                        <span>Admin</span>
                                                        :
                                                        <button>
                                                            <ImgComponent src={Images.rightArrowIcon} alt="arrow" />
                                                        </button>
                                                }
                                            </div>
                                        </li>
                                    ))
                                }
                                <li>
                                    <div>
                                        <p className={styles.seeAllBtn}>See All</p>
                                    </div>
                                    <div>
                                        <button>
                                            <ImgComponent src={Images.rightArrowIcon} alt="arrow" />
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentLayout>
    )
}
