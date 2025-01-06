"use client"
import React, { useState } from 'react';
import ComponentLayout from '@/Component/global/componentLayout';
import styles from "@/css/communityHub/subChatPage.module.css";
import Images from '@/app/Images';
import ChatInput from '@/Component/global/chatInput';
import Friendstories from '@/Component/global/Friendstories';
import ImgComponent from '@/Component/global/imgComponent';

export default function SubChatPage() {
    const [taskList, setTaskList] = useState([
        {
            id: 101,
            taskText: "House Hold Tasks",
        },
        {
            id: 102,
            taskText: "Event Planning",
        },
        {
            id: 103,
            taskText: "Study Group",
        },
        {
            id: 104,
            taskText: "Project Management",
        },
        {
            id: 105,
            taskText: "Meal Planning",
        },
        {
            id: 106,
            taskText: "Travel Planning",
        },
        {
            id: 107,
            taskText: "Grocery List",
        },
        {
            id: 108,
            taskText: "Feedback and Improvement",
        },
        {
            id: 109,
            taskText: "Collaboration",
        },
        {
            id: 110,
            taskText: "Idea Brainstorming",
        },
    ]);
    return (
        <ComponentLayout dynamicClass={"communityHubLayout"}>
            <div className={styles.communityTabsPage}>
                <div className={styles.headerPart}>
                    <h2 className='text-blue-gradient'>Add Subchat</h2>
                </div>
                <Friendstories titleText='Members' addBtn />
                <div className={styles.taskTemplatePart}>
                    <div className={styles.headerPart}>
                        <h2>Task Template</h2>
                    </div>
                    <ul>
                        <li>
                            <button className={styles.plusBtn}>
                                <ImgComponent src={Images.plusIcon} alt="plus icon" />
                            </button>
                        </li>
                        {
                            taskList.map((item, i) => (
                                <li key={i} className={styles.taskList}>
                                    <label htmlFor={`checkbox-${i}`}>
                                        {item.taskText}
                                    </label>
                                    <input type="checkbox" name="" id={`checkbox-${i}`} />
                                </li>
                            ))
                        }
                    </ul>
                    <div className={styles.customBtn}>
                        <button>Customized Template</button>
                    </div>
                    <button className={styles.postBtn}>Post Subchat</button>
                </div>
                <div className={styles.chatArea}>

                </div>
                <ChatInput/>
            </div>
        </ComponentLayout>
    )
}
