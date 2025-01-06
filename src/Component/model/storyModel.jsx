import React from 'react'
import styles from "@/css/global.module.css";
import StoriesComponent from '../global/storySlider'
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
export default function StoryModel({ onCloseHandle }) {
    return (
        <section className={styles.storyModel}>
            <div className={styles.storiesComponent}>
                <Swiper
                    effect={'cube'}
                    // grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    // pagination={true}
                    modules={[EffectCube, Pagination]}
                    className={styles.storiesSwiper}
                >
                    <SwiperSlide className={styles.storiesSwiperSlide}>
                        <StoriesComponent onCloseHandle={() => onCloseHandle(false)} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.storiesSwiperSlide}>
                        <StoriesComponent onCloseHandle={() => onCloseHandle(false)} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <button className={styles.modelCloseBtn} onClick={() => onCloseHandle(false)}>
                <IoClose />
            </button>
        </section>
    )
}
