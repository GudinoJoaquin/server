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
    <footer className="bg-gray-200 py-5 dark:bg-slate-950">
      <div className="container mx-auto">
        <div className="flex justify-between items-center flex-wrap">
          <div className="w-full md:w-auto mb-5 md:mb-0">
            <ul className="text-center">
              <li>
                <button
                  onClick={() => handleNavigation('https://gudinojoaquin.github.io/home-eestn5/src/contacto.html')}
                  className="contact-button dark:text-slate-200 dark:border dark:border-slate-200 dark:hover:bg-slate-900 font-semibold"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto mb-5 md:mb-0 text-center">
            <p className="text-gray-800 dark:text-slate-200">Escuela de Educación Técnica 5 Mar del Plata</p>
            <div className="creadores">
              <a
                href="https://github.com/GudinoJoaquin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-800 dark:text-slate-200"
              >
                Joaquín Gudiño 
              </a>
              <a
                href="https://github.com/FacundoCien"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-800 dark:text-slate-200"
              >
                Facundo Cientofante
              </a>
            </div>
          </div>
          <div className="w-full md:w-auto text-center">
            <ul className="flex justify-center items-center">
              <li className="mr-3">
                <a href="https://www.facebook.com/EEST5MDP/?locale=es_LA">
                  <img id="fb" src={facebook} alt="Facebook" className="w-8 h-8 rounded-full hover:bg-blue-800 dark:bg-slate-200 dark:hover:bg-blue-800" />
                </a>
              </li>
              <li className="mr-3">
                <a href="https://twitter.com/EEST5MDP">
                  <img id="tt" src={twitter} alt="Twitter" className="w-8 h-8 rounded-full hover:bg-blue-400 dark:bg-slate-200 dark:hover:bg-blue-400" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/tecnicacinco_mdq/?hl=es-la">
                  <img id="ig" src={instagram} alt="Instagram" className="w-8 h-8 rounded-full hover:bg-pink-600 dark:bg-slate-200 dark:hover:bg-pink-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
