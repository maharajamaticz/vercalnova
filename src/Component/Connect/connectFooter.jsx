import React from 'react';
import styles from "../../css/connect/connect.module.css";
import Link from 'next/link';

export default function ConnectFooter() {
    const footerLinks = [
        { labelText: 'Profile', navLink: '/profile' },
        { labelText: 'Search', navLink: '/search' },
        { labelText: 'Connect', navLink: '/connect' },
        { labelText: 'Market', navLink: '/market' },
        { labelText: 'Creative Hub', navLink: '/creative-hub' },
        { labelText: 'Community Hub', navLink: '/community-hub' },
        { labelText: 'Maps', navLink: '/maps' },
        { labelText: 'Create', navLink: '/create' },
    ];

    return (
        <div className={styles.connectFooter}>
            <ul>
                {footerLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.navLink}>{link.labelText}</Link>
                    </li>
                ))}
                <li className={styles.copyRightText}>
                    2024 Nova Super App
                </li>
            </ul>
        </div>
    );
}
