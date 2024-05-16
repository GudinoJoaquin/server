import React from "react";
import Parallax from "../../components/Parallax";
import HomeButton from "../../components/HomeButton";
import comunicar from "../../assets/img/comunicar.svg";
import anuncio from "../../assets/img/anuncio-publicitario (1).svg";
import equipo from "../../assets/img/equipo.svg";
import experto from "../../assets/img/experto.svg";
import "../../assets/css/home.css";


export default function Home() {
  return (
    <main>
      <Parallax>
        <div className="title-container">
          <h1 id="title">
            E. E. S. T. N°5
            <hr />
          </h1>
          <h2 id="subtitle">Amancio Williams</h2>
        </div>
        <br />
        <div className="btn-container">
          <HomeButton text='Nuestro Contacto' img={comunicar} to='#'/>
          <HomeButton text='Feed Back' img={anuncio} to='#'/>
          <HomeButton text='Sobre Nosotros' img={equipo} to='#'/>
          <HomeButton text='Nuestras Especialidades' img={experto} to='#'/>
        </div>
      </Parallax>
    </main>
  );
}
