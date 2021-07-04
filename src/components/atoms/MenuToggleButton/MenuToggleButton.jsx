import React from 'react';

import './styles.css';
import { FaChevronDown } from 'react-icons/fa';

const MenuToggleButton = () => {

    return (
        <button className="menu__toggle">
            <span>Menu</span>
            <FaChevronDown />
        </button>
    );
}

export default MenuToggleButton;