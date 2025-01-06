import React from 'react';
import ComponentLayout from '@/Component/global/componentLayout';
import styles from "@/css/connect/savedPage.module.css";
import CategoryList from '@/Component/saved/category';
export default function LikedPage() {
    return (
        <ComponentLayout>
            <section className={styles.savedAndLikeContainer}>
                  <CategoryList mainTitle={"Likes"} cardView={6} subTitle={"Lorem Ipsum is the text"} />
            </section>
        </ComponentLayout>
    )
}
