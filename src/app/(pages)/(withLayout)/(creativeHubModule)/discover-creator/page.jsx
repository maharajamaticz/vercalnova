import React from 'react';
import styles from "@/css/creatorHub/commonStyle.module.css";
import ComponentLayout from '@/Component/global/componentLayout';
import CommunitySearch from '@/Component/communityHub/communitySearch';
import CategoryList from '@/Component/saved/category';
export default function DiscoverCreator() {
    return (
        <ComponentLayout dynamicClass={"communityHubLayout"} backBtn>
            <div className={styles.discoverCreatorPage}>
                <div className={styles.headerPart}>
                    <h2 className='text-pink-gradient'>Discover Creators</h2>
                </div>
                <div className={styles.searchPart}>
                    <CommunitySearch themeType={"theme2"} filterIcon={true} />
                </div>
                <div>
                    <CategoryList slidesPerView={5} themeType='theme2' cardView={6}/>
                </div>
            </div>
        </ComponentLayout>
    )
}
