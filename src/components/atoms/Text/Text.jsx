import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Text = ({ children, className }) => {

    return (
        <p className={`text ${className ?? ''}`}>
            {children}
        </p>
    );
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default React.memo(Text);