import React, { useEffect } from "react";
import Modal from "react-modal";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "../../styles/modal.css";
import { NotionAPI } from "notion-client";

Modal.setAppElement("#root"); // 모달 접근성을 위한 설정

export const NotionModal =  ({ isOpen, onClose, pageId }) => {
  const notion = new NotionAPI();
  const fetchNotion = async () => {
    try {
    const recordMap = await notion.getPage('a59d95547dc84417b15488d2e29a46b5')
    console.log(recordMap)
    } catch (error) {
        
    }
  }
  useEffect(() => {
    if(pageId!==undefined) fetchNotion()
  },[pageId])

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Notion Page"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="notion-container">
        {/* <NotionRenderer recordMap={recordMap}  /> */}
    </div>
    </Modal>
  );
};
