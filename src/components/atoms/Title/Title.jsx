import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Title = ({ children, className }) => {

    return (
        <h1 className={`title ${className}`}>
            {children}
        </h1>
    );
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default React.memo(Title);