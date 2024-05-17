// Navbar.jsx

import { useState, useEffect, } from "react";
import "../css/navbar.css";
import "../css/buttom_login.css";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useHistory } from "react-router-dom";


function Navbar() {
  const [nav, setNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Estado para controlar si el usuario ha iniciado sesión
  const [userRol, setUserRol] = useState('');
  const history = useHistory();

  

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // Verificar en el localStorage si el usuario ha iniciado sesión anteriormente
    const userLoggedIn = localStorage.getItem('loggedIn');
    if (userLoggedIn === 'true') {
      setLoggedIn(true);
      // Obtener el rol del usuario desde el localStorage
      const userRolFromStorage = localStorage.getItem('userRol');
      setUserRol(userRolFromStorage);
    }
  }, []);

  const handleLogout = () => {
    // Limpiar el estado de inicio de sesión en el localStorage y en el estado
    localStorage.setItem('loggedIn', 'false');
    setLoggedIn(false);

    history.push('/login');
    window.location.reload(); // Recargar la página
  };

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <label className="manu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        <Link to="/" className="home">
          <li>Inicio</li>
        </Link>
        <Link to="/menu" className="home">
          <li>Menu</li>
        </Link>
        {userRol === 'admin' && (
          <Link to="/product" className="services">
            <li>Crear Productos</li>
          </Link>
        )}

        <Link to="/about" className="services">
          <li>Quiénes somos</li>
        </Link>

        <Link to="/contact" className="services">
          <li>Contacto</li>
        </Link>

        {/* Renderizado condicional del botón de ingreso o cierre de sesión */}
        {loggedIn ? (
          <button className="button_login" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        ) : (
          <a className="button_login" id="miBoton" href="/login">
            Ingresar
          </a>
        )}
      </ul>
      <button className="mobile-menu-icon" id="btn1" onClick={() => setMobile(!mobile)}>
        {mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
