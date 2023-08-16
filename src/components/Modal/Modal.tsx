import React from "react";

interface IModalProps {
  onClose: () => void;
  onAction: () => void;
  background: string;
  width: number;
  height: number;
  actionText: string;
  children: React.ReactNode;
}

const Modal = ({
  width,
  height,
  onClose,
  onAction,
  actionText,
  background,
  children,
}: IModalProps) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        background: background,
        margin: "0 auto",
        zIndex: 1,
        padding: "5px 10px",
        position: "relative",
      }}
    >
      <h1>Edit Todo</h1>
      <span
        style={{
          fontSize: "40px",
          position: "absolute",
          right: 10,
          top: 0,
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        &times;
      </span>
      {children}
      <button onClick={onAction}>{actionText}</button>
    </div>
  );
};

export default Modal;
