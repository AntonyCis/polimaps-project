import React from 'react'
import './Header.css';
import 'animate.css';
import Main from '../main/Main';
import { Link } from 'react-router';
import { useState } from "react"
import posicion from '../../assets/posicion.png';;

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }
    const closeMenu = () => {
        setMenuActive(false)
    }
    return (
        <header className="navbar">
        <nav className="navbar_container">
            <h1 className="navbar_logo">
            Pol <img src={posicion} alt="ubicacion-logo" /> Maps
            </h1>

            <ul className={`navbar_menu ${menuActive ? "menu--active" : ""}`}>
            <li><a href="#" onClick={closeMenu}>Inicio</a></li>
            <li><a href="#map" onClick={closeMenu}>Mapa</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
            <li><Link to="/memes" onClick={closeMenu}>Memes</Link></li>
            <li><Link to="/login" onClick={closeMenu}>Ingresar</Link></li>
            <li><Link to="/register" onClick={closeMenu}>Registrarse</Link></li>
            </ul>

            <div className="header__hamburger" onClick={toggleMenu}>
            <i className="fas fa-bars hamburger"></i>
            </div>
        </nav>

        <div className="navbar_phrase animate__animated animate__pulse">
            <h2>"Descubre la EPN a un clic y recorre el campus como un experto."</h2>
        </div>
    </header>
    )
}

export default Header