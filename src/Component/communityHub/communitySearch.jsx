"use client"
import React, { useState, useRef, useEffect } from 'react';
import styles from "@/css/global.module.css";
import { SvgFilterElement, SvgPlusElement, SvgSearchElement } from '../svg/svgComponent';
import { FilterModelContent } from '../model/filterModel';
import { categoryFilterList } from '@/json/staticData';
import { useRouter } from 'next/navigation';

export default function CommunitySearch({ onInputChange, filterIcon = true, themeType = "theme1", plusIcon = false, plusIconUrl }) {
  const router = useRouter();
  const filterButtonRef = useRef(null);
  const [filterModelToggle, setFilterModelToggle] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleFilterClick = () => {
    setFilterModelToggle(!filterModelToggle);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    console.log('event',event.target.value)
    if (onInputChange) {
      onInputChange(event.target.value);
    }
  };

  return (
    <div className={styles.communitySearchConatiner}>
      <div className={styles.inputWrapper}>
        <input type="search" value={searchValue} onInput={handleChange} placeholder="Search" />
        <button>
          <SvgSearchElement themeType={themeType} />
        </button>
      </div>
      {filterIcon && (
        <button
          ref={filterButtonRef}
          onClick={handleFilterClick}
          className={styles.settingBtn}
        >
          <SvgFilterElement themeType={themeType} />
        </button>
      )}
      {plusIcon && (
        <button
          ref={filterButtonRef}
          onClick={() => router.push(plusIconUrl)}
          className={`${styles.settingBtn} ${styles.plusBtn}`}
        >
          <SvgPlusElement themeType={themeType} />
        </button>
      )}
      {filterModelToggle && (
        <FilterModelContent themeType={themeType} titleText="Categories" filterModelListArr={categoryFilterList} filterModelToggle={filterModelToggle} setFilterModelToggle={setFilterModelToggle} filterButtonRef={filterButtonRef} />
      )}
    </div>
  );
}


