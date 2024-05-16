import React, { useState } from "react";
import facebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import correo from '../assets/img/correo.png';

export default function Footer() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleNavigation = (path) => {
    setCurrentPath(path);
    window.location.href = path;
  };

  return (
    <footer className="bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg backdrop-brightness-75 p-2 select-none">
      <div className="sm:flex sm:flex-wrap sm:justify-between sm:items-center select-none">
        <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 sm:mb-0 text-center select-none">
          <ul className="list-none p-0 m-0 flex justify-center">
            <li className="mr-2">
              <button onClick={() => handleNavigation('/contacto.html')} className="w-auto px-2 py-1 text-sm bg-black text-white border border-white rounded-md transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:border-black select-none">Contáctanos</button>
            </li>
            <li className="mr-2">
              <button onClick={() => handleNavigation('/feedback.html')} className="w-auto px-2 py-1 text-sm bg-black text-white border border-white rounded-md transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:border-black select-none">FeedBack</button>
            </li>
            <li className="mr-2">
              <button onClick={() => handleNavigation('/nosotros.html')} className="w-auto px-2 py-1 text-sm bg-black text-white border border-white rounded-md transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:border-black select-none">Nosotros</button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/especialidades.html')} className="w-auto px-2 py-1 text-sm bg-black text-white border border-white rounded-md transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:border-black select-none">Especialidades</button>
            </li>
          </ul>
        </div>
        <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-center select-none">
          <ul className="list-none p-0 m-0 flex justify-center">
            <li className="mr-2 inline-block">
              <a href="https://www.facebook.com/EESTN5MDP/"><img src={facebook} alt="Facebook" className="w-9 h-auto bg-white border border-white rounded-full transition duration-300 ease-in-out hover:bg-blue-600 select-none" /></a>
            </li>
            <li className="mr-2 inline-block">
              <a href="https://www.instagram.com/tecnicacinco_mdq/?hl=es-la"><img src={instagram} alt="Instagram" className="w-9 h-auto bg-white border border-white rounded-full transition duration-300 ease-in-out hover:bg-pink-500 select-none" /></a>
            </li>
            <li className="inline-block">
              <a href="mailto:infoT5@gmail.com"><img src={correo} alt="Gmail" className="w-9 h-auto bg-white border border-white rounded-full transition duration-300 ease-in-out hover:bg-red-600 select-none" /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

