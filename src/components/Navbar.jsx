import React from 'react';


const Navbar = () => {
  let backgroundImageURL =
    'https://www.mundodeportivo.com/alfabeta/hero/2018/10/127018.alfabetajuega-pokemon-wallpapers-9-071115.jpg?width=1200&aspect_ratio=16:9';

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <img
          src={backgroundImageURL}
          className="navbar-image"
          alt="Fondo de Navbar"
        />
      </div>
    </nav>
  );
};

export default Navbar;