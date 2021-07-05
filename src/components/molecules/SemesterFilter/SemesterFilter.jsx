import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { Button } from '../../atoms';

const SemesterFilter = ({ className }) => {
    const handleClick = () => console.log('filtered')

    return (
        <div className={`semester-filter ${className ?? ''}`}>
            <Button
                className="semester-filter__button"
                onClick={handleClick}
            >
                Todos os semestres
            </Button>
            <Button
                className="semester-filter__button"
                onClick={handleClick}
            >
                2º semestre de 2019
            </Button>
            <Button
                className="semester-filter__button"
                onClick={handleClick}
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