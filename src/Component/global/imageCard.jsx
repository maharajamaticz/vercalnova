import React from 'react'
import styles from "../../css/global.module.css";
import ImgComponent from './imgComponent';
export default function ImageCard({imgSrc,imgCapture,clickHandle}) {
  return (
    <div className={styles.imageCardTemplate} onClick={clickHandle||null}>
        <ImgComponent src={imgSrc} alt="image" />
        <p>{imgCapture}</p>
    </div>
  )
}
