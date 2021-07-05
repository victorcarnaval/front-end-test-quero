import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Card = ({ children, className }) => {

    return (
        <div className={`card ${className ?? ''}`}>
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default React.memo(Card);