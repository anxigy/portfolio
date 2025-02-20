import React, { useState } from "react";
import '../../styles/projects.css';
import { NotionModal } from "./NotionModal";

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
            <button className="hover__link" onClick={() => setIsModalOpen(true)}>
              상세보기
            </button>
            <p className="hover__description">노션 페이지로 이동됩니다.</p>
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
       <NotionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pageId={data.link} 
      />
    </div>
  )
}