import {useRef} from 'react'
import '../App.css'
import logo from '../assets/logo_header.png'
import hero from '../assets/hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareFacebook, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'

const Home = ({setCurrentPage}) => {
   const personajesRef = useRef(null);
    const scrollToPersonajes = (e) => {
    // if button was inside a form, make sure it doesn't submit
    if (e?.preventDefault) e.preventDefault();

    const el = personajesRef.current;
    console.log("scrollToPersonajes called, ref:", el);

    if (!el) {
      // fallback: try querying by class or anchor id
      const fallback = document.querySelector(".personajes") || document.getElementById("personajes");
      if (fallback) {
        fallback.scrollIntoView({ behavior: "smooth" });
        return;
      }
      console.warn("No target element found to scroll to.");
      return;
    }

    // Prefer scrollIntoView; fallback to window.scrollTo if needed
    try {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      // fallback manual scroll
      const top = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="Home">
      <header className="hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="social-top">
        <FontAwesomeIcon icon={faSquareFacebook} />
        <FontAwesomeIcon icon={faSquareXTwitter} />
        <FontAwesomeIcon icon={faSquareInstagram} />
      </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <h1 className="title">ESPECTACLES I SONRISAS PER TOTHOM</h1>
        </div>
      </header>

      <main className="container">
        <section className="intro">
          <img src={logo} alt="Mon Circ" className="logo-intro" />
          <div className='intro-text'>
            <p>
              Aquí trobaràs tota la informació sobre els meus espectacles i activitats. Si busques
              diversió, rialles i moments inoblidables, has arribat al lloc correcte! baixa per descubrir els meus personatges!
            </p>
            <button
            onClick={scrollToPersonajes}
            className="scroll-button"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            <FontAwesomeIcon icon={faCircleDown} beat size="2x" />
          </button>
          </div>
        </section>

        <section className='personajes'>
  <div className="pers-container">
    <div className="personaje" onClick={() => setCurrentPage('Super')} id="superLink">
      <h4 className="personaje-title desktop superLink-title">SUPER SPAGUETI</h4>
    </div>
    <h4 className="personaje-title-mobile mobile superLink-title">SUPER SPAGUETI</h4>
  </div>

  <div className="pers-container">
    <div className="personaje" onClick={() => setCurrentPage('Magicus')} id="magicusLink">
      <h4 className="personaje-title desktop magicusLink-title">MAGICUS</h4>
    </div>
    <h4 className="personaje-title-mobile mobile magicusLink-title">MAGICUS</h4>
  </div>

  <div className="pers-container">
    <div className="personaje" onClick={() => setCurrentPage('Improvistos')} id="improvistosLink">
      <h4 className="personaje-title desktop improvistosLink-title">IMPROVISTOS</h4>
    </div>
    <h4 className="personaje-title-mobile mobile improvistosLink-title">IMPROVISTOS</h4>
  </div>

  <div className="pers-container">
    <div className="personaje" onClick={() => setCurrentPage('Nadal')} id="nadalLink">
      <h4 className="personaje-title desktop nadalLink-title">NADAL</h4>
    </div>
    <h4 className="personaje-title-mobile mobile nadalLink-title">NADAL</h4>
  </div>
</section>


        <section className='bottom'>
          <div className="main-text">
            <p className="parraph">
              Els espectacles i tallers de Mon Circ destaquen per ser dinàmics, participatius i adaptables a qualsevol context: carrers i places, teatres, festivals, esdeveniments familiars o programacions culturals. L’objectiu és clar: generar rialles, emoció i records inesborrables tant en infants com en adults.
            </p>
            <p className="parraph">
              Amb una proposta fresca i capaç d’arribar a tots els públics que uneix circ, teatre i màgia, Mon Circ ofereix un segell de qualitat i professionalitat.
            </p>

          </div>
        </section>
      </main>

      {/* <footer className="footer">
        <small>© {new Date().getFullYear()} El teu payaso preferit</small>
      </footer> */}
    </div>
  )
}

export default Home
