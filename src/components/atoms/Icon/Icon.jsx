import React from 'react';
import PropTypes from 'prop-types';

import { FaRegUserCircle, FaWhatsapp } from 'react-icons/fa';
import { ImInfo } from 'react-icons/im';

const IconComponent = {
    user: FaRegUserCircle,
    info: ImInfo,
    whatsapp: FaWhatsapp
};

const IconTitle = {
    user: 'Ícone do usuário',
    info: 'Ícone de ajuda',
    whatsapp: 'Ícone do Whatsapp'
};

const IconSize = {
    default: 16,
    small: 12,
    large: 20
};

const Icon = ({ name, size }) => {
    const I = IconComponent[name];

    return (
        <I size={size} title={IconTitle[name]} />
    );
}

Icon.propTypes = {
    name: PropTypes.oneOf(Object.keys(IconComponent)).isRequired,
    size: PropTypes.oneOf(Object.keys(IconSize)).isRequired
};

Icon.defaultProps = {
    size: 'default'
};

export default Icon;