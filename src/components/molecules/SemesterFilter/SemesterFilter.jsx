import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { Button } from '../../atoms';

const SemesterFilter = ({ className, onClick }) => {

    return (
        <div className={`semester-filter ${className ?? ''}`}>
            <Button className="semester-filter__button">
                Todos os semestres
            </Button>
            <Button className="semester-filter__button">
                2º semestre de 2019
            </Button>
            <Button className="semester-filter__button">
                1º semestre de 2020
            </Button>
        </div>
    );
}

SemesterFilter.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default React.memo(SemesterFilter);