import React from "react";
import "../../assets/css/especialidades.css";
import "../../assets/css/Nav.css";
import "../../assets/css/Footer.css";
import logo from "../../assets/img/logo.svg";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import correo from "../../assets/img/correo.png";
import lde from "../../assets/img/lde.png";
// import mostrarEsp from "../../assets/js/mostrarEsp.js";
// import redirect from "../../assets/js/redirect.js";
// import nav from "../../assets/js/nav.js";

// Función de redireccionamiento
// function redirect(url) {
//   window.location.href = url;
// }

// Función para ocultar el menú
function ocultar() {
  // Aquí se podría agregar el contenido de nav.js si es necesario.
}

function Especialidades() {
  return (
    <div>
      <header>
        <nav id="navbar">
          <div id="logo" onClick={ocultar}>
            <img src={logo} alt="Logo" />
            <p>Menú</p>
          </div>
          <div className="container">
            <div id="nav-content">
              <a href="../index.html">Inicio</a>
              <a href="./nosotros.html">Nosotros</a>
              <a href="./contacto.html">Contacto</a>
              <a href="./feedback.html">FeedBack</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="parallax-completo">
          <div className="title-container">
            <h1 id="title">Nuestras especialidades</h1>
            <div>
              <p>
                En nuestra institución, los estudiantes tienen la oportunidad de
                especializarse en tres áreas fundamentales para la vida moderna:
                informática, electrónica y construcciones. La especialización en
                informática les brinda habilidades en desarrollo de software,
                análisis de datos y seguridad cibernética, mientras que en
                electrónica, adquieren conocimientos en diseño de circuitos
                analógicos y digitales, sistemas de comunicación inalámbrica y
                dispositivos electrónicos avanzados. Por otro lado, la
                especialización en construcciones los instruye en técnicas
                avanzadas de diseño arquitectónico, gestión de proyectos y
                aplicación de tecnologías de construcción sostenible. Estas
                habilidades preparan a los estudiantes para liderar proyectos
                innovadores y contribuir al progreso y bienestar de la sociedad
                actual.
              </p>
            </div>
          </div>
        </div>
        <section>
          <ul className="nav-esp" tabIndex="0">
            <li className="btn-one" onClick={() => mostrarEsp("informatica")}>
              Informática
            </li>
            <li className="btn-one" onClick={() => mostrarEsp("electronica")}>
              Electrónica
            </li>
            <li
              className="btn-one"
              onClick={() => mostrarEsp("construcciones")}
            >
              Construcciones
            </li>
          </ul>
        </section>

        <section className="especialidades-cont">
          <div id="informatica">
            <h2>Informática Profesional y Personal</h2>
            <p>
              El Técnico en Informática Profesional y Personal estará capacitado
              para asistir al usuario de productos o servicios informáticos
              brindándole servicios de instalación, capacitación,
              sistematización, mantenimiento primario, resolución de problemas
              derivados de la operatoria, y apoyo a la contratación de productos
              o servicios informáticos, desarrollando las actividades descriptas
              en el perfil profesional y pudiendo actuar de nexo entre el
              especialista o experto en el tema, producto o servicio y el
              usuario final.
            </p>
            <p>Áreas de competencia:</p>
            <ol>
              <li>
                Facilitar la operatoria del usuario, ayudando a organizar sus
                archivos y dando apoyo para resolver problemas que habitualmente
                se le presentan y que, por falta de tiempo o conocimientos,
                están fuera de su alcance.
              </li>
              <li>
                Mantener la integridad de los datos locales del usuario,
                protegiéndolos mediante el resguardo preventivo de los mismos,
                ejecutar acciones anti-virus, incluyendo reparaciones de
                archivos afectados.
              </li>
              <li>
                Instalar y poner en marcha componentes o sistemas, equipos y
                redes, por entrega de nuevas versiones o ampliación de
                capacidades, revisando configuraciones y resolviendo problemas
                emergentes de la integración de los nuevos componentes con los
                ya existentes.
              </li>
              <li>
                Mantener equipos y sistemas de baja complejidad o componentes de
                los mismos.
              </li>
              <li>
                Optimizar el ambiente informático de trabajo del usuario,
                desarrollar programas, o adaptar y complementar sus
                funcionalidades.
              </li>
              <li>
                Asesorar y apoyar en la compra y en la venta de productos o
                servicios informáticos.
              </li>
              <li>
                Autogestionar sus actividades, las de su sector dentro de la
                organización, o emprendimiento propio.
              </li>
            </ol>
          </div>

          <div id="electronica">
            <h2>Electrónica</h2>
            <p>
              El Técnico en Electrónica está capacitado, de acuerdo a las
              actividades que se desarrollan en el perfil profesional, para
              montar e instalar, operar y mantener componentes, productos,
              equipos e instalaciones de electrónica analógica y/o digital;
              realizar proyectos, diseños y desarrollos de tecnología estándar;
              comercializar, seleccionar y asesorar en componentes, productos,
              equipos e instalaciones electrónicas; y participar y/o generar
              emprendimientos en electrónica.
            </p>
            <p>Áreas de competencia:</p>
            <ol>
              <li>Proyectar componentes y productos electrónicos.</li>
              <li>
                Montar e instalar componentes, productos y equipos electrónicos.
              </li>
              <li>
                Operar y mantener componentes, productos y equipos electrónicos.
              </li>
              <li>
                Comercializar, seleccionar y asesorar en componentes, productos,
                equipos e instalaciones electrónicas.
              </li>
              <li>Generar y/o participar de emprendimientos.</li>
            </ol>
          </div>

          <div id="construcciones">
            <h2>Maestro Mayor de Obras</h2>
            <p>
              El Maestro Mayor de Obra estará capacitado, de acuerdo a las
              actividades que se desarrollan en el Perfil Profesional, para:
            </p>
            <p>Áreas de competencia:</p>
            <ol>
              <li>
                Analizar las necesidades de un cliente y elaborar el programa de
                necesidades.
              </li>
              <li>
                Elaborar proyectos completos de construcciones edilicias,
                planificando, gestionando, administrando y controlando la
                ejecución del proceso constructivo.
              </li>
              <li>Dirigir la ejecución de los procesos constructivos.</li>
              <li>
                Ejecutar obras edilicias y conducir grupos de trabajo a cargo.
              </li>
              <li>
                Proyectar, dirigir, planificar, gestionar, administrar y
                controlar instalaciones correspondientes a energía,
                comunicaciones, agua, desagües, confort y transporte.
              </li>
              <li>Prestar servicios de evaluación técnica a terceros.</li>
              <li>
                Asesorar técnicamente a terceros para la comercialización de
                productos y/o servicios.
              </li>
            </ol>
          </div>
        </section>

        <footer>
          <div className="footer-content">
            <div className="footer-nav">
              <ul>
                <li>
                  <button
                    onClick={() => redirect("../src/contacto.html")}
                    className="contact-button"
                  >
                    Contáctanos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => redirect("../src/feedback.html")}
                    className="contact-button"
                  >
                    FeedBack
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => redirect("../src/nosotros.html")}
                    className="contact-button"
                  >
                    Nosotros
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => redirect("../index.html")}
                    className="contact-button"
                  >
                    Inicio
                  </button>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/EESTN5MDP/">
                    <img src={facebook} alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/tecnicacinco_mdq/?hl=es-la">
                    <img src={instagram} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="mailto:infoT5@gmail.com">
                    <img src={correo} alt="Gmail" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Especialidades;
