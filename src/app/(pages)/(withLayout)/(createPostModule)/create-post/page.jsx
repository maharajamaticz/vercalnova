"use client"
import 'swiper/css';
import 'swiper/css/scrollbar';
import styles from "@/css/createPost/createPost.module.css";
import Images from '@/app/Images';
import ImgComponent from '@/Component/global/imgComponent';
import ComponentLayout from '@/Component/global/componentLayout';
import DropdownMenu from '@/Component/global/dropdown';
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation';
import { InputComponent, SelectInputComponent, ToggleInput } from '@/Component/form/inputfield';
import { selectOption } from '@/json/staticData';
import { useCustomToast } from '@/hooks/useCustomToast';
const dropdownItems = ["Recent", "This Month", "This Week"];

export default function page() {
    const router = useRouter();
    const {successToast}=useCustomToast();
    const [tabIndex, setTabIndex] = useState(0);
    const tabIndeHandle = (indexVal) => {
        setTabIndex(indexVal)
    }
    const customBackHandle = () => {
        if (tabIndex == 0) {
            router.back();
        } else {
            setTabIndex((pre) => (pre - 1))
        }
    }

    const postHandle=()=>{
        successToast({msg:"Post Successfully Added"});
        router.push("/connect");
    }
    return (
        <ComponentLayout dynamicClass={"communityHubLayout"} customBackHandle={customBackHandle}>
            <section className={styles.createPostPage}>
                <div className={styles.uploadPostSection}>
                    {
                        tabIndex == 0 && <div className={styles.tabBodyWrapper}>
                            <div className={styles.navHeaderPart}>
                                <h2>New Post</h2>
                                <button onClick={() => tabIndeHandle(1)}>Next</button>
                            </div>
                            <div className={styles.imgPreviewContainer}>
                                <ImgComponent src={Images.postPreview} alt={"preview image"} />
                            </div>
                            <div className={styles.userImgListContainer}>
                                <div className={styles.headerPart}>
                                    <DropdownMenu dropdownItems={dropdownItems} />
                                    <p>Draft</p>
                                </div>
                            </div>
                            <div className={styles.userDraftContainer}>
                                <div className={styles.galleryImgWrapper}>
                                    {
                                        [...Array(16)].map((_, i) => (
                                            <div key={i} className={styles.galleryContainer}>
                                                <ImgComponent src={Images.postPreview} alt={"preview image"} />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className={styles.storyTypeList}>
                                    <ul>
                                        <li>
                                            <label htmlFor="postType">
                                                <input type="radio" defaultChecked name="typeOfPost" id="postType" />
                                                <span>Post</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label htmlFor="storyType">
                                                <input type="radio" name="typeOfPost" id="storyType" />
                                                <span>Story</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label htmlFor="videoType">
                                                <input type="radio" name="typeOfPost" id="videoType" />
                                                <span>Video</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label htmlFor="liveType">
                                                <input type="radio" name="typeOfPost" id="liveType" />
                                                <span>Live</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label htmlFor="audioType">
                                                <input type="radio" name="typeOfPost" id="audioType" />
                                                <span>Audio</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label htmlFor="writtenType">
                                                <input type="radio" name="typeOfPost" id="writtenType" />
                                                <span>written</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        tabIndex == 1 && <div className={styles.tabBodyWrapper}>
                            <div className={styles.navHeaderPart}>
                                <h2>New Post</h2>
                                <div className={styles.optionsPart}>
                                    <ul>
                                        <li>
                                            <button>
                                                <ImgComponent src={Images.filterIcon} alt={"filter"} />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <ImgComponent src={Images.postGalleryIcon} alt={"gallery"} />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <ImgComponent src={Images.addTextIcon} alt={"text"} />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <ImgComponent src={Images.effectIcon} alt={"effect"} />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.imgShowContainer}>
                                <ImgComponent src={Images.postPreview} alt="preview" />
                            </div>
                            <div className={styles.musicList}>
                                <div className={styles.fileUpload}>
                                    <label htmlFor="musicAddPost">
                                        <input type="file" id="musicAddPost" />
                                        <ImgComponent src={Images.addMusicIcon} alt={"fileupload"} />
                                    </label>
                                    <p>Browser</p>
                                </div>
                                <div className={styles.musicSliderWrapper}>
                                    <Swiper
                                        className={styles.musicSwiper}
                                        slidesPerView={"auto"}
                                    >
                                        <SwiperSlide className={styles.musicSwiperSlide}>
                                            <div className={styles.musicContainer}>
                                                <ImgComponent src={Images.musicImg1} alt={"Havana"} />
                                                <p>Havana</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className={styles.musicSwiperSlide}>
                                            <div className={styles.musicContainer}>
                                                <ImgComponent src={Images.musicImg2} alt={"KLOK"} />
                                                <p>KLOK</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className={styles.musicSwiperSlide}>
                                            <div className={styles.musicContainer}>
                                                <ImgComponent src={Images.musicImg1} alt={"Havana"} />
                                                <p>Havana</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className={styles.musicSwiperSlide}>
                                            <div className={styles.musicContainer}>
                                                <ImgComponent src={Images.musicImg2} alt={"KLOK"} />
                                                <p>KLOK</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className={styles.musicSwiperSlide}>
                                            <div className={styles.musicContainer}>
                                                <ImgComponent src={Images.musicImg1} alt={"Havana"} />
                                                <p>Havana</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className={styles.musicSwiperSlide}>
                                            <div className={styles.musicContainer}>
                                                <ImgComponent src={Images.musicImg2} alt={"KLOK"} />
                                                <p>KLOK</p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className={styles.btnWrapper}>
                                <button className={styles.editBtn} onClick={() => tabIndeHandle(0)}>Back</button>
                                <button className={styles.nextBtn} onClick={() => tabIndeHandle(2)}>Next</button>
                            </div>
                        </div>
                    }
                    {
                        tabIndex == 2 && <div className={styles.tabBodyWrapper}>
                            <div className={styles.navHeaderPart}>
                                <h2>New Post</h2>
                                <p>Draft</p>
                            </div>
                            <div className={styles.postContentPart}>
                                <div className={styles.imgPreviewPart}>
                                    <ImgComponent src={Images.postPreview} alt={"post img"} />
                                </div>
                                <div className={styles.postInputWrapper}>
                                    <div className={styles.inputFieldPart}>
                                        <textarea placeholder='Write Your Description...'>
                                        </textarea>
                                    </div>
                                    <div className={styles.inputFieldPart}>
                                        <label htmlFor="">
                                            <ImgComponent src={Images.topicSearchIcon} alt={"Search"} />
                                            <p>Choose Topic <span>*</span></p>
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <SelectInputComponent options={selectOption} defultSelectValue={selectOption[0]} />
                                        </div>
                                    </div>
                                    <div className={styles.inputFieldPart}>
                                        <label htmlFor="">
                                            <ImgComponent src={Images.textIcon} alt={"text"} />
                                            <p>Post Title <span>*</span></p>
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <InputComponent placeholder='Enter Title'/>
                                        </div>
                                    </div>
                                    <div className={styles.inputFieldPart}>
                                        <label htmlFor="">
                                            <ImgComponent src={Images.createPassIcon} alt={"passes"} />
                                            <p>Add Passes<span>*</span></p>
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <InputComponent placeholder='Select Pass'/>
                                        </div>
                                    </div>
                                    <div className={styles.inputFieldPart}>
                                        <label htmlFor="">
                                            <ImgComponent src={Images.hashTagIcon} alt={"hashtag"} />
                                            <p>Select Hashtag<span>*</span></p>
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <InputComponent placeholder='Select Hashtag'/>
                                        </div>
                                    </div>
                                    <div className={styles.inputFieldPart}>
                                        <label htmlFor="">
                                            <ImgComponent src={Images.tagPeopleIcon} alt={"tag people"} />
                                            <p>Tag People<span>*</span></p>
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <InputComponent placeholder='add people'/>
                                        </div>
                                    </div>
                                    <div className={styles.inputFieldPart}>
                                        <label htmlFor="">
                                            <ImgComponent src={Images.showIcon} alt={"eye"} />
                                            <p>Audience & who can replay <span>*</span></p>
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <SelectInputComponent options={selectOption} defultSelectValue={selectOption[0]} />
                                        </div>
                                    </div>
                                    <div className={styles.inputFieldPart}>
                                        <label htmlFor="">
                                            <ImgComponent src={Images.replyIcon} alt={"reply"} />
                                            <p>Choose Who Can Replay<span>*</span></p>
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <ToggleInput />
                                        </div>
                                    </div>
                                    <div className={styles.inputFieldPart}>
                                        <label htmlFor="">
                                            <ImgComponent src={Images.locationIcon} alt={"location"} />
                                            <p>Add Location<span>*</span></p>
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <SelectInputComponent options={selectOption} defultSelectValue={selectOption[0]} />
                                        </div>
                                    </div>
                                    <div className={styles.inputFieldPart}>
                                        <label htmlFor="">
                                            <ImgComponent src={Images.tagChannelIcon} alt={"location"} />
                                            <p>Tag Chat Channel<span>*</span></p>
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <SelectInputComponent options={selectOption} defultSelectValue={selectOption[0]} />
                                        </div>
                                    </div>
                                    <div className={styles.postBtn}>
                                        <button onClick={postHandle}>Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </ComponentLayout>
    )
}
