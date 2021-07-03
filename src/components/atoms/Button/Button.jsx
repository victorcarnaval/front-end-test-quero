import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const ButtonTheme = {
    primary: 'primary'
};

const Button = ({ children, theme }) => {
    const className = `${styles.button} ${styles[theme]}`

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
    theme: ButtonTheme.primary
};

export default Button;