import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { ScholarshipToggle } from '../../molecules';

import { useScholarshipContext } from '../ScholarshipList/Context';

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