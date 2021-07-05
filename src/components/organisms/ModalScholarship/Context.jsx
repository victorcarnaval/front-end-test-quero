import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true);
    }

    const closeModal = () => {
        setVisible(false);
    }

    const store = {
        visible,
        openModal,
        closeModal
    };

    return (
        <ModalContext.Provider value={store}>
            {children}
        </ModalContext.Provider>
    );
}

const useModalContext = () => {
    const context = useContext(ModalContext);
    return context;
}

export { useModalContext, ModalProvider };