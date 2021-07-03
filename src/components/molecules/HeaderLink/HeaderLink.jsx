import React from 'react';

import './styles.css';
import { Icon } from '../../atoms';

const HeaderLink = ({ icon, children }) => {

    return (
        <div className="header-link">
            <div className="header-link__icon">
                <Icon name={icon} />
            </div>
            <div className="header-link__text">
                <p>{children}</p>
            </div>
        </div>
    );
}

export default HeaderLink;