import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import { useScholarshipContext } from '../../../context/ScholarshipContext';
import { toLocaleCurrency } from '../../../utils/currency';

const ScholarshipToggle = ({ className, scholarship }) => {
    const { favorites, setFavorites } = useScholarshipContext();

    const handleChange = (e) => {
        const fav = { ...favorites };
        const hash = JSON.stringify(scholarship);

        if (e.target.checked) {
            fav[hash] = scholarship;
        } else {
            delete fav[hash];
        }

        setFavorites(fav);
    };

    return (
        <li className={`scholarship-result-item ${className ?? ''}`}>

            <input
                type="checkbox"
                className="scholarship-result-item__checkbox"
                onChange={handleChange}
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