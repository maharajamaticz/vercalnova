"use client"
import React from 'react'
import Creators from '@/Component/Connect/Creators'
import Following from '@/Component/Connect/following'
import Notifications from '@/Component/Connect/Notifications'
import Friendstories from '@/Component/global/Friendstories'
import ComponentLayout from '@/Component/global/componentLayout'
export default function ConnectPage() {
    return (
        <ComponentLayout backBtn={false}>
            <div className={`themewidth `}>
                <section className={`centersection `}>
                    <div className='storySliderContainer'>
                        <Friendstories />
                    </div>
                    <Notifications />
                    <Creators />
                    <Following />
                </section>
            </div>
        </ComponentLayout>
    )
}
