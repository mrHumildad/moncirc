import {useMemo, useState} from 'react';
import './char.css';
import logo from '../assets/logo_yellow.png';
import { useNavigate } from "react-router-dom";
import headPic2 from '../assets/header/impro1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableList } from '@fortawesome/free-solid-svg-icons'
import MenuMobile from './MenuMobile.jsx';
import SwiperComponent from './Swiper.jsx';
import MenuDesktop from './MenuDesktop.jsx';
// Import images explicitly

const Impro = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        { menuOpen
          ?<img src={logo} alt="Mon Circ" className="char-logo mobile" onClick={()=>navigate('/')}/> 
          : (<div className='open-button mobile' onClick={()=>setMenuOpen(true)}>
              <FontAwesomeIcon icon={faTableList} style={{width:'100%', height:'100%', display: 'block'}}/>
            </div>)
        }
        <MenuDesktop actChar={'impro'}/>
        {!menuOpen && <h1 id="impro-title" className="char-title">IMPRO&#8203;VISTOS</h1>}
        {menuOpen && <MenuMobile actChar={'impro'} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}
        <img className="char-img-right" src={headPic2} alt="" />
      </div>
      <h3 className="char-subtitle">
        Clown itinerant per carrers i festes... Un reguitzell de personatges insòlits
      </h3>
      <div className="char-main">
        <div className="char-fotos desktop">
          <SwiperComponent pics={images}/>
        </div>
        <div className="char-info">
          <p className="char-text">
           Clowns itinerants apareixen de manera inesperada enmig del públic, convertint l’espai quotidià en un escenari ple de vida, humor i sorpresa. Personatges absurds i poètics donen pas a accions breus, gags improvisats i molt d’humor visual que connecta directament amb cada espectador, creant moments màgics i irrepetibles.
          </p>
          <div className="char-fotos mobile">
            <SwiperComponent pics={images}/>
          </div>
          <p className="char-text">
            Aquest format és proper, dinàmic i totalment adaptable, ideal per animar fires, mercats, festes majors, cercaviles i qualsevol esdeveniment de carrer. Allà on arriben, aquests personatges porten color, alegria i complicitat, deixant una estela de rialles i petites escenes de poesia urbana.
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

