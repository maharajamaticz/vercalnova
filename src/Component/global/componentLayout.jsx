"use client"
import React from 'react';
import Images from '@/app/Images';
import { useRouter } from 'next/navigation';
import ImgComponent from './imgComponent';

export default function ComponentLayout({ children, dynamicClass, backBtn = true, backNavUrl }) {
    const router = useRouter();
    return (
        <div className={`componentLayout`}>
            {
                backBtn &&
                <div className='btnWrapper'>
                    <button  onClick={() => backNavUrl ? router.push(backNavUrl) : router.back()} className='leftArrowBtn'>
                        <ImgComponent src={Images.leftArrowIcon} alt="leftArrowIcon"/>
                    </button>
                </div>
            }
            <div className={`childrenWrapper ${dynamicClass || ""}`}>
                {children}
            </div>
        </div>
    )
}
