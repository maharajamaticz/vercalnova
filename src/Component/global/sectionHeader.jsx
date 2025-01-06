"use client"
import React from 'react'
import styles from "@/css/global.module.css";
import { useRouter } from 'next/navigation';
// import { DynamicThemeClass } from '@/utils/utilitsFunctions';

export default function CommunityHubHeader({ titleText, seeAllLink, headerType = "type1",themeType="theme1" }) {
  const router = useRouter();
  const dynamicClass=(themeType)=>{
    if(themeType=="theme1"){
      return "text-blue-gradient";
    }else if(themeType=="theme2"){
      return "text-pink-gradient";
    }
  }
  return (
    <div className={`${styles.communityHubSectionPart} ${headerType == "type2" ? styles.headerType2 : ""}`}>
      <h2 className={dynamicClass(themeType)}>{titleText}</h2>
      <button onClick={seeAllLink ? () => router.push(seeAllLink) : null}>
        See All
      </button>
    </div>
  )
}
