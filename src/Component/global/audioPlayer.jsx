import { useState, useRef, useEffect } from "react";
import styles from "@/css/global.module.css";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { MdOutlinePauseCircleFilled } from "react-icons/md";

const AudioPlayer = ({ audioSrc, bgColor }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress(audio.currentTime);
    };

    const setAudioDuration = () => {
      setDuration(audio.duration);
    };

    const handleAudioEnd = () => {
      setIsPlaying(false); // Ensure the icon resets to "Play" when audio ends
      setProgress(0);
      audio.currentTime = 0;
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setAudioDuration);
    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    const allAudioElements = document.querySelectorAll(".audioPlayerContainer");
    allAudioElements.forEach((audioElement) => {
      const audioBtn=audioElement.querySelector(".audioBtn");
      const audioTag=audioElement.querySelector("audio");
      if (audioTag !== audio && !audioTag.paused) {
        audioTag.pause();
        audioTag.currentTime = 0;
        audioBtn.click();
      }
    });

    // Toggle the current audio
    if (isPlaying) {
      audio.pause();

    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (event) => {
    const audio = audioRef.current;
    const newTime = event.target.value;
    audio.currentTime = newTime;
    setProgress(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const progressPercentage = duration ? (progress / duration) * 100 : 0;

  return (
    <div className={`${styles.audioPlayerContainer} audioPlayerContainer`}>
      <button onClick={togglePlayPause} className={`${styles.playPauseButton} audioBtn`}>
        {!isPlaying ? (
          <MdOutlinePlayCircleFilled />
        ) : (
          <MdOutlinePauseCircleFilled />
        )}
      </button>
      <div className={styles.inputRange}>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={progress}
          onChange={handleProgressChange}
          className={styles.progressBar}
        />
        <span
          className={styles.overlay}
          style={{ width: `${progressPercentage}%`, backgroundColor: bgColor }}
        ></span>
        <div className={`${styles.svgIcon} ${isPlaying&&styles.isActive}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="137" height="18" viewBox="0 0 137 18" fill="none">
            <path d="M0.857666 7.83092C0.857666 7.21884 1.35385 6.72266 1.96593 6.72266C2.57801 6.72266 3.0742 7.21884 3.0742 7.83092V11.4334C3.0742 12.0455 2.57801 12.5417 1.96593 12.5417C1.35385 12.5417 0.857666 12.0455 0.857666 11.4334V7.83092Z" fill="white" />
            <path d="M7.50726 4.5985C7.50726 3.98642 8.00345 3.49023 8.61553 3.49023C9.22761 3.49023 9.72379 3.98642 9.72379 4.5985V15.3132C9.72379 15.9252 9.22761 16.4214 8.61553 16.4214C8.00345 16.4214 7.50726 15.9252 7.50726 15.3132V4.5985Z" fill="white" />
            <path d="M14.1568 7.18639C14.1568 6.57431 14.653 6.07812 15.2651 6.07812C15.8772 6.07812 16.3734 6.57431 16.3734 7.18639V12.7286C16.3734 13.3407 15.8772 13.8368 15.2651 13.8368C14.653 13.8368 14.1568 13.3407 14.1568 12.7286V7.18639Z" fill="white" />
            <path d="M20.8064 3.95006C20.8064 3.33798 21.3026 2.8418 21.9147 2.8418C22.5268 2.8418 23.023 3.33798 23.023 3.95006V15.9578C23.023 16.5699 22.5268 17.0661 21.9147 17.0661C21.3026 17.0661 20.8064 16.5699 20.8064 15.9578V3.95006Z" fill="white" />
            <path d="M27.456 2.65709C27.456 2.04501 27.9522 1.54883 28.5643 1.54883C29.1764 1.54883 29.6726 2.04502 29.6726 2.65709V16.6046C29.6726 17.2166 29.1764 17.7128 28.5643 17.7128C27.9522 17.7128 27.456 17.2166 27.456 16.6046V2.65709Z" fill="white" />
            <path d="M34.1056 5.24303C34.1056 4.63095 34.6018 4.13477 35.2139 4.13477C35.826 4.13477 36.3222 4.63095 36.3222 5.24303V14.018C36.3222 14.6301 35.826 15.1263 35.2139 15.1263C34.6018 15.1263 34.1056 14.6301 34.1056 14.018V5.24303Z" fill="white" />
            <path d="M40.7552 4.5985C40.7552 3.98642 41.2514 3.49023 41.8635 3.49023C42.4755 3.49023 42.9717 3.98642 42.9717 4.5985V14.6666C42.9717 15.2787 42.4755 15.7749 41.8635 15.7749C41.2514 15.7749 40.7552 15.2787 40.7552 14.6666V4.5985Z" fill="white" />
            <path d="M47.4048 3.30358C47.4048 2.6915 47.901 2.19531 48.513 2.19531C49.1251 2.19531 49.6213 2.6915 49.6213 3.30358V15.9579C49.6213 16.57 49.1251 17.0662 48.513 17.0662C47.901 17.0662 47.4048 16.57 47.4048 15.9579V3.30358Z" fill="white" />
            <path d="M54.0544 5.24303C54.0544 4.63095 54.5506 4.13477 55.1626 4.13477C55.7747 4.13477 56.2709 4.63095 56.2709 5.24303V14.018C56.2709 14.6301 55.7747 15.1263 55.1626 15.1263C54.5506 15.1263 54.0544 14.6301 54.0544 14.018V5.24303Z" fill="white" />
            <path d="M60.7039 2.65709C60.7039 2.04501 61.2001 1.54883 61.8122 1.54883C62.4243 1.54883 62.9205 2.04502 62.9205 2.65709V16.6046C62.9205 17.2166 62.4243 17.7128 61.8122 17.7128C61.2001 17.7128 60.7039 17.2166 60.7039 16.6046V2.65709Z" fill="white" />
            <path d="M67.3535 7.83092C67.3535 7.21884 67.8497 6.72266 68.4618 6.72266C69.0739 6.72266 69.5701 7.21884 69.5701 7.83092V11.4334C69.5701 12.0455 69.0739 12.5417 68.4618 12.5417C67.8497 12.5417 67.3535 12.0455 67.3535 11.4334V7.83092Z" fill="white" />
            <path d="M74.0031 6.536C74.0031 5.92392 74.4993 5.42773 75.1114 5.42773C75.7235 5.42773 76.2197 5.92392 76.2197 6.536V12.7247C76.2197 13.3368 75.7235 13.833 75.1114 13.833C74.4993 13.833 74.0031 13.3368 74.0031 12.7247V6.536Z" fill="white" />
            <path d="M80.6527 7.82897C80.6527 7.21689 81.1489 6.7207 81.761 6.7207C82.3731 6.7207 82.8693 7.21689 82.8693 7.82897V11.4315C82.8693 12.0436 82.3731 12.5397 81.761 12.5397C81.1489 12.5397 80.6527 12.0436 80.6527 11.4315V7.82897Z" fill="#F8FFFE" />
            <path d="M87.3023 6.53991C87.3023 5.92783 87.7985 5.43164 88.4106 5.43164C89.0226 5.43164 89.5188 5.92783 89.5188 6.53991V12.7286C89.5188 13.3407 89.0226 13.8369 88.4106 13.8369C87.7985 13.8369 87.3023 13.3407 87.3023 12.7286V6.53991Z" fill="#F8FFFE" />
            <path d="M93.9519 3.30358C93.9519 2.6915 94.4481 2.19531 95.0601 2.19531C95.6722 2.19531 96.1684 2.6915 96.1684 3.30358V15.9579C96.1684 16.57 95.6722 17.0662 95.0601 17.0662C94.4481 17.0662 93.9519 16.57 93.9519 15.9579V3.30358Z" fill="#F8FFFE" />
            <path d="M100.601 5.24303C100.601 4.63095 101.098 4.13477 101.71 4.13477C102.322 4.13477 102.818 4.63095 102.818 5.24303V14.018C102.818 14.6301 102.322 15.1263 101.71 15.1263C101.098 15.1263 100.601 14.6301 100.601 14.018V5.24303Z" fill="#F8FFFE" />
            <path d="M107.251 4.59655C107.251 3.98447 107.747 3.48828 108.359 3.48828C108.971 3.48828 109.468 3.98447 109.468 4.59655V14.6646C109.468 15.2767 108.971 15.7729 108.359 15.7729C107.747 15.7729 107.251 15.2767 107.251 14.6646V4.59655Z" fill="#F8FFFE" />
            <path d="M113.901 2.01061C113.901 1.39853 114.397 0.902344 115.009 0.902344C115.621 0.902344 116.117 1.39853 116.117 2.01061V16.6046C116.117 17.2167 115.621 17.7129 115.009 17.7129C114.397 17.7129 113.901 17.2167 113.901 16.6046V2.01061Z" fill="#F8FFFE" />
            <path d="M120.55 5.24303C120.55 4.63095 121.046 4.13477 121.659 4.13477C122.271 4.13477 122.767 4.63095 122.767 5.24303V14.018C122.767 14.6301 122.271 15.1263 121.659 15.1263C121.046 15.1263 120.55 14.6301 120.55 14.018V5.24303Z" fill="#F8FFFE" />
            <path d="M127.2 7.82897C127.2 7.21689 127.696 6.7207 128.308 6.7207C128.92 6.7207 129.416 7.21689 129.416 7.82897V11.4315C129.416 12.0436 128.92 12.5397 128.308 12.5397C127.696 12.5397 127.2 12.0436 127.2 11.4315V7.82897Z" fill="#F8FFFE" />
            <path d="M133.849 6.53991C133.849 5.92783 134.346 5.43164 134.958 5.43164C135.57 5.43164 136.066 5.92783 136.066 6.53991V12.7286C136.066 13.3407 135.57 13.8369 134.958 13.8369C134.346 13.8369 133.849 13.3407 133.849 12.7286V6.53991Z" fill="#F8FFFE" />
          </svg>
        </div>
      </div>
      <div className={styles.timeDisplay}>
        {isPlaying ? formatTime(progress) : formatTime(duration)}
      </div>
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
};

export default AudioPlayer;