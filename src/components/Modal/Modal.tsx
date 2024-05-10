import React from "react";
import { CloseButton, ModalContent, ModalWrapper } from "./Modal.styles";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
  return (
    <ModalWrapper visible={visible} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
