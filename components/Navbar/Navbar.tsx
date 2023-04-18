import React, { useContext } from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" href="/nosotros">Beestattoos_</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/galeria">Galeria</Link>
                    </li>
                    <li>
                        <Link href="/bocetos">Diseños</Link>
                    </li>
                    <li><Link href="/contacto">Contacto</Link></li>
                    <li><Link href="/citas">Citas</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                        <Link className="dropdown-toggle" data-toggle="dropdown" href="#">Identificarse<span className="caret"></span></Link>
                        <ul className="dropdown-menu">
                            <li><Link href="/login">Iniciar Sesion</Link></li>
                            <li><Link href="/sing in">Registrarse</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar