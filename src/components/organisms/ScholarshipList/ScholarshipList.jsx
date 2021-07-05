import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { ScholarshipButton, Scholarship } from '../../molecules';

const ScholarshipList = ({ className }) => {
    const scholarships = Array.from({ length: 3 }).fill({});

    const handleAddScholarship = () => console.log('clicked');

    return (
        <div className={`scholarship-list ${className ?? ''}`}>
            <ScholarshipButton onClick={handleAddScholarship} />

            {scholarships.map(
                (item, i) => <Scholarship key={i} />
            )}
        </div>
    );
}

ScholarshipList.propTypes = {
    className: PropTypes.string
};

export default React.memo(ScholarshipList);