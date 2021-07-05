import React from 'react';
import PropTypes from 'prop-types';

import { FaRegUserCircle, FaWhatsapp, FaRocketchat, FaEnvelope } from 'react-icons/fa';
import { ImInfo } from 'react-icons/im';

const IconComponent = {
    user: FaRegUserCircle,
    info: ImInfo,
    whatsapp: FaWhatsapp,
    chat: FaRocketchat,
    email: FaEnvelope
};

const IconTitle = {
    user: 'Ícone do usuário',
    info: 'Ícone de ajuda',
    whatsapp: 'Ícone do Whatsapp',
    chat: 'Ícone de Chat',
    email: 'Ícone do E-mail'
};

const IconSize = {
    default: 25,
    small: 20,
    large: 30
};

const Icon = ({ name, size }) => {
    const I = IconComponent[name];

    return (
        <I size={IconSize[size]} title={IconTitle[name]} />
    );
}

Icon.propTypes = {
    name: PropTypes.oneOf(Object.keys(IconComponent)).isRequired,
    size: PropTypes.oneOf(Object.keys(IconSize)).isRequired
};

Icon.defaultProps = {
    size: 'default'
};

export default React.memo(Icon);