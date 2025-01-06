"use client"
import React from 'react'
import styles from "@/css/creatorHub/organizationProfilePage.module.css";
import ImgComponent from '@/Component/global/imgComponent';
import Images from '@/app/Images';
import { useRouter } from 'next/navigation';
export default function ViewProposalsPage() {
    const router=useRouter();
    return (
        <div className={styles.viewProposalsPage}>
            <div className={styles.createProposalPart}>
                <h2>Create Proposals</h2>
                <button>
                    <ImgComponent src={Images.plusWhiteIcon} alt={"plus"} />
                </button>
            </div>
            <div className={styles.governanceProposalsPart}>
                <h2>Governance Proposals</h2>
                <div className={styles.proposalBtcCard}>
                    <div className={styles.headerPart}>
                        <h3>
                            Proposal 5,000 BTC
                        </h3>
                        <p>
                            Timer:
                            <span> 3days</span>
                        </p>
                    </div>
                    <div className={styles.bodyPart}>
                        <CustomProgressBar level={50} bgColor={"#8DA0FF"} />
                        <CustomProgressBar level={30} bgColor={"#FD7CCE"} />
                    </div>
                    <div className={styles.comments}>
                        <p>comments</p>
                    </div>
                </div>
            </div>
            <div className={styles.governanceProposalsPart}>
                <h2>Decided Proposals</h2>
                <div className={styles.proposalBtcCard}>
                    <div className={styles.headerPart}>
                        <h3>
                            Proposal 5,000 BTC
                        </h3>
                        <p>
                            Timer:
                            <span> 3days</span>
                        </p>
                    </div>
                    <div className={styles.bodyPart}>
                        <CustomProgressBar level={100} bgColor={"#8DA0FF"} />
                        <CustomProgressBar level={40} bgColor={"#FD7CCE"} />
                    </div>
                    <div className={styles.comments}>
                        <p>comments</p>
                    </div>
                </div>
            </div>
            <div className={styles.createProposalPart}>
                <h2>DAO Chat</h2>
                <button onClick={()=>router.push("/organization-profile/dao-chat")}>
                    <ImgComponent src={Images.plusWhiteIcon} alt={"plus"} />
                </button>
            </div>
        </div>
    )
}

const CustomProgressBar = ({ level, bgColor }) => {
    return <div className={styles.progressBarOuterBox}>
        <div className={styles.progressBarInnerBox} style={{ width: `${level}%`, backgroundColor: bgColor }}></div>
    </div>
}