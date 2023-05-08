import React, { useState } from 'react';
import Link from 'next/link'


const NavbarMenu = () => {
    const [claseCSS, setClaseCSS] = useState('Menu-close');

    const handleClick = () => {
        setClaseCSS(claseCSS === 'Menu-open' ? 'Menu-close' : 'Menu-open');
    };

    return (
        <ul className='navbar-menu-container' onClick={handleClick}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/galeria">Galeria</Link></li>
            <li><Link href="/portafolio">Portafolio</Link></li>
            <li><Link href="/citas">Citas</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
        </ul>
    )
}



export default NavbarMenu