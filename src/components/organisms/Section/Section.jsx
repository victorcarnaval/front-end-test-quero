import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { Breadcrumb } from '../../molecules';

const Section = ({ children, className }) => {

    return (
        <section className={className}>
            <div className="container">
                <Breadcrumb />
                {children}
            </div>
        </section>
    );
}

Section.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default React.memo(Section);