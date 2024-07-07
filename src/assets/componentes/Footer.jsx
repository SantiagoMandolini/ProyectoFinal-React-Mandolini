import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Marcas disponibles en la tienda */}
      <div className="logos">
        <h2>Encuentra las mejores marcas:</h2>
        <div className="logos-marcas">
          <img src="./img/Nintendo-Logo.webp" alt="Logo Nintendo" />
          <img src="./assets/img/Xbox-Logo.webp" alt="Logo Xbox" />
          {/* Add more logos here */}
        </div>
        {/* Misma imagenes para ilusion de bucle */}
        <div className="logos-marcas-segundo">
          <img src="./img/Nintendo-Logo.webp" alt="Logo Nintendo" />
          <img src="./assets/componentes/img/Xbox-Logo.webp" alt="Logo Xbox" />
          {/* Add more logos here */}
        </div>
      </div>
      {/* Redes sociales al final de la pagina */}
      <div className="footer-content">
        <img src="./img/twitter.webp" alt="logo twitter" className="footer-image" />
        <p>@TechPLayCentral</p>
      </div>
    </footer>
  );
};

export default Footer;