import React, { useRef } from 'react';
import { useResize } from '../../../utils/hooks';

import './styles.css';
import { FaChevronLeft } from 'react-icons/fa';

// Create logic to get the current path
const BreadcrumbLayout = {
    small: 'Minha conta',
    large: ['Home', 'Minha conta', 'Bolsas favoritas']
};

const Breadcrumb = () => {
    const breadcrumbRef = useRef();
    const breadcrumbOffset = useResize(breadcrumbRef);

    return (
        <div className="breadcrumb" ref={breadcrumbRef}>
            {breadcrumbOffset.width < 960 && (
                <>
                    <FaChevronLeft className="breadcrumb__icon" />
                    <span className="breadcrumb__item">
                        {BreadcrumbLayout.small}
                    </span>
                </>
            )}
            {breadcrumbOffset.width >= 960 && BreadcrumbLayout.large.map(
                (item, i) => (
                    <span key={i} className="breadcrumb__item">
                        {item}
                    </span>
                )
            )}
        </div>
    );
}

export default React.memo(Breadcrumb);