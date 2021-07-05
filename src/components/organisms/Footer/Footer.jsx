import React, { useRef } from 'react';
import { useResize } from '../../../utils/hooks';

import './styles.css';
import { HeaderLink } from '../../molecules';

const Footer = () => {
    const footerRef = useRef();
    const footerOffset = useResize(footerRef);

    return (
        <footer className="footer" ref={footerRef}>
            <div className="footer-content">
                <HeaderLink icon="whatsapp">
                    <span>0800 123 2222</span>
                    <span>{footerOffset.width >= 1200 ? 'Seg - Sex 8h-22h' : 'Segunda a sexta de 8h às 22h'}</span>
                </HeaderLink>

                <HeaderLink icon="chat">
                    <span>{footerOffset.width >= 1200 ? 'Chat ao vivo' : 'Chat'}</span>
                    {footerOffset.width >= 1200 && <span>Seg - Sex 8h-22h</span>}
                </HeaderLink>

                <HeaderLink icon="email">
                    <span>{footerOffset.width >= 1200 ? 'Mande um e-mail' : 'E-mail'}</span>
                    {footerOffset.width >= 1200 && <span>Respondemos rapidinho</span>}
                </HeaderLink>

                <HeaderLink icon="info">
                    <span>{footerOffset.width >= 1200 ? 'Central de ajuda' : 'Ajuda'}</span>
                    {footerOffset.width >= 1200 && <span>Encontre todas as respostas</span>}
                </HeaderLink>

                <p className="footer-content__copyright">
                    Feito com ❤ por <span>Victor Carnaval</span>
                </p>
            </div>
        </footer>
    );
}

export default React.memo(Footer);