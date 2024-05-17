import React from 'react';
import '../../assets/css/nosotros.css'

export default function Nosotros() {
  const redirect = (url) => {
    window.location.href = url;
  };

  const ocultar = () => {
    console.log('Ocultar');
  };

  return (
    <div>
      <header>
        <nav id="navbar">
          <div id="logo" onClick={ocultar}>
            <div className="logoest">
              <img src="../assets/img/logo.svg" alt="Logo" />
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
      <main>
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
            <img src="../assets/img/idi2_OLD.jpeg" alt="Imagen" />
          </div>
        </div>
        <br />
        <div className="objective">
          <div className="obj-left">
            <img src="../assets/img/l1b.svg" alt="Logo 1" />
            <img src="../assets/img/l2b.svg" alt="Logo 2" />
          </div>
          <div className="obj-middle">
            <div className="obj-text">
              <h2>Nuestros Objetivos</h2>
              <br />
              <p>
                Nuestro principal objetivo en la EEST N°5 es proporcionar una educación integral y de calidad que prepare a nuestros estudiantes para enfrentar los desafíos del mundo actual y futuro.
              </p>
              <br />
              <p>
                Buscamos fomentar el desarrollo de habilidades técnicas, críticas y sociales en un ambiente inclusivo y respetuoso, donde cada estudiante pueda alcanzar su máximo potencial y contribuir positivamente a la sociedad.
              </p>
            </div>
          </div>
          <div className="obj-right">
            <img src="../assets/img/l3b.svg" alt="Logo 3" />
            <img src="../assets/img/l4b.svg" alt="Logo 4" />
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
                <li><a href="https://www.facebook.com/EESTN5MDP/"><img src="../assets/img/facebook.png" alt="Facebook" /></a></li>
                <li><a href="https://www.instagram.com/tecnicacinco_mdq/?hl=es-la"><img src="../assets/img/instagram.png" alt="Instagram" /></a></li>
                <li><a href="mailto:infoT5@gmail.com"><img src="../assets/img/correo.png" alt="Gmail" /></a></li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
