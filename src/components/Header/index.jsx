import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        Formulário <br />
        para compra de <br />
        <span 
          className="header__title--bold">
            Pacote de Stickers
        </span>
      </h1>
    </header>
  );
};

export default Header;
