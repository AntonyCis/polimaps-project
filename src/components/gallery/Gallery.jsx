import React from 'react'
import './Gallery.css';

const Gallery = () => {
    return (
    <>
    <section className="gallery">
        <div className="gallery__images">
            <img src="./src/assets/imgVideo.webp" alt="Video"/>
        </div>
        <div className="gallery__downloads">
        <h2 className="gallery__title">Descarga Guias</h2>
        <ul className="download__list">
            <li className="download__item">
            📚 Biblioteca y acceso a recursos digitales
            </li>
            <li className="download__item">
                ☕ Cafeterías y zonas de descanso
                </li>
                <li className="download__item">
                🚌 Rutas de transporte
                </li>
                <li className="download__item">
                💻 Acceso a Wi-Fi y laboratorios
                </li>
            </ul>
        </div>
    </section>
    <div className="bar">&nbsp;</div>
    </>
    )
}

export default Gallery