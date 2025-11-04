import React from 'react';
import './char.css';
import logo from '../assets/logo_yellow.png';
import superTrans from '../assets/fotos_uri/superTrans.png';

// Import images explicitly

import SwiperComponent from './Swiper';
const Super = ({setCurrentPage}) => {
  return (
    <div className='char-page'>
      <div className="char-header">
        <img src={logo} alt="Mon Circ" className="char-logo" onClick={()=>setCurrentPage('Home')}/>
        <h1 id="super-title" className="title">SUPER SPAGUETI</h1>
        <img className="char-img" src={superTrans} alt="" />
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
            Un espectacle ple d’energia on el circ es barreja amb l’humor més absurd per donar vida a un personatge tan sorprenent com divertit. Malabars impossibles, situacions còmiques i una interacció constant amb el públic converteixen cada funció en una experiència única i inoblidable.
          </p>
          <p className="char-text">
            El protagonista és un superheroi ben peculiar: no sempre tot li surt com voldria, però la seva imaginació i la seva capacitat de riure’s de si mateix el transformen en un heroi proper, tendre i carregat de comicitat. El públic, grans i petits, es converteix en còmplice i company de viatge, participant activament en el desenvolupament de l’espectacle.
          </p>
          <p className="char-text">
            Un format fresc i participatiu, ideal per a programacions familiars, escoles i espais oberts, que garanteix rialles, emoció i un record ple de màgia i diversió…
          </p>
        </div>
      </div>

    <div className="data-char">
      <span className="data-block"><span className="data-key">Durada: </span><span className="data-value">50 minuts</span></span>
      <span className="data-block"><span className="data-key">Públic: </span><span className="data-value">Familiar</span></span>
      <span className="data-block"><span className="data-key">Espai: </span><span className="data-value">Interior / exterior</span></span>
      <span className="data-block"><span className="data-key">Idioma: </span><span className="data-value">Multilingüe / Gestual</span></span>
    </div>

    </div>
  );
};

export default Super;

