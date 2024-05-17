import React, { useState, useEffect } from "react";

export default function AdminCard({ id, img, titulo, mensaje, fecha, adjunto }) {
  const [showModal, setShowModal] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = (path) => {
    setCurrentPath(path);
    window.location.href = path;
  };

  const handleModificarClick = () => {
    window.location.href = `/admin/editarAnuncio?id=${id}&titulo=${encodeURIComponent(
      titulo
    )}`;
  };

  const handleEliminarClick = () => {
    setShowModal(true);
  };

  const confirmarEliminar = () => {
    fetch(`http://localhost:1234/eliminar-anuncio?id=${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar el anuncio");
        }
        // Si la eliminación es exitosa, redirecciona a la página de anuncios
        window.location.href = "http://localhost:5173/";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const cancelarEliminar = () => {
    setShowModal(false);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength && screenWidth <= 430) {
      return text.substring(0, 134) + "...";
    } else if (text.length > maxLength && screenWidth > 430) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="flex justify-center items-center mt-[100px] overflow-x-hidden bg-white dark:bg-slate-900">
      <div className="relative w-full xl:h-64 max-w-[400px] xl:w-full xl:max-w-[90vw] mx-4 flex xl:flex-row flex-col rounded-xl bg-white dark:bg-slate-950 dark:text-slate-200 bg-clip-border text-gray-700 shadow-xl">
        <div className="relative xl:flex-2 h-40 xl:h-64 xl:w-[30%] overflow-hidden xl:rounded-l-xl xl:rounded-r-none rounded-t-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img className="size-full" src={img} alt={titulo} />
        </div>
        <div className="p-6 xl:flex-1">
          <div className="flex">
            <div className="flex-1 mr-[20px]">
              <h5 className="mb-2 block flex-1 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {titulo}
              </h5>
              <p className="font-sans font-light leading-relaxed text-wrap flex-1">
                {truncateText(mensaje, 700)}
              </p>
            </div>
            <div className="flex-2">
              <h5 className="mb-2 block flex-1 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-500 dark:text-slate-500 antialiased">
                {fecha}
              </h5>
              <div className="p-6 pt-4 xl:py-0 flex-1">
                <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none mt-[10px] ml-[-20px] rounded-lg bg-blue-500 dark:bg-slate-800 py-[10px] px-[10px] text-center text-nowrap align-middle font-sans text-[14px] font-bold uppercase text-white shadow-md shadow-blue-500/20 dark:shadow-slate-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 dark:hover:shadow-slate-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  onClick={() => handleNavigation(`${adjunto}`)}
                >
                  Saber más
                </button>
              </div>
              <div className="p-6 pt-4 xl:py-0 flex-1">
                <button
                  onClick={handleModificarClick}
                  data-ripple-light="true"
                  type="button"
                  className="select-none mt-[10px] ml-[-20px] rounded-lg bg-orange-800 py-[10px] px-[10px] text-center text-nowrap align-middle font-sans text-[14px] font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Modificar
                </button>
              </div>
              <div className="p-6 pt-4 xl:py-0 flex-1">
                <button
                  onClick={handleEliminarClick}
                  data-ripple-light="true"
                  type="button"
                  className="select-none mt-[10px] ml-[-20px] rounded-lg bg-red-900 py-[10px] px-[10px] text-center text-nowrap align-middle font-sans text-[14px] font-bold uppercase text-white shadow-md shadow-red-700/20 transition-all hover:shadow-lg hover:shadow-red-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Descartar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-800 mb-4">
              ¿Estás seguro de que deseas eliminar este anuncio?
            </p>
            <div className="flex justify-center">
              <button
                onClick={confirmarEliminar}
                className="bg-red-600 text-white px-4 py-2 rounded-md mr-4 hover:bg-red-700"
              >
                Confirmar
              </button>
              <button
                onClick={cancelarEliminar}
                className="bg-gray-400 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-500"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
