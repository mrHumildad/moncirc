import React from 'react';
import './char.css';
import logo from '../assets/logo_yellow.png';
import { useNavigate } from "react-router-dom";

// Import images explicitly

import SwiperComponent from './Swiper';
const Magicus = () => {
  const navigate = useNavigate();
  return (
    <div className='char-page'>
      <div className="char-header">
        <img src={logo} alt="Mon Circ" className="char-logo" onClick={()=>navigate('/')}/>
        <h1 id="magicus-title" className="title">MAGIC</h1>
        {/* <img className="char-img" src={superTrans} alt="" /> */}
      </div>

      <div className="char-main">
        <div className="char-fotos">
          <SwiperComponent />
        </div>
        <div className="char-info">
          <h3 className="char-subtitle">
            Un superheroi del circ… amb molta salsa!
          </h3>
          <p className="char-text">
            Trucs que no surten, trucs que surten al revés i trucs que, de vegades, sí que surten… Quan res passa com estava previst, la màgia es transforma en un joc inesperat on la sorpresa i les rialles són les protagonistes.          </p>
          <p className="char-text">
            Aquest és un espectacle de màgia còmica i visual que juga amb els errors per convertir-los en moments únics, plens d’humor i complicitat amb el públic. Cada situació, per més absurda que sembli, es converteix en una oportunitat per fer riure i sorprendre grans i petits.
          </p>
          <p className="char-text">
            La participació del públic és clau: nens, nenes i adults s’endinsen dins la història i en formen part activa, fent que cada funció sigui diferent i irrepetible.
          </p>
          <p className="char-text">
            Amb un format proper, fresc i divertit, aquest espectacle és ideal per a biblioteques, escoles, festes escolars i activitats familiars, garantint rialles, il·lusió i un record inesborrable per a tothom..
          </p>
        </div>
      </div>

    <div className="data-char">
      <span className="data-block"><span className="data-key">Durada: </span><span className="data-value">40/50 minuts</span></span>
      <span className="data-block"><span className="data-key">Públic: </span><span className="data-value">Familiar</span></span>
      <span className="data-block"><span className="data-key">Espai: </span><span className="data-value">Interior / exterior</span></span>
      <span className="data-block"><span className="data-key">Idioma: </span><span className="data-value">Multilingüe / Gestual</span></span>
    </div>

    </div>
  );
};

export default Magicus;

