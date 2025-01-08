"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel } from 'swiper/modules';
import styles from "@/css/connect/reelVideo.module.css";
import Images from '@/app/Images';
import ImgComponent from './imgComponent';

export default function ReelVideo() {
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRefs = useRef([]);
    const swiperRef = useRef(null);

    const videos = [
        { src: "https://videos.pexels.com/video-files/7975481/7975481-hd_1080_1920_30fps.mp4", title: "Video 1" },
        { src: "https://videos.pexels.com/video-files/7975481/7975481-hd_1080_1920_30fps.mp4", title: "Video 2" },
        { src: "https://videos.pexels.com/video-files/7975481/7975481-hd_1080_1920_30fps.mp4",  title: "Video 3" },
    ];

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === swiper.activeIndex) {
                    video.play().catch((error) => {
                        console.log("Autoplay blocked by browser:", error);
                    });
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    };

    useEffect(() => {
        const handleUserInteraction = () => {
            videoRefs.current.forEach((video) => {
                if (video) {
                    video.play().catch((error) => {
                        console.log("Autoplay blocked by browser:", error);
                    });
                }
            });
        };

        window.addEventListener('click', handleUserInteraction);
        window.addEventListener('scroll', handleUserInteraction);

        return () => {
            window.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('scroll', handleUserInteraction);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowUp') {
                if (swiperRef.current) {
                    swiperRef.current.swiper.slidePrev();
                }
            } else if (event.key === 'ArrowDown') {
                if (swiperRef.current) {
                    swiperRef.current.swiper.slideNext();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={styles.reelsWrapper}>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
                modules={[Mousewheel]}
                className={styles.mySwiper}
                onSlideChange={handleSlideChange}
                ref={swiperRef}
            >
                {videos.map((video, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.sliderCard}>
                            <video
                                autoPlay
                                muted
                                ref={(el) => (videoRefs.current[index] = el)}
                                loop
                            >
                                <source src={video.src} type="video/mp4" />
                            </video>
                            <div className={styles.reelsOptionPart}>
                                <ul>
                                    <li>
                                        <button>
                                            <ImgComponent src={Images.reelLikeIcon} alt="like" />
                                            <p>1.3M</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <ImgComponent src={Images.reelCommentIcon} alt="comment" />
                                            <p>1.3M</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <ImgComponent src={Images.reelShareIcon} alt="share" />
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <ImgComponent src={Images.reelSaveIcon} alt="save" />
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <ImgComponent src={Images.reelLiveIcon} alt="live" />
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <ImgComponent src={Images.reelMoreIcon} alt="more" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
