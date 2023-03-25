import React from "react";
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fc1212;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  width: 300px;
  height: 400px;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  border-radius: 50px;
  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
`;

function Modal({ onClose, children }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>
          <FaRegTimesCircle />
        </ModalCloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
