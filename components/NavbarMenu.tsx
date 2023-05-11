import React, { useState } from 'react';
import Link from 'next/link'


const NavbarMenu = () => {
    const [claseCSS, setClaseCSS] = useState('Menu-close');

    const handleClick = () => {
        setClaseCSS(claseCSS === 'Menu-open' ? 'Menu-close' : 'Menu-open');
    };

    return (
        <div className='navbar-button-container'>
            <label className="burger" htmlFor="burger">
                <input type="checkbox" id="burger"  onClick={handleClick}></input>
                <span></span>
                <span></span>
                <span></span>
            </label>
            <ul className={"navbar-menu " + claseCSS}>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/galeria">Galeria</Link></li>
                <li><Link href="/portafolio">Portafolio</Link></li>
                <li><Link href="/citas">Citas</Link></li>
                <li><Link href="/nosotros">Nosotros</Link></li>
                <li><Link href="/contacto">Contacto</Link></li>
            </ul>
        </div>
    )
}



export default NavbarMenu