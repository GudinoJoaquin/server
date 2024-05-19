import { useEffect, useState } from "react";

export default function UserCard({ img, titulo, mensaje, fecha, adjunto }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleNavigation = (path) => {
    setCurrentPath(path);
    window.location.href = path;
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <div className="relative w-full max-w-md">
        <div className="overflow-hidden rounded-md">
          <img className="w-full h-auto object-cover filter brightness-50" src={img} alt={titulo} />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4 bg-white bg-opacity-20 backdrop-blur-lg p-2 rounded-md">
              <h5 className="text-white text-lg font-bold">{titulo}</h5>
            </div>
            <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-lg p-2 rounded-md">
              <h5 className="text-white text-sm">{fecha}</h5>
            </div>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-md shadow-md">
          <p className="text-black dark:text-white">{truncateText(mensaje, 700)}</p>
          <button
            data-ripple-light="true"
            type="button"
            className="mt-2 p-2 bg-blue-500 text-white rounded"
            onClick={() => handleNavigation(`${adjunto}`)}
          >
            Saber más
          </button>
        </div>
      </div>
    </div>
  );
}
