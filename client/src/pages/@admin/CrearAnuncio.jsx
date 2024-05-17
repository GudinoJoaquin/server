import { useState, useEffect } from "react";
import Input from "../../components/Input";

export default function CrearAnuncio() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleNavigation = (path) => {
    setCurrentPath(path);
    window.location.href = path;
  };

  return (
    <>
      <header className="flex justify-center items-center gap-[50px] md:mt-[2px] mt-[20px] ml-[10px]">
        <button
          className="hover:text-emerald-600 hover:scale-[1.2] font-semibold text-[20px] transition duration-[.3s]"
          onClick={() => handleNavigation("http://localhost:5173/")}
        >
          Inicio
        </button>
        <button
          className="text-orange-600 scale-110 font-bold text-[20px] transition duration-[.3s]"
          onClick={() =>
            handleNavigation("http://localhost:5173/admin/crearAnuncio")
          }
        >
          Crear anuncio
        </button>
        <button
          className="hover:text-red-600 hover:scale-110 font-semibold text-[20px] transition duration-[.3s]"
          onClick={() =>
            (window.location.href = "http://localhost:1234/logoff")
          }
        >
          Salir
        </button>
      </header>
      {currentPath === "/" && <AdminAnuncios />}
      <div class="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-200 p-8 rounded-lg shadow-2xl mt-[60px]">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          Crear anuncio
        </h2>

        <form method="post" action="http://localhost:1234/admin/enviar-anuncio">
          <Input label="Titulo" type="text" name="titulo" />

          {/* <FileInput label='Subir imagen o pdf' name='imagen'/> */}

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-900" for="bio">
              Mensaje
            </label>
            <textarea
              class="mt-1 p-2 w-full bg-gray-300 border-none focus:outline-none  rounded-md text-gray-900 resize-none"
              rows="3"
              name="mensaje"
              id="bio"
            ></textarea>
          </div>
          <Input
            label="Imagen"
            type="text"
            name="imagen"
            placeholder="Ingresar url de la imagen"
          />
          <Input
            label="Contenido adjunto"
            type="text"
            name="adjunto"
            placeholder="Enlace del contenido adjunto"
          />

          <div class="flex justify-center mt-[20px]">
            <button
              class="bg-gray-900 border text-gray-200 px-4 py-2 font-bold rounded-md hover:bg-gray-300 hover:text-gray-900 hover:border border-gray-900 transition duration-[.3s]"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

