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
                <li><button onclick="window.location.href = '../index.html';" class="contact-button">Inicio</button></li>
                </ul>                        
            </div>
            <div class="footer-names">
              <p>Escuela de Educación Técnica 5 Mar del Plata</p>
          </div>
            <div class="footer-social">
                <ul>
                    <li><a href="https://www.facebook.com/EEST5MDP/?locale=es_LA"><img src="../assets/img/facebook.png" alt="Facebook"></a></li>
                    <li><a href="https://www.instagram.com/tecnicacinco_mdq/?hl=es-la"><img src="../assets/img/instagram.png" alt="Instagram"></a></li>
                    <li><a href="mailto:infoT5@gmail.com"><img src="../assets/img/correo-electronico (1).png" alt="Gmail"></a></li>
                  </ul>
            </div>                  
        </div>
    </footer>
  );
}
export default Footer;
