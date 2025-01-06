"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import Images from '@/app/Images';
import styles from "@/css/connect/connect.module.css";
import ImgComponent from './imgComponent';
import StoryModel from '../model/storyModel';

function Friendstories({ titleText = "Friends Stories", addBtn = false }) {
    const [storylist, setStorylist] = useState([
        { img: Images.profile, name: "Joe" },
        { img: Images.profile1, name: "Mad" },
        { img: Images.profile2, name: "Joy" },
        { img: Images.profile3, name: "Stev" },
        { img: Images.profile1, name: "Rob" },
        { img: Images.profile2, name: "Joy" },
        { img: Images.profile, name: "Joe" },
    ]);

    const [storyModel, setStoryModel] = useState(false);

    return (
        <div className={styles.storiesWrapper}>
            {
                titleText != null &&
                <h5 className="text-white mb-3">Friends Stories</h5>
            }
            <Swiper
                spaceBetween={5}
                slidesPerView={"auto"}
            >
                {storylist.map((e, i) => (
                    <SwiperSlide key={i} className={styles.storySwiperSlider}>
                        <div className={styles.sliderCard} onClick={()=>setStoryModel(true)}>
                            <ImgComponent src={e.img} className="storyimg" alt="storyimg" />
                            <p className="text-white text-center mt-2">{e.name}</p>
                            {
                                addBtn &&
                                <button className={styles.addBtn}>+</button>
                            }
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
            {
                storyModel &&
                <StoryModel onCloseHandle={setStoryModel}/>
            }
        </div>
    );
}

export default Friendstories;