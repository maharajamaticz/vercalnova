"use client"
import ComponentLayout from '@/Component/global/componentLayout'
import React from 'react'
import styles from "@/css/creatorHub/commonStyle.module.css";
import { InputComponent, SelectInputComponent } from '@/Component/form/inputfield';
import { selectOption } from '@/json/staticData';
import ImgComponent from '@/Component/global/imgComponent';
import Images from '@/app/Images';
import { useRouter } from 'next/navigation';
export default function FindPartnership() {
  const router=useRouter();
  return (
    <ComponentLayout dynamicClass={"communityHubLayout"} backBtn>
      <div className={styles.findPartnershipPage}>
        <div className={styles.pageTitle}>
          <h2 className='text-pink-gradient'>Find Creator Partnership</h2>
        </div>
        <div>
          <SelectInputComponent options={selectOption} labelText='Media Type' />
          <SelectInputComponent options={selectOption} labelText='Topic' />
          <SelectInputComponent options={selectOption} labelText='Followers' />
          <InputComponent labelText='Payment Rate' />
        </div>
        <div className={styles.btnWrapper}>
          <button className='blackBtn'>reset</button>
          <button className='pinkBtn'>search</button>
        </div>

        <button onClick={()=>router.push("/create-partnership")} className={`${styles.addCreatorBtn} pinkBtn`}>
          <ImgComponent src={Images.plusIcon} alt={"plus"} />
        </button>
      </div>
    </ComponentLayout>
  )
}
