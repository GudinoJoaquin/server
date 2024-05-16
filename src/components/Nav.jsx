import React, { useState } from "react";
import logo from "../assets/img/logo.svg";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsTransparent(!isTransparent);
  };

  return (
    <header>
      <nav
        id="navbar"
        className={`fixed h-full top-[-15px] ${
          isTransparent
            ? "bg-transparent left-[-50px]"
            : "bg-black bg-opacity-90 left-0"
        } w-40 z-50 transition-all duration-500 ease-in-out pointer-events-none`}
      >
        <div
          id="logo"
          className="cursor-pointer flex flex-col items-center justify-center h-28 p-2 pointer-events-auto"
          onClick={toggleNav}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-auto bg-transparent backdrop-filter backdrop-blur-sm rounded-full"
          />
          <p className="text-white text-lg font-semibold bg-transparent backdrop-filter backdrop-blur-sm rounded-full">
            <span className="text-green-500">M</span>
            <span className="text-red-500">enú</span>
          </p>
        </div>
        <div
          id="options"
          className={`flex flex-col space-y-2 pointer-events-auto ${
            isNavOpen ? "flex" : "hidden"
          }`}
        >
          <a
            href="https://gudinojoaquin.github.io/home-eestn5/"
            className="text-lg text-slate-200 mx-auto transition duration-500 ease-in-out hover:text-green-500"
          >
            Inicio
          </a>
          <a
            href="https://gudinojoaquin.github.io/home-eestn5/src/especialidades"
            className="text-lg text-slate-200 mx-auto transition duration-500 ease-in-out hover:text-green-500"
          >
            Especialidades
          </a>
          <a
            href="https://gudinojoaquin.github.io/home-eestn5/src/nostros"
            className="text-lg text-slate-200 mx-auto transition duration-500 ease-in-out hover:text-green-500"
          >
            Nosotros
          </a>
          <a
            href="https://gudinojoaquin.github.io/home-eestn5/src/contacto"
            className="text-lg text-slate-200 mx-auto transition duration-500 ease-in-out hover:text-green-500"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}

