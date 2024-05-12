import React from "react";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 Not found</h1>
        <p className="text-lg text-gray-600">
          La página que estás buscando no se ha encontrado.
        </p>
        <p className="text-lg text-gray-600">
          Regresa a{" "}
          <a href="/" className="text-blue-500 hover:underline">
            página principal
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default NotFound;
