import React from 'react';
import Images from '@/app/Images';
import styles from '@/css/connect/connect.module.css';
import { Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import ImgComponent from '../global/imgComponent';

function Notifications() {
    const router = useRouter();
    return (
        <>
            <h5 className={`text-white mb-3`}>Notifications</h5>
            <Row className="justify-content-center">
                <Col sm={6}>
                    <div
                        onClick={() => router.push('/chat-list')}
                        className={`${styles.notification} ${styles.not1} mt-3`}
                    >
                        <div className={`text-center`}>
                            <div className={`position-relative ${styles.notfi_img}`}>
                                <h5 className={`${styles.notfi_icon}`}>15</h5>
                                <ImgComponent src={Images.dms}
                                    className={`${styles.notfi_img}`}
                                    alt="connectimg" />
                            </div>
                            <h5 className={`fw-600`}>DMS</h5>
                        </div>
                    </div>
                </Col>
                <Col sm={6}>
                    <div
                        onClick={() => router.push('/saved')}
                        className={`${styles.notification} ${styles.not2} mt-3`}
                    >
                        <h5 className={`fw-600`}>Saved</h5>
                    </div>
                    <div
                        onClick={() => router.push('/liked')}
                        className={`${styles.notification} ${styles.not2} mt-3`}
                    >
                        <h5 className={`fw-600`}>Likes</h5>
                    </div>
                </Col>
                <Col sm={6}>
                    <div
                        onClick={() => router.push('/notifications', { query: { type: 'communityChatNotification' } })}
                        className={`${styles.notification} ${styles.not1} mt-3`}
                    >
                        <div className={`text-center`}>
                            <div className={`position-relative ${styles.notfi_img}`}>
                                <h5 className={`${styles.notfi_icon}`}>15</h5>
                                <ImgComponent   src={Images.chat}
                                    className={`${styles.notfi_img}`}
                                    alt="connectimg" />
                            </div>
                            <h5 className={`fw-600`}>Community Chat</h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Notifications;
