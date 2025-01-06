"use client"
import React from 'react';
import ComponentLayout from '@/Component/global/componentLayout';
import CommunitySearch from '@/Component/communityHub/communitySearch';
import styles from "@/css/creatorHub/commonStyle.module.css";
import Images from '@/app/Images';
import DiscoverCard from '@/Component/global/discoverCard';

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
            {
                imgSrc: Images.discoverOrg1,
                name: "DAO’s CC Capital",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veritatis praesentium fugiat sapiente, aliquam illo velit explicabo perspiciatis placeat consectetur laudantium fugit, ea labore corrupti! Natus, aspernatur a? Obcaecati, libero?",
            },
        ],
    },
];

export default function DiscoverOrganizationPage() {
   
    return (
        <ComponentLayout dynamicClass={"communityHubLayout"} backBtn>
            <div className={styles.discoverCreatorPage}>
                <div className={styles.headerPart}>
                    <h2 className='text-pink-gradient'>Discover Organization</h2>
                </div>
                <div className={styles.searchPart}>
                    <CommunitySearch themeType={"theme2"} filterIcon={true} />
                </div>
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
                                            <DiscoverCard item={item}/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ComponentLayout>
    );
}
