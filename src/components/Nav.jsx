import React from "react";
import '../assets/css/Nav.css'
import logo from '../assets/img/logo.svg'

function Nav() {

  const ocultar = () => {
    var navContent = document.getElementById("nav-content");
    var nav = document.getElementById("navbar");
    var logo = document.getElementById("logo").children;
    if (navContent.style.display === "flex") {
      navContent.style.display = "none";
      nav.style.backgroundColor = "transparent";
      nav.style.left = "-20px";
    } else {
      navContent.style.display = "flex";
      nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      nav.style.left = "0px";
    }
  }

  return (
    <header>
      <nav id="navbar">
        <div id="logo" onClick={ocultar}>
          <div id="logoest" >
            <img src={logo} alt="Logo" />
            <p>Menu</p>
          </div>
        </div>
        <div id="container">
          <div id="nav-content">
            <a href="https://gudinojoaquin.github.io/home-eestn5/">Inicio</a>
            <a href="https://gudinojoaquin.github.io/home-eestn5/src/especialidades">Especialidades</a>
            <a href="https://gudinojoaquin.github.io/home-eestn5/src/nostros">Nosotros</a>
            <a href="https://gudinojoaquin.github.io/home-eestn5/src/contacto">Contacto</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
