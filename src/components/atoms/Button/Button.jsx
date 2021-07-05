import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ children, className, onClick, disabled }) => {

    return (
        <button
            className={`button ${className ?? ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    disabled: false
};

export default React.memo(Button);