import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="./assets/componentes/img/Logotipo.webp" alt="Logo" />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!isHomePage && (
              <>
                <li className="nav-item">
                  <Link className="nav-link btn-green" to="/ofertas">
                    Ofertas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn-green" to="/telefonos">
                    Teléfonos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn-green" to="/consolas">
                    Consolas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn-green" to="/juegos">
                    Juegos
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
