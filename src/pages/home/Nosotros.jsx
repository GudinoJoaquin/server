import React from 'react';
import '../../assets/css/nosotros.css';
import '../../assets/css/Footer.css';
import '../../assets/css/Nav.css';
import logo from '../../assets/img/logo.svg';
import lde from '../../assets/img/lde.png';
import idi2_OLD from '../../assets/img/idi2_OLD.jpeg';
import l1b from '../../assets/img/l1b.svg';
import l2b from '../../assets/img/l2b.svg';
import l3b from '../../assets/img/l3b.svg';
import l4b from '../../assets/img/l4b.svg';
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import correo from '../../assets/img/correo.png';
// import redirect from '../../assets/js/redirect.js';
// import nav from '../../assets/js/nav.js';

// function redirect(url) {
//   window.location.href = url;
// }

// function ocultar() {
//   // Aquí se podría agregar el contenido de nav.js si es necesario.
// }

function Nosotros() {
  return (
    <div>
      <header>
        <nav id="navbar">
          <div id="logo" onClick={ocultar}>
            <div className="logoest">
              <img src={logo} alt="Logo" />
            </div>
            <p>Menú</p>
          </div>
          <div className="container">
            <div id="nav-content">
              <a href="../index.html">Inicio</a>
              <a href="./especialidades.html">Especialidades</a>
              <a href="./contacto.html">Contacto</a>
              <a href="./feedback.html">FeedBack</a>
            </div>
          </div>
        </nav>
      </header>

      <div className="parallax-completo">
        <h1 id="ntitle">Escuela de Educación</h1>
        <h1 id="ntitle">Técnica Numero 5</h1>
        <h2 id="nsubtitle">Mar del Plata</h2>
      </div>
      
      <div className="blur-container">
        <div className="title-container">
          <h1 id="title">Nosotros</h1>
          <div>
            <p>
              Somos la Escuela de Educación Secundaria Técnica N°5. Estamos
              situados en la hermosa ciudad de Mar del Plata, en la provincia de
              Buenos Aires, Argentina.
              <br /><br />
              Desde 1986, nos hemos dedicado a brindar una educación de calidad
              en el ámbito técnico, preparando a nuestros estudiantes para
              enfrentar los desafíos del mundo moderno en un espacio que inspira
              al aprendizaje y el crecimiento.
              <br /><br />
              Nuestros estudiantes tienen la oportunidad de adquirir habilidades
              prácticas y especializadas que los prepararán para una exitosa
              carrera profesional en diversos campos.
              <br /><br />
              Nuestra institución ofrece diferentes especializaciones técnicas
              en informática, electrónica y construcciones.
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src={idi2_OLD} alt="Imagen" />
        </div>
      </div>

      <br />

      <div className="objective">
        <div className="obj-left">
          <img src={l1b} alt="Logo 1" />
          <img src={l2b} alt="Logo 2" />
        </div>
        <div className="obj-middle">
          <div className="obj-text">
            <h2>Nuestros Objetivos</h2>
            <br />
            <p>Nuestro principal objetivo en la EEST N°5 es proporcionar una educación integral y de calidad que prepare a nuestros estudiantes para enfrentar los desafíos del mundo actual y futuro.</p>
            <br />
            <p>Buscamos fomentar el desarrollo de habilidades técnicas, críticas y sociales en un ambiente inclusivo y respetuoso, donde cada estudiante pueda alcanzar su máximo potencial y contribuir positivamente a la sociedad.</p>
          </div>
        </div>
        <div className="obj-right">
          <img src={l3b} alt="Logo 3" />
          <img src={l4b} alt="Logo 4" />
        </div>
      </div>

      <br />

      <section className="unete">
        <h2>Únete a nosotros</h2>
        <p>
          Si estás interesado en formar parte de nuestra comunidad educativa o
          deseas obtener más información, ¡no dudes en ponerte en contacto con
          nosotros! Estamos aquí para ayudarte a alcanzar tus metas educativas y
          profesionales.
        </p>
        <button onClick={() => redirect('./contacto.html')}>
          Contáctanos
        </button>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-nav">
            <ul>
              <li><button onClick={() => redirect('../src/contacto.html')} className="contact-button">Contáctanos</button></li>
              <li><button onClick={() => redirect('../src/feedback.html')} className="contact-button">FeedBack</button></li>
              <li><button onClick={() => redirect('../index.html')} className="contact-button">Inicio</button></li>
              <li><button onClick={() => redirect('../src/especialidades.html')} className="contact-button">Especialidades</button></li>
            </ul>
          </div>
          <div className="footer-social">
            <ul>
              <li><a href="https://www.facebook.com/EESTN5MDP/"><img src={facebook} alt="Facebook" /></a></li>
              <li><a href="https://www.instagram.com/tecnicacinco_mdq/?hl=es-la"><img src={instagram} alt="Instagram" /></a></li>
              <li><a href="mailto:infoT5@gmail.com"><img src={correo} alt="Gmail" /></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Nosotros;
