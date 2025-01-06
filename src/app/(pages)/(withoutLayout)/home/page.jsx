"use client"
import React from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import Images from "@/app/Images";
import Header from '@/Component/global/Header';
import Footer from '@/Component/global/Footer';
import ImgComponent from '@/Component/global/imgComponent';

function LandingPage() {
    return (
        <div className='nova_landing'>
            <Container className='contain_max'>
                <Header />
                <div className='d-block d-md-flex align-items-start gap-5 justify-content-center'>
                    <div className='landingScreenMobile'>
                        <ImgComponent src={Images.novaapp} className={""} alt={"novaapp"} />
                    </div>
                    <div className='mt-4 mt-md-0'>
                        <div className='cardborder pt-3 pb-5 text-center'>
                        <ImgComponent src={Images.logo} className={"mainlogo"} alt={"mainlogo"} />
                            <div>
                                <Link href={{pathname:"signup/everyone"}} > <button className='themebtn themebtn_width' >SIGN UP: Every One</button></Link> <br></br>
                                <Link href={{pathname:"signup/organization"}}> <button className='themebtn themebtn_width mt-3'>SIGN UP: Organization</button></Link>
                            </div>
                        </div>
                        <p className='text-white text-center mt-3'>Get the App on</p>
                        <div className='d-flex justify-content-center gap-2'>
                            <Link href="/" target='_blank'>
                                <ImgComponent src={Images.playstore} className={"playstoreImg h-auto"} alt={"playstore"} />
                            </Link>
                            <Link href="/" target='_blank'>
                                <ImgComponent src={Images.appstore} className={"appstoreImg h-auto"} alt={"appstore"} />
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </Container>
        </div>
    )
}

export default LandingPage;