import React, { useState, useEffect, useRef } from "react";
import styles from "@/css/global.module.css";
import StoriesComponent from '../global/storySlider'
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import Images from "@/app/Images";
import ImgComponent from "../global/imgComponent";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import ChatInput from "../global/chatInput";

const stories = [
    {
        userId: "user1",
        username: "John Doe",
        profileImage: Images.chatProfile,
        description: "Lorem Ipsum is simply dummy text of the printing ",
        stories: [
            { type: "image", url: Images.galleryImg1, duration: 4000 },
            { type: "video", url: Images.videoSrc, duration: 10000 },
            { type: "image", url: Images.creator1, duration: 4000 },
        ],
    },
    {
        userId: "user2",
        username: "Smith",
        description: "Lorem Ipsum is simply dummy text of the printing ",
        profileImage: Images.chatMsgProfile,
        stories: [
            { type: "image", url: Images.galleryImg1, duration: 4000 },
            // { type: "image", url: Images.galleryImg2, duration: 4000 },
        ],
    },
];
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
                    {/* <SwiperSlide className={styles.storiesSwiperSlide}>
                        <StoryContainer onCloseHandle={() => onCloseHandle(false)} />
                    </SwiperSlide> */}
                    {/* {
                        stories.map((item,i) => ( */}
                            <SwiperSlide  className={styles.storiesSwiperSlide}>
                                <StoryContainer onCloseHandle={() => onCloseHandle(false)} />
                            </SwiperSlide>
                        {/* ))
                    } */}
                </Swiper>
            </div>
            <button className={styles.modelCloseBtn} onClick={() => onCloseHandle(false)}>
                <IoClose />
            </button>
        </section>
    )
}


function StoryContainer({item,onCloseHandle }) {
    const [currentUserIndex, setCurrentUserIndex] = useState(0);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    const currentUser = stories[currentUserIndex];
    const currentStory = currentUser.stories[currentStoryIndex];

    // Start and update the progress bar
    useEffect(() => {
        setProgress(0); // Reset progress when the story changes

        if (!isPaused) {
            const startTime = Date.now();
            intervalRef.current = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const progressValue = Math.min((elapsed / currentStory.duration) * 100, 100);
                setProgress(progressValue);

                // If progress reaches 100, move to the next story
                if (progressValue >= 100) {
                    clearInterval(intervalRef.current);
                    goNext();
                }
            }, 50); // Update progress every 50ms
        }

        return () => clearInterval(intervalRef.current);
    }, [currentStoryIndex, currentUserIndex, isPaused, currentStory]);

    // Navigate to the next story
    const goNext = () => {
        if (currentStoryIndex < currentUser.stories.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
        } else if (currentUserIndex < stories.length - 1) {
            setCurrentStoryIndex(0);
            setCurrentUserIndex(currentUserIndex + 1);
        }
    };

    // Navigate to the previous story
    const goBack = () => {
        if (currentStoryIndex > 0) {
            setCurrentStoryIndex(currentStoryIndex - 1);
        } else if (currentUserIndex > 0) {
            const prevUser = stories[currentUserIndex - 1];
            setCurrentUserIndex(currentUserIndex - 1);
            setCurrentStoryIndex(prevUser.stories.length - 1);
        }
    };

    // Toggle the pause/play state
    const togglePause = () => {
        setIsPaused((prev) => !prev);
    };

    const onFocusHandle=()=>{
        setIsPaused(true);
    };
    
    const onBlurHandle=()=>{
        setIsPaused(false);
    };

    return (
        <div className={styles.instagramStoryComponent}>
            <div className={styles.storyWrapper}>
                <div className={styles.storyHeader}>
                    <ImgComponent
                        src={currentUser.profileImage}
                        alt={currentUser.username}
                        className={styles.profilePic}
                    />
                    <div>
                        <h2>{currentUser.username}</h2>
                        <p>{currentUser.description}</p>
                    </div>
                </div>

                <div className={styles.storyContent}>
                    {currentStory.type === "image" && (
                        <ImgComponent src={currentStory.url} alt="Story" className={styles.storyMedia} />
                    )}
                    {currentStory.type === "video" && (
                        <video
                            src={currentStory.url}
                            autoPlay={!isPaused}
                            className={styles.storyMedia}
                        />
                    )}
                </div>

                <div className={styles.storyControls}>
                    <button type="button" className={styles.controlButton} onClick={goBack}>
                        <MdArrowBackIos />
                    </button>
                    {/* <button type="button" className="control-button play-pause" onClick={togglePause}>
            {isPaused ? "Play" : "Pause"}
          </button> */}
                    <button type="button" className={styles.controlButton} onClick={goNext}>
                        <MdArrowForwardIos />
                    </button>
                </div>

                <div className={styles.progressIndicators}>
                    {currentUser.stories.map((story, index) => (
                        <div key={index} className={styles.progressBar}>
                            <div
                                className={styles.innerProgressBar}
                                style={{
                                    width: index === currentStoryIndex ? `${progress}%` : index < currentStoryIndex ? "100%" : "0%",
                                    transition: index === currentStoryIndex && !isPaused ? "width 50ms linear" : "none",
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
                <ChatInput camaraBtn={false} onFocusHandle={onFocusHandle} onBlurHandle={onBlurHandle} fileBtn={false} micBtn={false} stickerBtn={false} sendBtn={true}/>
            </div>
        </div>
    );
}