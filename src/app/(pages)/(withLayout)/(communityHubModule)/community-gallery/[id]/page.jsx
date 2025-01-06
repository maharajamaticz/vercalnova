"use client"
import React, { useEffect, useState } from 'react';
import ComponentLayout from '@/Component/global/componentLayout';
import styles from "@/css/communityHub/communityGallery.module.css";
import CommunitySearch from '@/Component/communityHub/communitySearch';
import Images from '@/app/Images';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CommunityGalleryPage() {
  const [imageData] = useState([
    { id: 101, src: Images.galleryImg1, alt: "Image 1" },
    { id: 2, src: Images.galleryImg3, alt: "Image 2" },
    { id: 3, src: Images.galleryImg2, alt: "Image 3" },
    { id: 4, src: Images.galleryImg3, alt: "Image 4" },
    { id: 5, src: Images.galleryImg2, alt: "Image 5" },
    { id: 6, src: Images.galleryImg1, alt: "Image 6" },
    { id: 7, src: Images.galleryImg1, alt: "Image 7" },
    { id: 8, src: Images.galleryImg3, alt: "Image 8" },
    { id: 9, src: Images.galleryImg1, alt: "Image 9" },
    { id: 10, src: Images.galleryImg1, alt: "Image 10" },
    { id: 11, src: Images.galleryImg1, alt: "Image 11" },
    { id: 12, src: Images.galleryImg3, alt: "Image 12" },
    { id: 13, src: Images.galleryImg1, alt: "Image 13" },
    { id: 14, src: Images.galleryImg3, alt: "Image 14" },
    { id: 15, src: Images.galleryImg1, alt: "Image 15" },
  ]);

  return (
    <ComponentLayout dynamicClass={"communityHubLayout"}>
      <div className={styles.communityGalleryPage}>
        <div className={styles.headerPart}>
          <h2 className='text-blue-gradient'>Community Social</h2>
        </div>
        <div className='mt-4'>
          <CommunitySearch />
        </div>
        <div className={styles.gallery}>
          <ImageGallery images={imageData} />
        </div>
      </div>
    </ComponentLayout>
  );
}

const ImageGallery = ({ images }) => {
  const [items, setItems] = useState([]);
  const router = useRouter();
  const weightedRand = (spec) => {
    let sum = 0;
    const r = Math.random();
    for (let i in spec) {
      sum += spec[i];
      if (r <= sum) return i;
    }
  };

  useEffect(() => {
    const randomizedImages = images.map((image) => {
      const span = parseInt(weightedRand({ 1: 0.7, 2: 0.2, 3: 0.1 }));
      const colorClass = `c-${weightedRand({
        1: 0.2,
        2: 0.2,
        3: 0.2,
        4: 0.2,
        5: 0.2,
      })}`;
      return { ...image, span, colorClass };
    });
    setItems(randomizedImages);
  }, [images]);

  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.card} ${styles[`span-${item.span}`]} ${styles[item.colorClass]}`}
          style={{ backgroundImage: `url(${item.src})` }}
          onClick={() => router.push(`/post/${item.id}`)}
        >
          <Image src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
};
