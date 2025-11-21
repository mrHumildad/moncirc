import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableList } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_yellow.png';
import superImg from '../assets/header/super2.png'
import magicusImg from '../assets/header/magicus1.png'
import improImg from '../assets/header/impro1.png'
import nadalImg from '../assets/header/nadal.png'
const MenuMobile = ({actChar, menuOpen, setMenuOpen}) => {
  const navigate = useNavigate();
  
  const charImgs = { superImg, magicusImg, improImg, nadalImg };

  const charButtons = ['super', 'magicus', 'impro', 'nadal']
    .filter(char => char !== actChar)
    .map(char => {
      const imgKey = char + 'Img';
      const imgSrc = charImgs[imgKey];
      return (
        <div key={char}  id={`${char}-menu`} className="menu-button" onClick={() => { setMenuOpen(false); navigate(`/${char}`)}}>
          <img src={imgSrc} alt={`${char} character`} className="char-menu-button" />
        </div>
      );
    });

  return (
    <div className=" mobile">
        <div className="menu-mobile">
          {charButtons}
        </div>
    </div>
  );
}

export default MenuMobile;
