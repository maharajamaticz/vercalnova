"use client"
import Images from '@/app/Images';
import ImgComponent from '@/Component/global/imgComponent';
import React from 'react';

function Header() {
    return (
        <div className='py-0 px-2'>
            <ImgComponent src={Images.logo} className={"logo"} alt={"logo"}/>
        </div>
    )
}

export default Header