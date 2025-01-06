import React, { useEffect, useRef, useState } from 'react';
import Images from '@/app/Images';
import Stories from 'react-insta-stories';
import ChatInput from './chatInput';
import ImgComponent from './imgComponent';
import styles from "@/css/global.module.css";// Assume custom styles are in place
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const StoriesComponent = ({ onCloseHandle }) => {
    const stories = [
        {
            url: '/assets/video/test-video.mp4',
            type: 'video',
            header: {
                userName: 'Raja',
                storyCapture: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                profileImage: Images.profile,
            },
        },
        {
            url: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            type: 'image',
            header: {
                userName: 'Raja',
                storyCapture: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                profileImage: Images.profile,
            },
        },
        {
            url: '/assets/video/test-video.mp4',
            type: 'video',
            header: {
                userName: 'Raja',
                storyCapture: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                profileImage: Images.profile,
            },
        },
        {
            url: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            type: 'image',
            header: {
                userName: 'Raja',
                storyCapture: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                profileImage: Images.profile,
            },
        },
    ];
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0)

    const StoryHeader = (data) => (
        <div className={styles.storyHeader}>
            <div className={styles.imgPart}>
                <ImgComponent src={data.profileImage} alt="profile" />
            </div>
            <div className={styles.detailsPart}>
                <h2>{data.userName}</h2>
                <p>{data.storyCapture}</p>
            </div>
        </div>
    );

    const storyNextHandle = (event) => {
        if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex((prevIndex) => prevIndex + 1);
        } else {
            console.log("No more stories to show");
        }
    };

    const storyPreviousHandle = (event) => {
        if (currentStoryIndex > 0) {
            setCurrentStoryIndex((prevIndex) => prevIndex - 1);
        } else {
            setCurrentStoryIndex(0);
        }
    };

    const onAllStoriesEndHandle = (event) => {
        console.log(' onAllStoriesEndHandle', event)
        // setCurrentStoryIndex(0);
    }

    useEffect(() => {
        console.log('currentStoryIndex', currentStoryIndex);
    }, [currentStoryIndex])

    return (
        <div className={styles.storyPlayerContainer}>
            <Stories
                currentIndex={currentStoryIndex}
                preventDefault
                stories={stories}
                defaultInterval={5000}
                height="100%"
                width="100%"
                header={StoryHeader}
                onNext={storyNextHandle}
                onPrevious={storyPreviousHandle}
                onAllStoriesEnd={onAllStoriesEndHandle}
            />
            <div className={styles.customButtons}>
                <button
                    className={styles.prevButton}
                    onClick={storyPreviousHandle}
                    aria-label="Previous Story"
                >
                    <RiArrowLeftWideLine />
                </button>
                <button
                    className={styles.nextButton}
                    onClick={storyNextHandle}
                    aria-label="Next Story"
                >
                    <RiArrowRightWideLine />
                </button>
            </div>
            <div className={styles.storyInputWrapper}>
                <ChatInput />
            </div>
        </div>
    );
};

// const StoriesComponent = ({ onCloseHandle }) => {
//     const stories = [
//         {
//             url: '/assets/video/test-video.mp4',
//             type: 'video',
//             header: {
//                 userName: 'Raja',
//                 storyCapture: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//                 profileImage: Images.profile,
//             },
//         },
//         {
//             url: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//             type: 'image',
//             header: {
//                 userName: 'Raja',
//                 storyCapture: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//                 profileImage: Images.profile,
//             },
//         },
//         {
//             url: '/assets/video/test-video.mp4',
//             type: 'video',
//             header: {
//                 userName: 'Raja',
//                 storyCapture: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//                 profileImage: Images.profile,
//             },
//         },
//         {
//             url: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//             type: 'image',
//             header: {
//                 userName: 'Raja',
//                 storyCapture: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//                 profileImage: Images.profile,
//             },
//         },
//     ];
//     // const progressCircle = useRef(null);
//     // const progressContent = useRef(null);
//     const onAutoplayTimeLeft = (s, time, progress) => {
//         // progressCircle.current.style.setProperty('--progress', 1 - progress);
//         // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//     };

//     return (
//         <div className={styles.storyPlayerContainer}>
//                 <Swiper
//                     spaceBetween={30}
//                     centeredSlides={true}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     navigation={true}
//                     modules={[Autoplay, Navigation]}
//                     onAutoplayTimeLeft={onAutoplayTimeLeft}
//                     className={styles.swiperVideoSlider}
//                 >
//                     {
//                         stories.map((item, i) => (
//                             <SwiperSlide className={styles.swiperSlideVideoSlider} key={i}>
//                                 <div className={styles.videoContainer}>
//                                     {item.type === 'video' ? (
//                                         <video src={item.url}  autoPlay className={styles.storyMedia} />
//                                     ) : (
//                                         <img src={item.url} alt="Story" className={styles.storyMedia} />
//                                     )}
//                                 </div>
//                             </SwiperSlide>
//                         ))
//                     }
//                 </Swiper>
//             <div className={styles.storyInputWrapper}>
//                 <ChatInput />
//             </div>
//         </div>
//     );
// };
export default StoriesComponent;
