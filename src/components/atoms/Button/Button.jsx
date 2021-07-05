import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ children, className }) => {

    return (
        <button className={`button ${className ?? ''}`}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default React.memo(Button);