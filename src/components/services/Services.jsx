import React from 'react'
import './Services.css';

const Services = () => {
    return (
    <>
        <div className="bar">&nbsp;</div>
        <section className="map">
        <div className="product__img">
            <img src="./src/assets/mapa-esfot.webp" alt="EPN ESFOT MAPA" loading="lazy"/>
        </div>
        <div className="services">
            <h2 className="services__title">Servicios</h2>
            <p className="service">
            <i className="fas fa-chalkboard-teacher"></i> Espacios Académicos
            </p>
            <p className="service">
            <i className="fas fa-compass"></i> Ubicación y orientación
            </p>
            <p className="service">
            <i className="fas fa-user-graduate"></i> Servicios estudiantiles
            </p>
            <p className="service">
            <i className="fas fa-tree"></i> Zonas comunes
            </p>
        </div>
        </section>
    </>
    )
}

export default Services