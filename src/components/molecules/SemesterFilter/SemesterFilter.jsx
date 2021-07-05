import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { Button } from '../../atoms';

import { useScholarshipContext } from '../../../context/ScholarshipContext';

const SemesterFilter = ({ className }) => {
    const { semester, setSemester } = useScholarshipContext();

    return (
        <div className={`semester-filter ${className ?? ''}`}>
            <Button
                className={`semester-filter__button ${semester === 0 ? 'semester-filter__button--selected' : ''}`}
                onClick={() => setSemester(0)}
            >
                Todos os semestres
            </Button>
            <Button
                className={`semester-filter__button ${semester === 2 ? 'semester-filter__button--selected' : ''}`}
                onClick={() => setSemester(2)}
            >
                2º semestre de 2019
            </Button>
            <Button
                className={`semester-filter__button ${semester === 1 ? 'semester-filter__button--selected' : ''}`}
                onClick={() => setSemester(1)}
            >
                1º semestre de 2020
            </Button>
        </div>
    );
}

SemesterFilter.propTypes = {
    className: PropTypes.string
};

export default React.memo(SemesterFilter);