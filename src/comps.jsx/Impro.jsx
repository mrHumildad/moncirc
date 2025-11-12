import {useMemo} from 'react';
import './char.css';
import logo from '../assets/logo_yellow.png';
import { useNavigate } from "react-router-dom";
import headPic1 from '../assets/header/impro1.png';
import headPic2 from '../assets/header/impro2.png';
// Import images explicitly

import SwiperComponent from './Swiper';
const Impro = () => {
  const images = useMemo(() => {
      const modules = import.meta.glob("../assets/impro/*.{png,jpg}", { eager: true });
      // Convert to an array of URLs and sort alphabetically
      return Object.keys(modules)
        .sort()
        .map((key) => modules[key].default);
    }, []);
  const navigate = useNavigate();
  return (
    <div className='char-page' id='impro-page'>
      <div className="char-header" id ="impro-header">
        <img src={logo} alt="Mon Circ" className="char-logo" onClick={()=>navigate('/')}/>

        <h1 id="impro-title" className="char-title">IMPROVISTOS</h1>
        {/* <img className="char-img-left" src={headPic2} alt="" /> */}
        <img className="char-img-right" src={headPic1} alt="" />
      </div>
      <h3 className="char-subtitle">
        Clown itinerant per carrers i festes
      </h3>
      <div className="char-main">
        <div className="char-fotos">
          <SwiperComponent pics={images}/>
        </div>
        <div className="char-info">
          
          <p className="char-text">
           Personatges absurds i poètics emergeixen de sobte enmig del públic per transformar l’espai quotidià en un autèntic escenari ple de vida. Cada aparició és inesperada: accions breus, gags improvisats i molt d’humor visual que connecta directament amb l’espectador, creant moments màgics i sorprenents
          </p>
          <p className="char-text">
            Aquest format és proper, dinàmic i adaptable a qualsevol context, ideal per donar color i alegria a fires, mercats, festes majors, cercaviles i esdeveniments de carrer. Allà on apareixen, aquests personatges deixen una estela de rialles, poesia i complicitat.
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

export default Impro;

