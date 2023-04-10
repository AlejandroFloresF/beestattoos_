import React from "react";
import Link from "next/Link";



const Navbar = () => {
    return (
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <Link class="navbar-brand" href="#">Beestattoos_</Link>
                </div>
                <ul class="nav navbar-nav">
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li class="dropdown">
                        <Link class="dropdown-toggle" data-toggle="dropdown" href="#">Trabajo<span class="caret"></span></Link>
                    <ul class="dropdown-menu">
                    <li><Link href="/galeria">Galeria</Link></li>
                    <li><Link href="/bocetos">Diseños</Link></li>
                </ul>
                </li>
                    <li><Link href="/contacto">Contacto</Link></li>
                    <li><Link href="/citas">Citas</Link></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><Link href="#"><span class="glyphicon glyphicon-user"></span> Crear Cuenta</Link></li>
                    <li><Link href="#"><span class="glyphicon glyphicon-log-in"></span> Registrarse</Link></li>
                </ul>
            </div>
        </nav>

    )
}


export default Navbar