import React from "react";
import '../styles/header.css';

export const Header = () => {
  return (
    <header>
      <div className="header__logo">
        {/* <img class="header__logo__img" src="images/logo.png" alt=""> */}
        <img src={require('../assets/logo.png')} alt="" className="header__logo__img"/>
      </div>
      <div className="header__info">
        <p className="header__description">FRONTEND DEVELOP<br/>PORTFOLIO / UPDATED: 23.11.10</p>
        <a className="header__contact" href="#footer" title="go to contact">
          <p>CONTACT</p>
        </a>
      </div>
    </header>
  )
}