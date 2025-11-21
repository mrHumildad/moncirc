import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_yellow.png';
import superImg from '../assets/header/super2.png';
import magicusImg from '../assets/header/magicus1.png';
import improImg from '../assets/header/impro1.png';
import nadalImg from '../assets/header/nadal.png';

const MenuDesktop = ({ actChar }) => {
  const navigate = useNavigate();
  const charImgs = { superImg, magicusImg, improImg, nadalImg };

  const HomeButton = () => (
    <div className="menu-button" onClick={() => navigate('/')}>
      <img src={logo} alt="Home" />
    </div>
  );

  const charButtons = ['super', 'magicus', 'impro', 'nadal']
    .filter((char) => char !== actChar)
    .map((char) => {
      const imgKey = char + 'Img';
      const imgSrc = charImgs[imgKey];
      return (
        <div
          key={char}
          id={`${char}-menu`}
          className="menu-button"
          onClick={() => navigate(`/${char}`)}
        >
          <img
            src={imgSrc}
            alt={`${char} character`}
            className="char-menu-button"
          />
        </div>
      );
    });

  return (
    <div className="menu-desktop desktop">
      <HomeButton />
      {charButtons}
    </div>
  );
};

export default MenuDesktop;

