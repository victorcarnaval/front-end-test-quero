import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const NavLink = ({ name, activated }) => {

    return (
        <li className={`nav-group__item ${activated ? 'nav-group__item--activated' : ''}`}>
            {name}
        </li>
    );
}

NavLink.propTypes = {
    name: PropTypes.string.isRequired,
    activated: PropTypes.bool
};

export default React.memo(NavLink);