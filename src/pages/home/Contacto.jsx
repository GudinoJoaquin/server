import React from "react";
import "../../assets/css/contacto.css";
import "../../assets/css/Nav.css";
import "../../assets/css/Footer.css";
import logo from "../../assets/img/logo.svg";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import correo from "../../assets/img/correo.png";
import lde from "../../assets/img/lde.png";

// Función de redireccionamiento
// function redirect(url) {
//     window.location.href = url;
// }

// // Función para ocultar el menú
// function ocultar() {
//     // Aquí se podría agregar el contenido de nav.js si es necesario.
// }

function ContactoPage() {
  return (
    <div>
      <header>
        <nav id="navbar">
          <div id="logo" onClick={ocultar}>
            <div className="logoest">
              <img src={logo} alt="Logo" />
              <p>Menú</p>
            </div>
          </div>
          <div className="container">
            <div id="nav-content">
              <a href="../index.html">Inicio</a>
              <a href="./especialidades.html">Especialidades</a>
              <a href="./nosotros.html">Nosotros</a>
              <a href="./feedback.html">FeedBack</a>
              {/*<a href="./mostrarAnuncios.php">Anuncios</a>*/}
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="parallax-completo">
          <div className="title-container">
            <h1 id="title" className="font-bold">
              Contáctanos
            </h1>
            <div>
              <p>
                Nos encanta escuchar de ti y estamos aquí para ayudarte en lo
                que necesites. Puedes contactarnos mediante nuestro formulario
                de contacto en línea para cualquier pregunta o sugerencia que
                tengas. Además, síguenos en nuestras redes sociales{" "}
                <a
                  href="https://www.facebook.com/EESTN5MDP/"
                  className="text-blue-600 hover:text-blue-700 transition duration-300"
                >
                  Facebook
                </a>{" "}
                e{" "}
                <a
                  href="https://www.instagram.com/tecnicacinco_mdq/?hl=es-la"
                  className="text-pink-700 hover:text-purple-600 transition duration-300"
                >
                  Instagram
                </a>{" "}
                para mantenerte al día con las últimas noticias, eventos y
                actividades de nuestra escuela. Y si prefieres hablar en
                persona, te solicitamos que acuerdes una entrevista por este
                formulario o por correo electrónico. Esperamos saber pronto de
                ti y nos agrada conectarnos contigo y únete a nuestra comunidad
                en línea.
              </p>
            </div>
          </div>
        </div>

        <section className="sm:flex mx-[10vw] sm:gap-[10vw] sm:justify-center">
          <form
            action="https://formsubmit.co/infoT5@eest5mdp.edu.ar"
            method="POST"
            className="flex flex-col flex-1"
          >
            <h4 className="sm:text-[2vw] sm:py-[2vw] sm:text-start text-[5vw]">
              Enviar mensaje
              <hr className="border-[1.5px] border-red-500 mr-[600px] mt-[3px] w-[40px]" />
            </h4>
            <input
              className="border-solid border border-gray-300 focus:ring-[3px] focus:ring-red-500 focus:ring-opacity-30 focus:outline-none rounded-[5px] p-[.5vw] m-[.5vw] placeholder:italic transition duration-[.3s]"
              type="text"
              placeholder="Nombre"
              name="Nombre"
              required
            />
            <input
              className="border-solid border border-gray-300 focus:ring-[3px] focus:ring-red-500 focus:ring-opacity-30 focus:outline-none rounded-[5px] p-[.5vw] m-[.5vw] placeholder:italic transition duration-[.3s]"
              type="email"
              placeholder="Email"
              name="Email"
              required
            />
            <textarea
              className="border-solid border border-gray-300 focus:ring-[3px] focus:ring-red-500 focus:ring-opacity-30 focus:outline-none rounded-[5px] p-[.5vw] m-[.5vw] placeholder:italic transition duration-[.3s] resize-none"
              rows="17"
              name="Texto"
              required
            ></textarea>
            <button
              className="bg-[#f85c70] text-white rounded-[5px] p-[.5vw] m-[.5vw] hover:bg-[#f63750] transition duration-[.3s]"
              type="submit"
            >
              Enviar
            </button>
          </form>

          <div className="flex-2">
            <div className="">
              <h4 className="sm:text-[2vw] sm:text-nowrap sm:py-[2vw] text-[5vw] mt-[20px]">
                Manténgase en contacto
                <hr className="border-[1.5px] border-red-500 w-[45px] mt-[3px]" />
              </h4>
              <div className="">
                <h6 className="sm:[mx-[50px] text-[20px]] mx-[50px] mt-[20px] text-[20px]">
                  <i className="fa fa-map ml-[-39px] mr-[10px]"></i>
                  Dirección:
                  <br />
                  <a
                    href="https://www.google.com/maps/place/Escuela+De+Educación+Secundaria+Técnica+Nº5+'Amancio+Williams'/@-38.0104666,-57.5894172,15z/data=!4m6!3m5!1s0x9584dec66cad85ff:0x2a201849dd878504!8m2!3d-38.011481!4d-57.5806625!16s%2Fg%2F1hf3y76ld?entry=ttu"
                    className="sm:text-[1.3vw] hover:text-red-500 underline underline-offset-2"
                  >
                    Av. Juan B. Justo 4287, B7608 Mar del Plata, Provincia de
                    Buenos Aires
                  </a>
                </h6>
              </div>
              <div className="mt-[20px] mb-[50px]">
                <h6 className="sm:[mx-[50px] text-[20px]] mx-[50px] mt-[20px] text-[20px]">
                  <i className="fa fa-envelope ml-[-39px] mr-[14px]"></i>
                  Email:
                  <br />
                  <a
                    href="mailto:infoT5@gmail.com"
                    className="sm:text-[1.3vw] text-red-400 hover:text-red-600"
                  >
                    infoT5@gmail.com
                  </a>
                </h6>
              </div>
              <button
                className="bg-green-800 text-white rounded-[5px] px-[10px] py-[.5vw] m-[.5vw] hover:bg-green-700 transition duration-[.3s] w-full"
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/uv?pb=!1s0x9584dec66cad85ff%3A0x2a201849dd878504!3m1!7e115!4s%2Fmaps%2Fplace%2Feestn5%2F%40-38.0116482%2C-57.5808331%2C3a%2C75y%2C38.81h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sYnnzVpfm0XdvSz50K7sWZg*212e0*214m2*213m1*211s0x9584dec66cad85ff%3A0x2a201849dd878504%3Fsa%3DX%26ved%3D2ahUKEwi-srXVtYGGAxV3kJUCHfIcAq4Qpx96BAhLEAA!5seestn5%20-%20Buscar%20con%20Google!15sCgIgAQ&imagekey=!1e2!2sYnnzVpfm0XdvSz50K7sWZg&hl=es&ved=1t%3A206134&ictx=111",
                    "_blank"
                  )
                }
              >
                ¡Visítanos Ahora!
              </button>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer-content">
            <div className="footer-nav">
              <ul>
                <li>
                  <button
                    onClick={() => redirect("../index.html")}
                    className="contact-button"
                  >
                    Inicio
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
                    onClick={() => redirect("../src/especialidades.html")}
                    className="contact-button"
                  >
                    Especialidades
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

export default ContactoPage;
