import React from "react";
import '../styles/header.css';

export const Header = () => {
  return (
    <header>
      <div className="header__logo">
        {/* <img class="header__logo__img" src="images/logo.png" alt=""> */}
        <img src={require('../assets/logo.png')} alt="" className="header__logo__img"/>
      </div>
      <ul className="header__menu">
        <li className="menu-item">ABOUT</li>
        <li className="menu-item active">CAREER</li>
        <li className="menu-item">PROJECT</li>
        <li className="menu-item">EDUCATION</li>
      </ul>
      <div className="header__info">
        <p className="header__description">FRONTEND DEVELOP / UPDATED: 25.01.24</p>
      </div>
    </header>
  )
}