"use client"
import React, { useState } from 'react';
import styles from "@/css/signup.module.css";
import { FaEdit } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import Images from '@/app/Images';
import Header from '@/Component/global/Header';
import Footer from '@/Component/global/Footer';
import ImgComponent from '@/Component/global/imgComponent';
import Followers from '@/Component/signUp/Followers';
import Qrpage from '@/Component/signUp/Qrpage';
import Favourites from '@/Component/signUp/Favourites';
import {useParams, useRouter } from 'next/navigation';
import { useCustomToast } from '@/hooks/useCustomToast';


function SignUpPage() {
    const { type } = useParams();
    const router = useRouter();
    const { successToast } = useCustomToast();
    const usertype = type;

    const [steps, setSteps] = useState(1)
    const [bannerImg, setBannerImg] = useState();
    const [profileImg, setProfileImg] = useState();

    function bannerHandleChange(e) {
        console.log(e.target.files);
        setBannerImg(URL.createObjectURL(e.target.files[0]));
    }

    function profileHandleChange(e) {
        console.log(e.target.files);
        setProfileImg(URL.createObjectURL(e.target.files[0]));
    }

    const submitHandle = () => {
        successToast({ msg: "Login Successfully", redirectURL: "/connect" });
    }
    return (
        <div className={`${styles.allback} py-4 py-md-0`}>
            <Container className='contain_max'>
                <Header />
                <Row className='align-items-center h_100 py-4 py-lg-0'>
                    <Col lg={7} xl={7}>
                        <div className={`${styles.signup} py-4 px-4`}>
                            {steps === 1 &&
                                <>
                                    <h4 className={`${styles.main_heading} text-center mt-1 mb-4`}>SIGN UP: {usertype === "everyone" ? "EVERY ONE" : "ORGANIZATION"}</h4>
                                    <div className={`position-relative`}>
                                        <div className={`${styles.browseinput}`}>
                                            <input type='file' onChange={bannerHandleChange} />
                                            <button className={`${styles.editbtn} py-1 px-3`}><FaEdit />Edit</button>
                                        </div>
                                        <ImgComponent src={bannerImg ? bannerImg : Images.coverimg} className={`${styles.coverimg} img-fluid w-100`} alt="coverimage" />
                                    </div>

                                    <div className={`position-relative ${styles.wset}`}>
                                        <div className={`${styles.browseinput}`}>
                                            <input type='file' onChange={profileHandleChange} />
                                            <button className={`${styles.editbtn} py-1 px-2`}><FaEdit /></button>
                                        </div>
                                        <ImgComponent src={profileImg ? profileImg : Images.profile} className={`${styles.profile} img-fluid`} alt="profile" />
                                    </div>

                                    <Row className='mt-3'>
                                        <Col sm={usertype === "everyone" ? 12 : 6}>
                                            <div className={`mb-3`}>
                                                <label className={`labelname mb-2`}>Nova ID</label>
                                                <input className={`inputs`} type='text' placeholder='User Name' />
                                            </div>
                                        </Col>
                                        {usertype === "organization" &&
                                            <Col sm={6}>
                                                <div className={`mb-3`}>
                                                    <label className={`labelname mb-2`}>Submit your EIN</label>
                                                    <input className={`inputs`} type='text' placeholder='Expert for DAOS' />
                                                </div>
                                            </Col>}
                                        {usertype === "everyone" &&
                                            <Col sm={12}>
                                                <div className={`mb-3`}>
                                                    <label className={`labelname mb-2`}>Channel Decription</label>
                                                    <textarea className={`textarea`} rows={4} placeholder='Enter Channel Description....'></textarea>
                                                </div>
                                            </Col>}
                                        <Col sm={12}>
                                            <div className={`mb-3`}>
                                                <label className={`labelname mb-2`}>Social Links</label>
                                                <Row>
                                                    <Col sm={6}> <input className={`inputs`} type='text' placeholder='Facebook' /></Col>
                                                    <Col sm={6}> <input className={`inputs mt-3 mt-sm-0`} type='text' placeholder='Instagram' /></Col>
                                                    <Col sm={6}> <input className={`inputs mt-3`} type='text' placeholder='Website' /></Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        {usertype === "organization" &&
                                            <>
                                                <Col sm={6}>
                                                    <div className={`mb-3`}>
                                                        <label className={`labelname mb-2`}>Profile Category</label>
                                                        <input className={`inputs`} type='text' placeholder='Tag your Industry' />
                                                    </div>
                                                </Col>
                                                <Col sm={6}>
                                                    <div className={`mb-3`}>
                                                        <label className={`labelname mb-2`}>Location</label>
                                                        <input className={`inputs`} type='text' placeholder='Location' />
                                                    </div>
                                                </Col>
                                            </>
                                        }

                                    </Row>

                                    <div className={`d-flex justify-content-between mt-4`}>
                                        <button className='cancelbtn px-3' onClick={() => router.push("/home")}>Cancel</button>
                                        <button className='themebtn px-3 py-2' onClick={() => setSteps(2)}>Next</button>
                                    </div>
                                </>}


                            {steps === 2 &&
                                <>
                                    <h4 className={`${styles.main_heading} text-uppercase text-center mt-1 mb-4`}>Select Favorite Interest</h4>
                                    <Favourites />
                                    <div className={`d-flex justify-content-between mt-4`}>
                                        <button className='cancelbtn px-3' onClick={() => setSteps(1)}>Cancel</button>
                                        <button className='themebtn px-3 py-2' onClick={() => setSteps(3)}>Next</button>
                                    </div>
                                </>
                            }

                            {steps === 3 &&
                                <>
                                    <h4 className={`${styles.main_heading} text-uppercase text-center mt-1 mb-4`}>Suggested to follow</h4>
                                    <Followers />
                                    <div className={`d-flex justify-content-between mt-4`}>
                                        <button className='cancelbtn px-3' onClick={() => setSteps(2)}>Cancel</button>
                                        <button className='themebtn px-3 py-2' onClick={submitHandle}>Skip</button>
                                    </div>
                                </>
                            }
                        </div>
                    </Col>

                    <Col lg={4} xl={3} className='mt-3 mt-lg-0'>
                        <Qrpage />
                    </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    )
}

export default SignUpPage;