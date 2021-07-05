import React from 'react';
import PropTypes from 'prop-types';

import { Header, Menu, Footer } from '../../organisms';

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <Menu />
            {children}
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;