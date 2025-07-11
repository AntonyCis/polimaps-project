import React from 'react'
import './About.css';
import buho from '../../assets/buho-polimaps.png';

const About = () => {
    return (
        <header class="container">
        <div class="about">
            <div class="about__container">
                <h2 class="about__title">Sobre Nosotros</h2>
                <p class="about__text">
                    Polimaps es una app de geolocalización creada por y para estudiantes de la ESFOT – EPN. Ayuda a ubicar aulas, laboratorios, servicios y otros puntos clave del campus, facilitando la movilidad y la vida universitaria con información útil y actualizada.
                </p>
            </div>
            <div class="about__img">
                <img src={buho} alt="Imagen Logo Polimaps" loading="lazy"/>
            </div>
        </div>
        </header>
    )
}

export default About