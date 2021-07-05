import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ScholarshipResultFilter = ({ className }) => {
    const [sortBy, setSortBy] = useState('UNIVERSITY_NAME');

    const handleChange = (e) => {
        setSortBy(e.target.value);
    }

    return (
        <div className={`scholarship-result-filter ${className}`}>
            <span>Resultado:</span>

            <div className="scholarship-result-filter__action">
                <label htmlFor="scholarship-result-filter-select">
                    Ordenar por
                </label>

                <select
                    id="scholarship-result-filter-select"
                    onChange={handleChange}
                    value={sortBy}
                >
                    <option value="UNIVERSITY_NAME">
                        Nome da Faculdade
                    </option>
                </select>
            </div>
        </div>
    );
}

ScholarshipResultFilter.propTypes = {
    className: PropTypes.string
};

export default ScholarshipResultFilter;