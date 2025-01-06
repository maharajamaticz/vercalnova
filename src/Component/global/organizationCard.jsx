import styles from "../../css/global.module.css";
import ImgComponent from "./imgComponent";
export const OrganizationCard = ({ ImgSrc, content }) => {
    return <div className={styles.organizationCard}>
        <div className={styles.leftPart}>
            <ImgComponent src={ImgSrc} alt="image" />
        </div>
        <div className={styles.rightPart}>
            <p>{content}</p>
        </div>
    </div>
}