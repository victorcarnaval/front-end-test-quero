import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { ScholarshipButton, Scholarship } from '../../molecules';

import { useModalContext } from '../../../context/ModalContext';
import { useScholarshipContext } from '../../../context/ScholarshipContext';

const ScholarshipList = ({ className }) => {
    const { openModal } = useModalContext();
    const { favoritesStorage, semester } = useScholarshipContext();

    const favoritesHash = Object.keys(favoritesStorage);
    const favoritesBySemester = favoritesHash.filter(hash => {
        const fav = favoritesStorage[hash];

        return semester === 0 || Number(fav.enrollment_semester.substring(5)) === semester;
    });

    return (
        <div className={`scholarship-list ${className ?? ''}`}>
            <ScholarshipButton onClick={openModal} />

            {favoritesBySemester.map(
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