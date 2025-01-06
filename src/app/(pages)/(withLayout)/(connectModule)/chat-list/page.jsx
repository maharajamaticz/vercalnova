"use client"
import React, { useState } from 'react'
import Images from '@/app/Images';
import styles from "@/css/connect/chatList.module.css";
import ComponentLayout from '@/Component/global/componentLayout'
import Friendstories from '@/Component/global/Friendstories';
import { useRouter } from 'next/navigation';
import ImgComponent from '@/Component/global/imgComponent';
import { chatListData } from '@/json/staticData';

export default function ChatListPage() {
    const router = useRouter();
    const [chatData, setChatData] = useState(chatListData);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredChatData = chatData.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={styles.chatListPage}>
            <ComponentLayout>
                <div className={styles.headPart}>
                    <h2 className='text-gradient'>
                        Direct Message Service (DMS)
                    </h2>
                </div>
                <div className='storySliderContainer'>
                    <Friendstories />
                </div>
                <div className={styles.chatListContainer}>
                    <div className={styles.searchBox}>
                        <input
                            type="search"
                            placeholder="Search"
                            alt="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button>
                            <ImgComponent src={Images.searchIcon} alt="searchIcon" />
                        </button>
                    </div>
                    <div className={`${styles.chatListWrapper} transparentScrollbar`}>
                        <ul>
                            {filteredChatData.length > 0 ? (
                                filteredChatData.map((item, i) => (
                                    <li key={i} onClick={() => router.push(`/chat/${item.useId}`)}>
                                        <div className={styles.leftPart}>
                                            <div className={styles.imgPart}>
                                                <ImgComponent src={item.profileImage} alt="profile" />
                                            </div>
                                            <div className={styles.detailsPart}>
                                                <h3>{item.name}</h3>
                                                <p>{item.message}</p>
                                            </div>
                                        </div>

                                        <div className={styles.rightPart}>
                                            <p>
                                                <span className={styles.dots}></span>
                                                {item.time}
                                            </p>
                                            <button>
                                                <ImgComponent src={item.cameraIcon} alt="camera" />
                                            </button>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li className={styles.noResults}>
                                    <p>No results found for "{searchQuery}"</p>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </ComponentLayout>
        </div>
    );
}
