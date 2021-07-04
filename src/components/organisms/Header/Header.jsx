import React, { useEffect, useRef, useState } from 'react';

import './styles.css';
import { LogoQuero } from '../../atoms';
import { HeaderLink } from '../../molecules';

const Header = () => {
    const [headerWidth, setHeaderWidth] = useState(0);
    const headerRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            setHeaderWidth(headerRef.current.offsetWidth);
        };

        if (headerRef.current) {
            handleResize();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [headerRef]);

    return (
        <header className="header" ref={headerRef}>
            <div className="container header__grid">
                <div className="header__left-side">
                    <HeaderLink icon="info">
                        <span>{headerWidth >= 1200 ? 'Como funciona' : 'Ajuda'}</span>
                    </HeaderLink>

                    <HeaderLink icon="whatsapp">
                        <span>0800 123 2222</span>
                        <span>Envie mensagem ou ligue</span>
                    </HeaderLink>
                </div>

                <div className="header__logo">
                    <LogoQuero />
                </div>

                <div className="header__right-side">
                    <HeaderLink icon="user">
                        <span>{headerWidth >= 1200 ? 'Victor Carnaval' : 'Conta'}</span>
                    </HeaderLink>
                </div>
            </div>
        </header>
    );
}

export default Header;