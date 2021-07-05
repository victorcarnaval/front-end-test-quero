import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { ScholarshipButton, Scholarship } from '../../molecules';

import { useModalContext } from '../ModalScholarship/Context';

const ScholarshipList = ({ className }) => {
    const { openModal } = useModalContext();
    const scholarships = [];

    return (
        <div className={`scholarship-list ${className ?? ''}`}>
            <ScholarshipButton onClick={openModal} />

            {scholarships.map(
                (item, i) => <Scholarship key={i} scholarship={item} />
            )}
        </div>
    );
}

ScholarshipList.propTypes = {
    className: PropTypes.string
};

export default ScholarshipList;