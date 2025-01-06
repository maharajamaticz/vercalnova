import styles from "@/css/global.module.css";
import Images from "@/app/Images";
import AudioPlayer from "./audioPlayer";
import ImgComponent from "./imgComponent";
export const ChatGroundArea = ({ audioOverlayColor, messages }) => {
    const bgColor = (audioOverlayColor) => {
        switch (audioOverlayColor) {
            case "theme1":
                return { overLayerSendBg: "#02627190", overLayerReceviedBg: "#56565690", sendCardBg: "#026271", receviedCardBg: "#565656" }

            case "theme2":
                return { overLayerSendBg: "#23232380", overLayerReceviedBg: "#23232390", sendCardBg: "#171717", receviedCardBg: "#232323" }
            default:
        }
    }
    return <div className={`${styles.chatGroundArea} transparentScrollbar`}>
        <div className={styles.timePart}>
            <h2>Today</h2>
        </div>
        {messages.map((message, index) => (
            <div
                key={index}
                className={message.type === 'sent' ? styles.senderMsg : styles.receivedMsg}
            >
                <MessageContent
                    message={message}
                    overLayerSendBg={bgColor(audioOverlayColor).overLayerSendBg}
                    overLayerReceviedBg={bgColor(audioOverlayColor).overLayerReceviedBg}
                    sendCardBg={bgColor(audioOverlayColor).sendCardBg}
                    receviedCardBg={bgColor(audioOverlayColor).receviedCardBg} />
            </div>
        ))}
    </div>
}

const MessageContent = ({ message, overLayerSendBg, overLayerReceviedBg,sendCardBg,receviedCardBg }) => {
    const contentElementRender = (message, bgColor) => {
        switch (message.contentType) {
            case "text":
                return <p>{message.content}</p>
            case "audio":
                return <AudioPlayer audioSrc={message.contentSrc} bgColor={bgColor} />
            default:
                return null;
        }
    }
    return <>
        {message.type === 'sent' ? (
            <>
                <div className={styles.contentPart} style={{background:sendCardBg}}>
                    {contentElementRender(message, overLayerSendBg)}
                </div>
                <div className={styles.othersPart}>
                    <p className={styles.timeText}>{message.timestamp}</p>
                </div>
            </>
        ) : (
            <>
                <div className={styles.profileImg}>
                    <ImgComponent src={Images.chatMsgProfile} alt="profile" />
                </div>
                <div>
                    <h2 className={styles.profileName}>{message.sender}</h2>
                    <div className={styles.contentPart} style={{background:receviedCardBg}}>
                        {contentElementRender(message, overLayerReceviedBg)}
                    </div>
                    <div className={styles.othersPart}>
                        <div className={styles.timeText}>{message.timestamp}</div>
                    </div>
                </div>
            </>
        )}
    </>
}