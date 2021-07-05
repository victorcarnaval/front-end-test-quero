import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Card = ({ children, className, onClick }) => {

    return (
        <div
            className={`card ${className ?? ''}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default React.memo(Card);