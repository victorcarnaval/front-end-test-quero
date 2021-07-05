import React from 'react';

import './styles.css';
import { Button } from '../../atoms';
import { Modal, ScholarshipResultFilter } from '../../molecules';
import { FormScholarship, ScholarshipResult } from '..';

import { useModalContext } from '../../../context/ModalContext';
import { useScholarshipContext } from '../../../context/ScholarshipContext';

const ModalScholarship = () => {
    const { visible, closeModal } = useModalContext();
    const { favorites, save } = useScholarshipContext();

    const handleSubmit = () => {
        save();
        closeModal();
    };

    return (
        <Modal
            visible={visible}
            onCancel={closeModal}
            className="modal-scholarship"
        >
            <h3 className="modal-scholarship__title">
                Adicionar bolsa
            </h3>
            <p className="modal-scholarship__description">
                Filtre e adicione as bolsas de seu interesse.
            </p>

            <FormScholarship className="modal-scholarship__form" />

            <ScholarshipResultFilter className="modal-scholarship__filter" />

            <ScholarshipResult className="modal-scholarship__result" />

            <div className="modal-scholarship__actions">
                <Button onClick={closeModal}>
                    Cancelar
                </Button>
                <Button
                    className={`modal-scholarship__actions--${Object.keys(favorites).length ? 'primary' : 'disabled'}`}
                    onClick={handleSubmit}
                    disabled={Object.keys(favorites).length === 0}
                >
                    Adicionar bolsa(s)
                </Button>
            </div>
        </Modal>
    );
}

export default ModalScholarship;