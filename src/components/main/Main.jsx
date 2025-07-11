import React from 'react'
import './Main.css';

const Main = () => {
    return (
        <main className="hero">
            <div className="hero__overlay">
            <div className="hero__content">
                <div className="hero__text-box">
                <p>
                ¿Es tu primer día en la ESFOT y no sabes por dónde empezar?<br />
                Te ayudamos a ubicarte, conocer la ESFOT, encontrar tus salones y sentirte parte de esta nueva etapa. Aquí tienes todo lo que necesitas para empezar con confianza.
                </p>
                </div>
                <div className="hero__image-box">
                <img src="./src/assets/mapa.png" alt="Mapa EPN" />
            </div>
            </div>
            </div>
        </main>
    )
}

export default Main