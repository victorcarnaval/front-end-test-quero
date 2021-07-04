import React from 'react';
import PropTypes from 'prop-types';

const NavGroup = ({ children }) => {

    return (
        <ul className="nav-group">
            {children}
        </ul>
    );
}

NavGroup.propTypes = {
    children: PropTypes.node.isRequired
};

export default NavGroup;