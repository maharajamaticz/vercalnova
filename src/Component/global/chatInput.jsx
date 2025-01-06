import React from 'react'
import styles from "@/css/global.module.css";
import Images from '@/app/Images';
import ImgComponent from './imgComponent';
export default function ChatInput() {
    return (
        <div className={styles.chatInputContainer}>
            <div className={styles.leftPart}>
                <button>
                    <ImgComponent src={Images.camaraBlackIcon} alt="camera" />
                </button>
            </div>
            <div className={styles.inputWrapper}>
                <input type="search" placeholder='message...' />
            </div>
            <div className={styles.rightPart}>
                <button>
                    <ImgComponent src={Images.micIcon} alt="mic" />
                </button>
                <button>
                    <input type="file" id='imageUpload' />
                    <label htmlFor='imageUpload'>
                        <ImgComponent src={Images.galleryIcon} alt="gallery" />
                    </label>
                </button>
                <button>
                    <ImgComponent src={Images.stickerIcon} alt="sticker" />
                </button>
            </div>
        </div>
    )
}
