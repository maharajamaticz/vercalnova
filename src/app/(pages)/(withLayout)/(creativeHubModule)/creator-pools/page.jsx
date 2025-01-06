"use client"
import React from 'react'
import ComponentLayout from '@/Component/global/componentLayout'
import styles from "@/css/creatorHub/commonStyle.module.css";
import CommunitySearch from '@/Component/communityHub/communitySearch';
import Images from '@/app/Images';
import DiscoverCard from '@/Component/global/discoverCard';
import { InputComponent, SelectInputComponent } from '@/Component/form/inputfield';
import { selectOption } from '@/json/staticData';
const sectionsData = [
  {
    title: "Discover",
    items: [
      {
        imgSrc: Images.discoverOrg1,
        name: "The Nova App",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veritatis praesentium fugiat sapiente, aliquam illo velit explicabo perspiciatis placeat consectetur laudantium fugit, ea labore corrupti! Natus, aspernatur a? Obcaecati, libero?",
      },
    ],
  },
  {
    title: "Suggested",
    items: [
      {
        imgSrc: Images.discoverOrg1,
        name: "DAO’s CC Capital",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veritatis praesentium fugiat sapiente, aliquam illo velit explicabo perspiciatis placeat consectetur laudantium fugit, ea labore corrupti! Natus, aspernatur a? Obcaecati, libero?",
      },
    
    ],
  },
];
export default function CreatorPools() {
  return (
    <ComponentLayout dynamicClass={"communityHubLayout"} backBtn>
      <div className={styles.discoverCreatorPage}>
        <div className={styles.headerPart}>
          <h2 className='text-pink-gradient'>Access Creator Pools</h2>
        </div>
        <CommunitySearch themeType='theme2' filterIcon={false} plusIcon={true} plusIconUrl={"creator-profile"} />
        <div className={styles.discoverOrgSections}>
          {sectionsData.map((section, index) => (
            <div className='my-4' key={index}>
              <div className={styles.discoverOrgTitlePart}>
                <h2>{section.title}</h2>
              </div>
              <div className={styles.discoverOrgListWrapper}>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <DiscoverCard item={item} viewBtn={false} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div>
        <div className={styles.headerPart}>
          <h2 className='text-pink-gradient'>Create Partnership Form</h2>
        </div>
          <div>
            <SelectInputComponent options={selectOption} labelText='Topic' />
            <InputComponent labelText='Media' />
            <InputComponent labelText='keywords' />
          </div>
          <div className={`${styles.btnWrapper} w-100 text-center`}>
            <button className='pinkBtn py-3 w-50 m-auto'>Search</button>
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}
