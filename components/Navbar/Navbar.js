import React from "react";
import Link from "Next/Link";



const Navbar = () => {
    return (
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <Link class="navbar-brand" href="/nosotros">Beestattoos_</Link>
                </div>
                <ul class="nav navbar-nav">
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
                <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                        <Link class="dropdown-toggle" data-toggle="dropdown" href="#">Identificarse<span class="caret"></span></Link>
                        <ul class="dropdown-menu">
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