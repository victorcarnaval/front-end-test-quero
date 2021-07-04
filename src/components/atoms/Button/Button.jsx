import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ButtonTheme = {
    primary: 'button-primary'
};

const Button = ({ children, theme }) => {
    const className = `button ${ButtonTheme[theme]}`

    return (
        <button className={className}>
            {children}
        </button>
    );
}

Button.propTypes = {
    theme: PropTypes.oneOf(Object.keys(ButtonTheme)).isRequired,
    children: PropTypes.node.isRequired
};

Button.defaultProps = {
    theme: 'primary'
};

export default Button;