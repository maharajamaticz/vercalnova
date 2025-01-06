"use client"
import React, { useState } from 'react';
import styles from "@/css/connect/postPage.module.css";
import Images from '@/app/Images';
import ReadMore from './readmore';
import ImgComponent from './imgComponent';
const colorList = ["#FF6F31", "#5988E2", "#FC66C5", "#F0DC61", "#7DE259"];
const randomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorList.length);
  return colorList[randomIndex];
}

export default function PostCardTemplate({ item }) {
  const [commentPartOpen, setCommentPartOpen] = useState(false);
  return (
    <div className={styles.postCardTemplate}>
      <div className={styles.imgPart}>
        <ImgComponent src={item.imgSrc} alt="liked" />
      </div>
      <div className={styles.optionPart}>
        <div className={styles.leftPart}>
          <ul>
            <li>
              <button>
                <ImgComponent src={Images.likeIcon} alt="like" />
                <span>{item.likeCount}</span>
              </button>
            </li>
            <li>
              <button onClick={() => setCommentPartOpen(!commentPartOpen)}>
                <ImgComponent src={Images.commentIcon} alt="comment" />
                <span>{item.commentCount}</span>
              </button>
            </li>
            <li>
              <button>
                <ImgComponent src={Images.shareIcon} alt="share" />
                <span>{item.shareCount}</span>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.rightPart}>
          <input type="checkbox" id={`savePost-${item.postId}`} />
          <label htmlFor={`savePost-${item.postId}`}>
            <div className={styles.unSavedIcon} >
              <ImgComponent src={Images.unSavedIcon} alt="unSaved" />
            </div>
            <div className={styles.savedIcon}>
              <ImgComponent src={Images.savedIcon} alt="unSaved" />
            </div>
          </label>
        </div>
      </div>
      <div className={styles.detailPart}>
        <h2>{item.tagLine}</h2>
        <button>
          <ImgComponent src={Images.timeIcon} alt="time" />
          <span>{item.time}</span>
        </button>
      </div>
      {
        commentPartOpen && <div className={styles.commentContainer}>
          <div className={styles.headPart}>
            <h2>Comments</h2>
          </div>
          <div className={`${styles.bodyPart} transparentScrollbar`}>
            <CommentSection commentList={item.commentList} />
          </div>
          <div className={styles.inputPart}>
            <button className={styles.camaraBtn}>
              <ImgComponent src={Images.camaraIcon} alt="camara" />
            </button>

            <div className={styles.inputWrapper}>
              <button className={styles.emojiBtn}>
                <ImgComponent src={Images.emojiIcon} alt="emoji" />
              </button>
              <input type="search" placeholder='comment as username...' />
              <button className={styles.postBtn}>Post</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

const CommentSection = ({ commentList, nestedReply }) => {
  const [postCommentList, setPostCommentList] = useState(commentList);
  const [visibleReplies, setVisibleReplies] = useState({});

  const toggleReplies = (index) => {
    setVisibleReplies((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className={`${styles.commentTemplate} ${nestedReply ? styles.nestedReply : ""}`}>
      {postCommentList.map((item, i) => (
        <div className={styles.commentCard} key={i}>
          <div className={styles.userImgPart}>
            {/* <img src={item.userImg} alt="profile" /> */}
            <ImgComponent src={item.userImg} alt="profile" />
          </div>
          <div className={`${styles.bodyPart} transparentScrollbar`}>
            <div className={styles.msgContent}>
              <h2 style={{ color: randomColor() }}>{item.username}</h2>
              <ReadMore text={item.text} wordLimit={14} />
            </div>
            <div className={styles.commentOption}>
              <button>16m</button>
              <button>like</button>
              <button>reply</button>
              <button>
                <span>
                  2
                </span>
                {/* <img src={Images.commentLikeIcon} alt="liked" /> */}
                <ImgComponent src={Images.commentLikeIcon} alt="liked" />
              </button>
            </div>
            {item?.replies && item?.replies?.length > 0 && (
              <div className={styles.moreReply}>
                <button onClick={() => toggleReplies(i)}>
                  {visibleReplies[i] ? 'Hide Replies' : `${item.replies.length} More Comments`}
                </button>
              </div>
            )}
            {visibleReplies[i] && item.replies && (
              <CommentSection commentList={item.replies} nestedReply={item?.replies?.length > 1} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};


