import React from 'react';

import './styles.css';
import { NavLink, MenuToggleButton } from '../../atoms';
import { NavGroup } from '../../molecules';

const Menu = () => {

    return (
        <nav className="menu">
            <div className="container menu__inner">
                <div className="menu__account">
                    Minha conta
                </div>

                <MenuToggleButton />

                <NavGroup>
                    <NavLink name="Pré-matrículas" />
                    <NavLink name="Bolsas favoritas" activated />
                </NavGroup>
            </div>
        </nav>
    );
}

export default Menu;