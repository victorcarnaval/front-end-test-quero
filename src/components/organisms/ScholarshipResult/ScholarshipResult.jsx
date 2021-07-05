import React from 'react';
import PropTypes from 'prop-types';

import { ScholarshipToggle } from '../../molecules';

import { useScholarshipContext } from '../../../context/ScholarshipContext';

const ScholarshipResult = ({ className }) => {
    const { scholarships } = useScholarshipContext();

    return (
        <ul className={className}>
            {scholarships.map((item, i) => (
                <ScholarshipToggle key={i} scholarship={item} />
            ))}
        </ul>
    );
}

ScholarshipResult.propTypes = {
    className: PropTypes.string
};

export default React.memo(ScholarshipResult);