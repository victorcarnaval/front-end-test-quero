import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { MdClose } from 'react-icons/md';

const Modal = ({ children, className, visible, onCancel }) => {

    return (
        <div className={`modal-wrapper ${className ?? ''} ${visible ? 'visible' : ''}`}>
            <div className="modal">
                <MdClose
                    className="modal__close"
                    onClick={onCancel}
                />
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired
};

Modal.defaultProps = {
    visible: false
};

export default React.memo(Modal);