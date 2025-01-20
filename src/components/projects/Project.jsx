import React from "react";
import '../../styles/projects.css';

export const Project = ({data, idx}) => {
  return (
    <li className="project__card">
      <div className="card__haeder">
        <p className="card__count">01 - 06</p>
        <h1 className="card__title">{data.title}</h1>
      </div>
      <p className="card__description">{data.description}</p>
      <ul className="card__contents">
        <li className="content">
          <p className="content__title">TYPE</p>
          <p className="content__data">{data.type}</p>
        </li>
        <li className="content">
          <p className="content__title">DATE</p>
          <p className="content__data">2021.01 ~ 2022.12</p>
        </li>
      </ul>
      <div className="card__link">
        <a className="card__contact" title="go to contact">
          <p className="link__title">MORE</p>
        </a>
      </div>
      <img src={require('../../assets/wnms.png')} alt="pethroom" className="project__img"/>
    </li>
  )
}