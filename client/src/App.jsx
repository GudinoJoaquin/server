import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserAnuncios from "./pages/@user/UserAnuncios";
import AdminAnuncios from "./pages/@admin/AdminAnuncios";
import CrearAnuncio from "./pages/@admin/CrearAnuncio";
import ModificarAnuncio from "./pages/@admin/ModificarAnuncios";
import Login from "./pages/@admin/Login";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";
// import Home from "./pages/home/Home.jsx";
// import Nosotros from "./pages/home/Nosotros.jsx";

export default function App() {
  const [userType, setUserType] = useState("user");

  useEffect(() => {
    // Obtener el valor de la cookie "userType"
    const userTypeCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userType="));

    // Establecer el tipo de usuario
    if (userTypeCookie) {
      setUserType(userTypeCookie.split("=")[1]);
    }
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="anuncios.vercel.app/" element={<UserAnuncios />} />
        <Route path="anuncios.vercel.app/admin" element={<AdminAnuncios />} />
        <Route path="anuncios.vercel.app/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}
