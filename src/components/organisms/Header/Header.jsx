import React, { useRef } from 'react';
import { useResize } from '../../../utils/hooks';

import './styles.css';
import { LogoQuero } from '../../atoms';
import { HeaderLink } from '../../molecules';

const Header = () => {
    const headerRef = useRef();
    const headerOffset = useResize(headerRef);

    return (
        <header className="header" ref={headerRef}>
            <div className="container header__grid">
                <div className="header__left-side">
                    <HeaderLink icon="info">
                        <span>{headerOffset.width >= 1200 ? 'Como funciona' : 'Ajuda'}</span>
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
                        <span>{headerOffset.width >= 1200 ? 'Victor Carnaval' : 'Conta'}</span>
                    </HeaderLink>
                </div>
            </div>
        </header>
    );
}

export default React.memo(Header);