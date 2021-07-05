import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { Card } from '../../atoms';

const Scholarship = ({ className }) => {

    return (
        <Card className={`scholarship-list__item ${className ?? ''}`}></Card>
    );
}

Scholarship.propTypes = {
    className: PropTypes.string
};

export default React.memo(Scholarship);