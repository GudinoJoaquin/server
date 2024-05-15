import React from "react";
import "../../assets/css/Footer.css";
import "../../assets/css/style.css";

// Importar imágenes
import comunicar from "../../assets/img/comunicar.svg";
import anuncio from "../../assets/img/anuncio-publicitario (1).svg";
import equipo from "../../assets/img/equipo.svg";
import experto from "../../assets/img/experto.svg";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import correo from "../../assets/img/correo.png";

function redirect(url) {
  window.location.href = url;
}

function Home() {
  return (
    <main>
      <div className="parallax-completo">
        <div className="title-container">
          <h1 id="title">
            E. E. S. T. N°5
            <hr />
          </h1>
          <h2 id="subtitle">Amancio Williams</h2>
        </div>
        <br />
        <div className="btn-container">
          <div
            className="btn-info about-us"
            onClick={() => redirect("./src/contacto.html")}
          >
            <img src={comunicar} alt="Comunicar" width="120px" />
            <p>
              Nuestro <br /> Contacto
            </p>
          </div>
          <div
            className="btn-info news"
            onClick={() => redirect("./src/feedback.html")}
          >
            <img src={anuncio} alt="Anuncio Publicitario" width="120px" />
            <p>
              Feed
              <br /> Back
            </p>
          </div>
          <div
            className="btn-info about-us"
            onClick={() => redirect("./src/nosotros.html")}
          >
            <img src={equipo} alt="Equipo" width="120px" />
            <p>
              Sobre <br />
              Nosotros
            </p>
          </div>
          <div
            className="btn-info especialidades"
            onClick={() => redirect("./src/especialidades.html")}
          >
            <img src={experto} alt="Experto" width="120px" />
            <p>
              Nuestras <br />
              Especialidades
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div className="footer-nav">
            <ul>
              <li>
                <button
                  onClick={() =>
                    (window.location.href = "../src/contacto.html")
                  }
                  className="contact-button"
                >
                  Contáctanos
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    (window.location.href = "../src/feedback.html")
                  }
                  className="contact-button"
                >
                  FeedBack
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    (window.location.href = "../src/nosotros.html")
                  }
                  className="contact-button"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    (window.location.href = "../src/especialidades.html")
                  }
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
  );
}

export default Home;
