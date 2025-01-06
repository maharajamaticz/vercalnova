"use client"
import React, { useState } from 'react';
import styles from '@/css/global.module.css';

const ReadMore = ({ text, wordLimit = 6 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const words = text.split(' ');
    const toggleReadMore = () => {
        setIsExpanded((prev) => !prev);
    };
    return (
        <div className={styles.readMoreComponent}>
            <p>
                {isExpanded || words.length <= wordLimit
                    ? text
                    : `${words.slice(0, wordLimit).join(' ')} `}
                {words.length > wordLimit && (
                    <button
                        className={styles.readMoreBtn}
                        onClick={toggleReadMore}
                    >
                        {isExpanded ? 'Read less' : 'Read more'}
                    </button>
                )}
            </p>
        </div>
    );
};

export default ReadMore;
