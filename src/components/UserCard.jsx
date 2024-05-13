import { useEffect, useState } from "react";

function UserCard({ img, titulo, mensaje, fecha, adjunto }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const handleNavigation = (path) => {
    setCurrentPath(path);
    window.location.href = path;
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
          <img className="size-full transition-all duration-900" src={img} alt={titulo} />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
