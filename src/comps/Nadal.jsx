import {useMemo} from 'react';
import './char.css';
import logo from '../assets/logo_yellow.png';
import { useNavigate } from "react-router-dom";
import headPic1 from '../assets/header/nadal1.png';
import cabalgadaPic from '../assets/nadal/aldino.png'
//import headPic2 from '../assets/header/nadal2.png';
// Import images explicitly

import SwiperComponent from './Swiper';
const Nadal = () => {
  const images = useMemo(() => {
      const modules = import.meta.glob("../assets/nadal/*.{png,jpg}", { eager: true });
      // Convert to an array of URLs and sort alphabetically
      return Object.keys(modules)
        .sort()
        .map((key) => modules[key].default);
    }, []);
  const navigate = useNavigate();
  return (
    <div className='char-page' id='nadal-page'>
      <div className="char-header" id ="nadal-header">
        <img src={logo} alt="Mon Circ" className="char-logo" onClick={()=>navigate('/')}/>
        <h1 id="nadal-title" className="char-title">QUIN NADAL!</h1>
        {/* <img className="char-img-left" src={headPic2} alt="" /> */}
        <img className="char-img-right" src={headPic1} alt="" />
      </div>
      <h3 className="char-subtitle">
        Espectacles i activitats per fer brillar l’hivern
      </h3>
      <div className="char-main">
        <div className="char-fotos">
          <SwiperComponent pics={images}/>
        </div>
        <div className="char-info">
          
          <p className="char-text">
            Quan arriba el fred i les llums de Nadal omplen els carrers, Mon Circ es vesteix de festa i adapta les seves propostes per portar màgia i alegria a petits i grans.
          </p>
          <p className="char-text">
            El Super Spagueti es reinventa amb un toc nadalenc ple d’humor i tendresa, mentre que els personatges itinerants —absurds, poètics i sorprenents— apareixen entre parades, mercats i llums per transformar qualsevol espai en un escenari viu.
          </p>
          <p className="char-text">
            A més, aquests imprevistos itinerants es poden combinar en pack amb un espectacle de màgia còmica o amb el propi Super Spagueti, creant una experiència completa que uneix el millor del circ, la màgia i l’humor.
          </p>
          <p className="char-text">
            Per completar la màgia de les festes, el Pare Noel pot fer una visita especial als nens i nenes, ja sigui el mateix dia de Nadal o durant la Nit de Cap d’Any, portant il·lusió, complicitat i un toc d’encant extra.
          </p>
          
        </div>
      </div>
      <div className="cabalgadas-cont">
        <img className={"cabalgada-img"} src={cabalgadaPic} alt="" />
        <p className="char-text">
            I per a les cavalcades i cercaviles nadalenques, Mon Circ ofereix també l’espectacle itinerant Mil i una Nit, una proposta visual i festiva que converteix els carrers en un gran escenari ple de color, fantasia i diversió compartida.
        </p>
        <p className="char-text">
          A l’hivern, cada racó es converteix en escenari: fires, carrers, biblioteques i escoles s’omplen de rialles, poesia i esperit festiu. Una proposta per compartir il·lusió i fer del Nadal un moment inoblidable
        </p>
      </div>

    {/* <div className="data-char">
      <span className="data-block"><span className="data-key">Durada: </span><span className="data-value">40/50 minuts</span></span>
      <span className="data-block"><span className="data-key">Públic: </span><span className="data-value">Familiar</span></span>
      <span className="data-block"><span className="data-key">Espai: </span><span className="data-value">Interior / exterior</span></span>
      <span className="data-block"><span className="data-key">Idioma: </span><span className="data-value">Multilingüe / Gestual</span></span>
      <img src={logo} alt="Mon Circ" className="char-logo" onClick={()=>navigate('/')}/>
    </div> */}

    </div>
  );
};

export default Nadal;


