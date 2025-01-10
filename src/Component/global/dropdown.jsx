"use client";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function DropdownMenu({ dropdownItems }) {
    const[currentVal,setSCurrentVal]=useState(dropdownItems[0]);
    return (
        <DropdownButton
            id="dropdown-item-button"
            title={currentVal}
            variant="dark"

        >
            {dropdownItems && dropdownItems.map((item, index) => (
                <Dropdown.Item  onClick={()=>setSCurrentVal(item)} as="button" key={index}>
                    {item}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
}
