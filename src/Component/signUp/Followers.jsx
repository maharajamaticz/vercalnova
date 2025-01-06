import React, { useState } from 'react';
import styles from "../../css/signup.module.css";
import Images from '@/app/Images';
import ImgComponent from '../global/imgComponent';
import { suggestionUserList } from '@/json/staticData';

function Followers() {

  const [followlist, setFollowlist] = useState(suggestionUserList);

  const [searchTerm, setSearchTerm] = useState("");

  const followerHandle = (id) => {
    setFollowlist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, followed: !item.followed } : item
      )
    );
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredList = followlist.filter((follower) =>
    follower.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <input
        className={`inputs searchinput`}
        placeholder='Search Suggested to follow'
        type="search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className={`${styles.follow_hset}`}>
        {filteredList.length > 0 ? (
          filteredList.map((e, i) => (
            <div key={i} className={`d-flex align-items-center justify-content-between mt-3`}>
              <div className={`d-flex align-items-center gap-2`}>
                <ImgComponent src={e.img} className={`${styles.followericon}`} alt='followericon' />
                <p className='mb-0 text-white'>{e.name}</p>
              </div>
              <button
                onClick={() => followerHandle(e.id)}
                className={`${styles.plus} ${styles.followbtn} py-1 px-3`}
              >
                {e.followed ? "Following" : "Follow"}
              </button>
            </div>
          ))
        ) : (
          <p className='text-white text-center mt-3'>No results found !</p>
        )}
      </div>
    </div>
  );
}

export default Followers;
