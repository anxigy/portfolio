import React, { useState } from "react";
import '../../styles/projects.css';

export const Project = ({data, idx}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="project__card"  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {
        isHovered ? (
          <div className="hover__container">
            <h1 className="card__title">{data.title}</h1>
            <p className="hover__date">{data.start} - {data.to}</p>
            <p className="hover__type">{data.type}</p>
            <a href={data.link} className="hover__link">상세보기</a>
            <p className="hover__description">해당 노션 페이지로 이동됩니다.</p>
          </div>
        ) : (
          <> 
            <div className="card__header">
              <p className="card__count"></p>
              <h1 className="card__title">{data.title}</h1>
              <p className="card__description">{data.description}</p>
            </div>
            <img src={data.image} alt={data.title} className="project__img"/>
          </>
        )
      }
    </div>
  )
}