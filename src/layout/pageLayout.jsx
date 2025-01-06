import React, { useState } from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import Sidebars from '@/Component/global/Sidebars';
import Suggestion from '@/Component/global/Suggestion';
import ConnectFooter from '@/Component/Connect/connectFooter';
import Images from '@/app/Images';
import ImgComponent from '@/Component/global/imgComponent';
export default function PageLayout({children}) {
    const [isToggle, setIsToggle] = useState(false);
    return (
        <div className='layoutContainer'>
            <section className={`leftsection`}>
                <div className={`sidebarContainer ${isToggle ? "isOpen" : " "}`}>
                    <Sidebars />
                </div>
                <div className='mobileSidebar'>
                    <div className="logoImg">
                        <ImgComponent src={Images.logo} alt='logo' />
                    </div>
                    <button className='toggleBtn' onClick={() => setIsToggle(!isToggle)}>
                        {
                            isToggle ?
                                <HiOutlineMenuAlt1 />
                                : <FiMenu />
                        }
                    </button>
                </div>
            </section>
            <div className='centerAndRightSection '>
                <section className='layoutOutlet transparentScrollbar'>
                    {children}
                </section>
                <section className='rightsection'>
                    <section className={` flex-wrap `}>
                        <Suggestion />
                        <ConnectFooter />
                    </section>
                    <div className='chatBotContainer'>
                        <ImgComponent className='chatbotImg' src={Images.chatBotIcon} alt="chatBotIcon" />
                    </div>
                </section>
            </div>
        </div>
    )
}
