"use client"
import React from 'react'
import styles from "@/css/creatorHub/organizationProfilePage.module.css";
export default function DaoChatPage() {
    return (
        <div className={styles.daoChatPage}>
            <h2>Community Chat</h2>
            <ul>
                <li>
                General Chat
                </li>
                <li>
                DAO Update
                </li>
                <li>
                Alpha
                </li>
                <li>
                TA Info
                </li>
            </ul>
        </div>
    )
}
