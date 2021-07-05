import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { BsPlusCircle } from 'react-icons/bs';
import { Card, Text } from '../../atoms';

const ScholarshipButton = ({ className }) => {

    return (
        <Card className={`scholarship-list__button ${className ?? ''}`}>
            <BsPlusCircle />
            <h3>Adicionar bolsa</h3>
            <Text>
                Clique para adicionar bolsas de
                cursos do seu interesse
            </Text>
        </Card>
    );
}

ScholarshipButton.propTypes = {
    className: PropTypes.string
};

export default React.memo(ScholarshipButton);