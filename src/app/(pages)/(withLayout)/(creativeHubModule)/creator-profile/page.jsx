"use client"
import styles from "@/css/creatorHub/organizationProfilePage.module.css";
import Images from '@/app/Images';
import ImgComponent from '@/Component/global/imgComponent';
import { useRouter } from 'next/navigation';
import QRCode from 'react-qr-code';
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
const data = {
  posts: [
    { imgSrc: Images.postImg1, },
    { imgSrc: Images.postImg2, },
    { imgSrc: Images.postImg3, },
    { imgSrc: Images.postImg4, },
    { imgSrc: Images.postImg5, },
    { imgSrc: Images.postImg6, },
  ],
  pins: [
    { imgSrc: Images.postImg4, },
    { imgSrc: Images.postImg5, },
    { imgSrc: Images.postImg6, },
  ],
  private: [
    { imgSrc: Images.postImg1, },
    { imgSrc: Images.postImg2, },
    { imgSrc: Images.postImg5, },
    { imgSrc: Images.postImg6, },
  ],
};
export default function CreatorProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('posts');

  const renderTabContent = () => {
    return data[activeTab]?.map((item, index) => (
      <Col key={index} xs={4} className={`${styles.columnPart} p-0`}>
        <div className={styles.imgCardPart}>
          <ImgComponent src={item.imgSrc} alt={"post img"}/>
        </div>
      </Col>
    ));
  };
  return (
    <section>
      <div className={styles.seactionWrapper}>
        <h2>bio</h2>
        <p>Welcome to the DAO Here you can try ,learn ,vote ,and enjoy's your
          experience of being a part of your first DAO. Check the is newsfeed,
          there're some helpful posts to ready!</p>
      </div>
      <div className='d-flex justify-content-between flex-wrap'>
        <div className={styles.seactionWrapper}>
          <h2>Links</h2>
          <div className={styles.socialMedia}>
            <button>
              <ImgComponent src={Images.instagramIcon} alt='instagram' />
            </button>
            <button>
              <ImgComponent src={Images.faceBookIcon} alt='faceBook' />
            </button>
            <button>
              <ImgComponent src={Images.networkIcon} alt='network' />
            </button>
          </div>
        </div>
        {/* <div className={styles.seactionWrapper}>
          <h2>Virtual Contact Card</h2>
          <div>
            <QRCode bgColor='#C52367' size={80} value="https://example.com" />
          </div>
        </div> */}
      </div>
      <div className={`d-flex gap-2 justify-content-between flex-wrap ${styles.profileActionBtns}`}>
        <button className='pinkBtn px-5 py-3'>Edit Profile</button>
        <button className='pinkBtn px-5 py-3'>Share Profile</button>
      </div>
      <div className={styles.creatorPostsContainer}>
        <div className={styles.tabBtnWrapper}>
          <button
            className={activeTab === 'posts' ? styles.active : ''}
            onClick={() => setActiveTab('posts')}
          >
            <ImgComponent src={Images.postIcon} alt={"posts"}/>
          </button>
          <button
            className={activeTab === 'pins' ? styles.active : ''}
            onClick={() => setActiveTab('pins')}
          >
            <ImgComponent src={Images.pinIcon} alt={"pins"}/>
          </button>
          <button
            className={activeTab === 'private' ? styles.active : ''}
            onClick={() => setActiveTab('private')}
          >
            <ImgComponent src={Images.privateIcon} alt={"private"} />
          </button>
        </div>
        <div className={styles.tabBodyWrapper}>
          <Row>
            {renderTabContent()}
          </Row>
        </div>
      </div>
    </section>
  )
}

