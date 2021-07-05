import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { ScholarshipButton, Scholarship } from '../../molecules';

import { useModalContext } from '../../../context/ModalContext';
import { useScholarshipContext } from '../../../context/ScholarshipContext';

const ScholarshipList = ({ className }) => {
    const { openModal } = useModalContext();
    const { favoritesStorage } = useScholarshipContext();

    const favoritesHash = Object.keys(favoritesStorage);

    return (
        <div className={`scholarship-list ${className ?? ''}`}>
            <ScholarshipButton onClick={openModal} />

            {favoritesHash.map(
                (hash, i) => (
                    <Scholarship key={i} scholarship={favoritesStorage[hash]} />
                )
            )}
        </div>
    );
}

ScholarshipList.propTypes = {
    className: PropTypes.string
};

export default ScholarshipList;