"use client"
import styles from "@/css/global.module.css";
import { useEffect, useRef, useState } from "react";
import ImgComponent from "../global/imgComponent";
import Images from "@/app/Images";
const dynamicClass = (themeType) => {
    if (themeType == "theme1") {
        return "text-blue-gradient";
    } else if (themeType == "theme2") {
        return "text-pink-gradient";
    }
}

export const FilterModelContent = ({ titleText, filterModelToggle, setFilterModelToggle, filterButtonRef, filterModelListArr, themeType = "theme1" }) => {

    const [filterPosition, setFilterPosition] = useState({});
    const filterModelRef = useRef(null);
    const [filterModelList] = useState([...filterModelListArr]);
    const [modelWidth, setModelWidth] = useState(120);

    useEffect(() => {
        const rect = filterButtonRef.current.getBoundingClientRect();
        setFilterPosition({ x: rect.x, y: rect.y, width: rect.width });
    }, [filterModelToggle]);

    useEffect(() => {
        if (filterModelToggle) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [filterModelToggle]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                filterModelRef.current &&
                !filterModelRef.current.contains(event.target) &&
                !filterButtonRef.current.contains(event.target)
            ) {
                setFilterModelToggle(false);
            }
        };

        setModelWidth(filterModelRef?.current?.offsetWidth)
        if (filterModelToggle) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [filterModelToggle]);

    if (filterModelToggle) {
        return (
            <div
                ref={filterModelRef}
                className={styles.filterModel}
                style={{ top: `${filterPosition.y + 60}px`, left: `${filterPosition.x - modelWidth + filterPosition.width}px` }}
            >
                <div className={styles.filterTitle}>
                    <h2 className={dynamicClass(themeType)}>{titleText}</h2>
                </div>
                <div className={styles.filterList}>
                    <ul>
                        {filterModelList.map((item, i) => (
                            <li key={i}>
                                <span>{item.keyName}</span>
                                <ImgComponent src={Images.rightArrowMarkIcon} alt="arrow" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    } else {
        return null
    }
}