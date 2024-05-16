import React from "react";
import comunicar from "../../assets/img/comunicar.svg";
import anuncio from "../../assets/img/anuncio-publicitario (1).svg";
import equipo from "../../assets/img/equipo.svg";
import experto from "../../assets/img/experto.svg";
import "../../assets/css/home.css";

export default function Home() {
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
            <img src={comunicar} alt="" width="120px" />
            <p>
              Nuestro <br /> Contacto
            </p>
          </div>
          <div
            className="btn-info news"
            onClick={() => redirect("./src/feedback.html")}
          >
            <img src={anuncio} alt="" width="120px" />
            <p>
              Feed
              <br /> Back
            </p>
          </div>
          <div
            className="btn-info about-us"
            onClick={() => redirect("./src/nosotros.html")}
          >
            <img src={equipo} alt="" width="120px" />
            <p>
              Sobre <br />
              Nosotros
            </p>
          </div>
          <div
            className="btn-info especialidades"
            onClick={() => redirect("./src/especialidades.html")}
          >
            <img src={experto} alt="" width="120px" />
            <p>
              Nuestras <br />
              Especialidades
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
