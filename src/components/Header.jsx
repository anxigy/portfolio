import React, { useEffect, useState } from "react";
import '../styles/header.css';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 5rem;
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  background-color: rgba(34, 34, 34, 0.5);
  width: 100%;
  z-index: 99999;

  background-color: ${(props) => props.headercolor};
  transition: background-color 0.2s ease-out;
  box-shadow: ${(props) =>
    props.headercolor !== "transparent"
      ? "0 2px 8px rgba(0, 0, 0, 0.1)"
      : "none"};
`;

export const Header = ({changeColor}) => {
  const [headerColor, setHeaderColor] = useState("rgba(34, 34, 34, 0.5)");

  useEffect(() => {
    setHeaderColor(changeColor ? 'transparent' : "rgba(34, 34, 34, 0.5)")
  },[changeColor])
  

  return (
    <HeaderContainer headercolor={headerColor}>
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
    </HeaderContainer>
  )
}