"use client"
import React, { useState } from 'react'
import styles from "@/css/connect/postPage.module.css";
import PostCardTemplate from '@/Component/global/postCardTemplate';
import ComponentLayout from '@/Component/global/componentLayout';
import Images from '@/app/Images';
import { postData } from '@/json/staticData';
import { useParams } from 'next/navigation';
import ImgComponent from '@/Component/global/imgComponent';
export default function PostPage() {
    const { id: userId } = useParams();
    console.log("userId",userId)
    const userDetail = postData.filter((item) => item.id == userId)[0];
    return (
        <ComponentLayout>
            {
                userDetail ?
                    <section className={styles.postPage}>
                        <div className={styles.headPart}>
                            <h2>{userDetail.userName} : {userDetail.userRole}</h2>
                            <button>
                                <ImgComponent src={Images.postmoreIcon} alt="more" />
                            </button>
                        </div>
                        <div className={`${styles.bodyPart}`}>
                            {
                                userDetail?.postLists?.map((item, index) => (
                                    <PostCardTemplate item={item} key={index} />
                                ))
                            }
                        </div>
                    </section> :
                    <section className={styles.userNotFound}>
                        <h2>Somthing went worng !</h2>
                    </section>
            }
        </ComponentLayout>
    )
}
