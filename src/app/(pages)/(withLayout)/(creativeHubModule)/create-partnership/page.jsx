import React from 'react'
import ComponentLayout from '@/Component/global/componentLayout'
import styles from "@/css/creatorHub/commonStyle.module.css";
import { InputComponent, SelectInputComponent, TextAreaInputComponent } from '@/Component/form/inputfield';
import { selectOption } from '@/json/staticData';
export default function CreatePartnership() {
  return (
    <ComponentLayout dynamicClass={"communityHubLayout"} backBtn>
      <div className={styles.findPartnershipPage}>
        <div className={styles.pageTitle}>
          <h2 className='text-pink-gradient'>Create Partnership Form</h2>
        </div>
        <div>
          <SelectInputComponent options={selectOption} labelText='Media Type' />
          <InputComponent labelText='Total Expertise' />
          <InputComponent labelText='Topic Intersts' />
          <InputComponent labelText='Followers' />
          <TextAreaInputComponent labelText='Description of Your Content'/>
          <InputComponent labelText='Request Rate' />
          <InputComponent labelText='Other Request' />
        </div>
        <div className={styles.btnWrapper}>
          <button className='blackBtn'>reset</button>
          <button className='pinkBtn'>Create</button>
        </div>
      </div>
    </ComponentLayout>
  )
}
