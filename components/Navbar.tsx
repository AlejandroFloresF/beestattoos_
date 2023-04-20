import React, { useContext } from 'react'
import Link from 'next/link'
  


const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
        <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand--icon" href="/"></Link>
        <div className="navbar-brand">Beestattoos_</div>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/galeria">Galeria</Link></li>
            <li><Link href="/portafolio">Portafolio</Link></li>
            <li><Link href="/citas">Citas</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>


        </ul>
        <ul className="nav navbar-nav navbar-right">
            <li><a href="/login"><span className="glyphicon glyphicon-user"></span></a></li>
            <li><a href="/"><span className="glyphicon glyphicon-log-in"></span></a></li>
        </ul>
        </div>
    </div>
    </nav>
    )
}

export default Navbar