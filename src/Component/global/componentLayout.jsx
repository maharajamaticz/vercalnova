"use client"
import React from 'react';
import Images from '@/app/Images';
import { useRouter } from 'next/navigation';
import ImgComponent from './imgComponent';

export default function ComponentLayout({ children, dynamicClass, backBtn = true, backNavUrl, customBackHandle=false }) {
    const router = useRouter();

    const backHandle = () => {

        if (!customBackHandle) {
            if (backNavUrl) {
                router.push(backNavUrl)
            } else {
                router.back()
            }
        }else{
            customBackHandle()
        }

    }
    return (
        <div className={`componentLayout`}>
            {
                backBtn &&
                <div className='btnWrapper'>
                    <button onClick={() => backHandle()} className='leftArrowBtn'>
                        <ImgComponent src={Images.leftArrowIcon} alt="leftArrowIcon" />
                    </button>
                </div>
            }
            <div className={`childrenWrapper ${dynamicClass || ""}`}>
                {children}
            </div>
        </div>
    )
}
