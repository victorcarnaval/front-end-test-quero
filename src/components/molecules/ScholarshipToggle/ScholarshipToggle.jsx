import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import { toLocaleCurrency } from '../../../utils/currency';

const ScholarshipToggle = ({ className, scholarship }) => {

    return (
        <li className={`scholarship-result-item ${className ?? ''}`}>

            <input
                type="checkbox"
                className="scholarship-result-item__checkbox"
            />

            <img
                className="scholarship-result-item__logo"
                src={scholarship.university.logo_url}
                alt="Logo da faculdade"
                title="Logo da faculdade"
            />

            <div className="scholarship-result-item__course">
                <p>{scholarship.course.name}</p>
                <p>{scholarship.course.level}</p>
            </div>

            <div className="scholarship-result-item__price">
                <p>Bolsa de <span>{`${parseInt(scholarship.discount_percentage)}%`}</span></p>
                <p>{toLocaleCurrency(scholarship.price_with_discount)}</p>
            </div>

        </li>
    );
}

ScholarshipToggle.propTypes = {
    className: PropTypes.string
};

export default React.memo(ScholarshipToggle);