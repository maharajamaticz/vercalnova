import styles from "@/css/creatorHub/commonStyle.module.css";
import ImgComponent from "./imgComponent";
import ReadMore from "./readmore";
import { useRouter } from "next/navigation";
export default function DiscoverCard({ item, viewBtn=true }) {
    const router = useRouter();
    return (
        <div className={styles.discoverOrgCard}>
            <div className={styles.imgPart}>
                <ImgComponent src={item.imgSrc} alt="logo" />
            </div>
            <div className={styles.detailsPart}>
                <h2>{item.name}</h2>
                <ReadMore wordLimit={20} text={item.description} />
                {
                    viewBtn &&
                    <button className='pinkBtn'
                        onClick={() => router.push("/organization-profile")}>
                        View Profile</button>
                }
            </div>
        </div>
    )
}
