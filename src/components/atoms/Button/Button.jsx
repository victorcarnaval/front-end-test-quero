import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ children, className, onClick }) => {

    return (
        <button
            className={`button ${className ?? ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default React.memo(Button);