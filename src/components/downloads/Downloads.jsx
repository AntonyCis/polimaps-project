import React from 'react'
import './Downloads.css';
import appstore from '../../assets/appstore.png';
import googleplay from '../../assets/googleplay.png';

const Downloads = () => {
    return (
    <section className="app" id='map'>
        <div className="mobile">
            <h2 className="mobile__title">Acceso al mapa online:  </h2>
            <div className="mobile__buttons">
                <button className='access__button'>Acceder</button>
                <a href="#"><img src={appstore} className="ps" alt="PlayStore" loading="lazy"/></a>
                <a href="#"><img src={googleplay} className="gp" alt="GooglePlay" loading="lazy"/></a>
            </div>
        </div>
    </section>
    )
}

export default Downloads