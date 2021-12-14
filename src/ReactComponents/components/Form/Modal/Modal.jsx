import React from "react";
import "./Modal.css";

export default function Modal({ text, close }) {
  return (
    <div className="success">
      <div className="success-message">
        <p>{text}</p>
        <button onClick={close}>X</button>
      </div>
    </div>
  );
}
