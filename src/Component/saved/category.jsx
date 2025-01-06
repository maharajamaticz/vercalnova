"use client"
import React, { useState } from 'react'
import styles from "@/css/connect/savedPage.module.css";
import { Row } from 'react-bootstrap';
import { CatagoriesFilterList } from '../global/categoriesFilterList';
import { postOverViewData } from '@/json/staticData';
import { useRouter } from 'next/navigation';
import PostCardTemplate from '../global/postCardTemplate';
import { DynamicThemeClass } from '@/utils/utilitsFunctions';

export default function CategoryList({ mainTitle, subTitle, listBtn = false, loadmoreBtn = true, slidesPerView = "4.5", themeType = "theme1", cardView = 6 }) {
 
    const router = useRouter();
    const [filterData, setFilterData] = useState(postOverViewData);

    // const [postList, setPostList] = useState([
    //     { img: Images.creator1, imageLabel: "LIZ: Marketing/ Tech Help" },
    //     { img: Images.creator1, imageLabel: "LIZ: Marketing/ Tech Help" },
    //     { img: Images.creator2, imageLabel: "Kelly: Adventure" },
    //     { img: Images.creator2, imageLabel: "Mandy: Influencer" },
    // ])

    const getFilerValueHandle = (data) => {
        const filterData = postOverViewData.filter((item) => (item.category.toLowerCase() === data.toLowerCase()));
        if(filterData.length!==0){
            setFilterData(filterData);
        }else{
            setFilterData(postOverViewData);
        }
    }

    return (
        <section className={styles.savedAndLikeContainer}>
            <div className={styles.saveContainer}>
                <div className={styles.titlePart}>
                    <div>
                        <h2>{mainTitle}</h2>
                        <p>{subTitle}</p>
                    </div>
                    {
                        listBtn &&
                        <div>
                            <button onClick={() => router.push("/notifications", { state: "creatorNotification" })} className={styles.listBtn}>list</button>
                        </div>
                    }
                </div>
                <div>
                    <CatagoriesFilterList slidesPerView={slidesPerView} getFilerValueHandle={getFilerValueHandle}/>
                </div>
                <div className={styles.imgContainer}>
                    <Row className='d-flex'>
                        {
                            [...filterData].map((item, i) => (
                                <PostCardTemplate item={item} key={i} />
                            ))
                        }
                    </Row>
                </div>
                {
                    loadmoreBtn &&
                    <div className={styles.btnWrapper}>
                        <button className={DynamicThemeClass(themeType)} ><span>Load More</span></button>
                    </div>
                }
            </div>
        </section>
    )
}
