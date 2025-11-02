import React from 'react'
import '../App.css'
import logo from '../assets/logo_header.png'
import hero from '../assets/hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareFacebook, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'

const Home = ({setCurrentPage}) => {
  return (
    <div className="Home">
      <header className="hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="social-top">
        <FontAwesomeIcon icon={faSquareFacebook} style={{color:'#3026ebff', boxShadow: '0 4px 12px rgba(255, 255, 255, 1)'}}/>
        <FontAwesomeIcon icon={faSquareXTwitter} />
        <FontAwesomeIcon icon={faSquareInstagram} />
      </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <h1 className="title">ESPECTACLES I ACTIVITATS PER TOTHOM</h1>
        </div>
      </header>

      <main className="container">
        <section className="intro">
          <img src={logo} alt="Mon Circ" className="logo-intro" />
          <span className='intro-text'>
            Aquí trobaràs tota la informació sobre els meus espectacles i activitats. Si busques
            diversió, rialles i moments inoblidables, has arribat al lloc correcte! baixa per descubrir els meus personatges!
          <FontAwesomeIcon icon={faCircleDown} beat/>
          </span>
        </section>

        <section className='personajes'>
          <div className="personaje" onClick={() => setCurrentPage('Super')} id="super"></div>
          <div className="personaje" id="magicus"></div>
          <div className="personaje" id="improvistos"></div>
          <div className="personaje" id="nadal"></div>
        </section>

        <section className='bottom'>
          <span className="main-text">
            <span className="parraph">
              Els espectacles i tallers de Mon Circ destaquen per ser dinàmics, participatius i adaptables a qualsevol context: carrers i places, teatres, festivals, esdeveniments familiars o programacions culturals. L’objectiu és clar: generar rialles, emoció i records inesborrables tant en infants com en adults.
            </span>
            <span className="parraph">
              Amb una proposta fresca i capaç d’arribar a tots els públics que uneix circ, teatre i màgia, Mon Circ ofereix un segell de qualitat i professionalitat.
            </span>

          </span>
        </section>
      </main>

      {/* <footer className="footer">
        <small>© {new Date().getFullYear()} El teu payaso preferit</small>
      </footer> */}
    </div>
  )
}

export default Home
