import React from 'react'
import './Downloads.css';

const Downloads = () => {
    return (
    <section className="app" id='map'>
        <div className="mobile">
            <h2 className="mobile__title">Acceso al mapa online:  </h2>
            <div className="mobile__buttons">
                <button className='access__button'>Acceder</button>
                <a href="#"><img src="./src/assets/appstore.png" className="ps" alt="PlayStore" loading="lazy"/></a>
                <a href="#"><img src="./src/assets/googleplay.png" className="gp" alt="GooglePlay" loading="lazy"/></a>
            </div>
        </div>
    </section>
    )
}

export default Downloads