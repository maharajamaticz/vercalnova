"use client"
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "../../css/global.module.css";
export const CatagoriesFilterList = ({ slidesPerView, getFilerValueHandle }) => {
    const catagoriesArray = [
        {
            id: 1,
            labelText: "All",
            bgColor: "#098F1350",
            borderColor: "#098F13",
            isActive: true,
        },
        {
            id: 2,
            labelText: "Video",
            bgColor: "#5584DF50",
            borderColor: "#5584DF",
            isActive: false,
        },
        {
            id: 3,
            labelText: "Audio",
            bgColor: "#FF87F650",
            borderColor: "#FF87F6",
            isActive: false,
        },
        {
            id: 4,
            labelText: "Music",
            bgColor: "#FFDCC950",
            borderColor: "#FFDCC9",
            isActive: false,
        },
        {
            id: 5,
            labelText: "Photos",
            bgColor: "#FEEEB650",
            borderColor: "#FEEEB6",
            isActive: false,
        },
    ]
    const [catagoriesList, setCatagoriesList] = useState([...catagoriesArray]);

    const filterHandle = (type, data) => {
        if (type == "save") {
            setCatagoriesList((prev) =>
                prev.map((item) =>
                    item.id === data.id
                        ? { ...item, isActive: true }
                        : { ...item, isActive: false }
                )
            );
        }
    }

    useEffect(() => {
        const catagoriesListArr = catagoriesList.filter((item) => (item.isActive));
        const filterList=catagoriesListArr[0].labelText;
        console.log('filterArr', filterList);
        if(getFilerValueHandle){
            getFilerValueHandle(filterList);
        }
    }, [catagoriesList]);

    return <div className={styles.catagoriesFilterList}>
        <ul>
            <Swiper spaceBetween={10}
             slidesPerView={"auto"}
             className={styles.catagoriesFilterSwiperSider}
                >
                {catagoriesList.map((item, index) => (
                    <SwiperSlide key={index}    className={styles.catagoriesFilterSwiperSlide}>
                        <li onClick={() => filterHandle("save", item)} style={{ backgroundColor: item.bgColor, borderColor: item.borderColor, opacity: item.isActive ? "1" : "0.6" }}>
                            {
                                item.labelText
                            }
                        </li>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ul>
    </div>
}