import React from 'react';

import './styles.css';
import { LogoQuero } from '../../atoms';
import { HeaderLink } from '../../molecules';

const Header = () => {

    return (
        <header className="header">
            <div className="container d-flex">
                <div className="header__left-side">
                    <HeaderLink icon="info">
                        <span>Ajuda</span>
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
                        <span>Conta</span>
                    </HeaderLink>
                </div>
            </div>
        </header>
    );
}

export default Header;