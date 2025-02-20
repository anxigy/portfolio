import React, { useEffect } from "react";
import Modal from "react-modal";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "../../styles/modal.css";
import { NotionAPI } from "notion-client";


export const NotionModal =  ({ isOpen, onClose, pageId }) => {

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
