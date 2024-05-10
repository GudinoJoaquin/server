import React, { useState } from "react";
import '../assets/css/Footer.css'
import facebook from '../assets/img/facebook.png'
import instagram from '../assets/img/instagram.png'
import twitter from '../assets/img/gorjeo.png'

function Footer() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  const handleNavigation = (path) => {
    setCurrentPath(path);
    window.location.href = path;
  };
  return (
    <footer>
      <div class="footer-content">
        <div class="footer-nav">
          <ul>
            <li>
              <button
                onClick={() => handleNavigation('https://gudinojoaquin.github.io/home-eestn5/src/contacto.html')}
                class="contact-button"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
        <div class="footer-names">
          <p>Escuela de Educación Técnica 5 Mar del Plata</p>
          <creadores>
            <a
              href="https://github.com/GudinoJoaquin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Joaquín Gudiño
            </a>
            <a
              href="https://github.com/FacundoCien"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facundo Cientofante
            </a>
          </creadores>
        </div>
        <div class="footer-social">
          <ul>
            <li>
              <a href="https://www.facebook.com/EEST5MDP/?locale=es_LA">
                <img id="fb" src={facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/EEST5MDP">
                <img id="tt" src={twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tecnicacinco_mdq/?hl=es-la">
                <img id="ig" src={instagram} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
