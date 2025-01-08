import React from 'react'
import styles from "@/css/global.module.css";
import Images from '@/app/Images';
import ImgComponent from './imgComponent';

export default function ChatInput({ camaraBtn = true, micBtn = true, getInputValue, stickerBtn = true, fileBtn = true, sendBtn, onFocusHandle, onBlurHandle }) {

    const inputFocus = () => {
        onFocusHandle(true)
    }
    const inputBlur = () => {
        onBlurHandle(true)
    }
    return (
        <div className={styles.chatInputContainer}>
            <div className={styles.leftPart}>
                {
                    camaraBtn &&
                    <button>
                        <ImgComponent src={Images.camaraBlackIcon} alt="camera" />
                    </button>
                }
            </div>
            <div className={styles.inputWrapper}>
                <input type="search" onFocus={inputFocus} onBlur={inputBlur} placeholder='message...' />
            </div>
            <div className={styles.rightPart}>
                {
                    sendBtn &&
                    <button>
                        <ImgComponent src={Images.dmsIcon} alt="sent" />
                    </button>
                }
                {
                    micBtn &&
                    <button>
                        <ImgComponent src={Images.micIcon} alt="mic" />
                    </button>
                }
                {
                    fileBtn &&
                    <button>
                        <input type="file" id='imageUpload' />
                        <label htmlFor='imageUpload'>
                            <ImgComponent src={Images.galleryIcon} alt="gallery" />
                        </label>
                    </button>
                }
                {
                    stickerBtn &&
                    <button>
                        <ImgComponent src={Images.stickerIcon} alt="sticker" />
                    </button>
                }
            </div>
        </div>
    )
}
