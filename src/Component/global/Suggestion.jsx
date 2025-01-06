import React, { useState } from 'react';
import 'swiper/css';
import styles from "@/css/signup.module.css";
import ImgComponent from './imgComponent';
import { suggestionUserList } from '@/json/staticData';

function Suggestion() {
  const [followlist, setFollowlist] = useState(suggestionUserList);
  const followerHandle = (id) => {
    setFollowlist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, followed: !item.followed } : item
      )
    );
  };
  return (
    <div className={`suggestionPart ${styles.suggestionPart}`}>
      <h5 className={`text-white mb-3 pageTitle`}>Suggestions</h5>
      <div className={`${styles.follow_hset}`}>
        {followlist.map((e) => (
          <div
            key={e.id}
            className={`d-flex align-items-center justify-content-between mt-3`}
          >
            <div className={`d-flex align-items-center gap-2`}>
              <ImgComponent src={e.img} className={`${styles.followericon}`} alt='followericon' />
              <p className={`mb-0 text-white ${styles.userName}`}>{e.name}</p>
            </div>
            <button onClick={() => followerHandle(e.id)} className={`${styles.plus} ${styles.followbtn} py-1 px-3`}>
            {e.followed ? "Pending" : "invite"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestion;