import React from 'react';
import Link from 'next/link';
import Images from '@/app/Images';
import styles from "@/css/sidebar.module.css";
import ImgComponent from '@/Component/global/imgComponent';
import { usePathname } from 'next/navigation';

function Sidebars() {
    const router = usePathname(); 
    const navLinks = [
        { imageSrc: Images.profileicon, labelText: 'Profile', navLink: '/profile' },
        { imageSrc: Images.search, labelText: 'Search', navLink: '/search' },
        { imageSrc: Images.connect, labelText: 'Connect', navLink: '/connect' },
        { imageSrc: Images.market, labelText: 'Market', navLink: '/market' },
        { imageSrc: Images.creativehub, labelText: 'Creator Hub', navLink: '/creator-hub' },
        { imageSrc: Images.communityhub, labelText: 'Community Hub', navLink: '/community-hub' },
        // { imageSrc: Images.maps, labelText: 'Maps', navLink: '/maps' },
        { imageSrc: Images.createicon, labelText: 'Create', navLink: '/create' },
        { imageSrc: Images.dmsIcon, labelText: 'DMS', navLink: '/chat-list' },
    ];

    return (
        <div className={`${styles.sidebar}`}>
            <div className={`text-center`}>
                <ImgComponent src={Images.logo} className={`${styles.sidelogo} mt-3`} alt='logo' />
            </div>
            <div className={`${styles.sidebartab}`}>
                {navLinks.map((link, index) => {
                    const isActive = router === link.navLink; // Check if the current route matches
                    console.log('isActive',isActive)
                    return (
                        <Link 
                            key={index} 
                            href={link.navLink} 
                            className={`${styles.sidebarLink} ${isActive ? styles.activeLink : ''}`} // Add active class conditionally
                        >
                            <ImgComponent src={link.imageSrc} alt={link.labelText.toLowerCase()} /> 
                            <span>{link.labelText}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebars;
