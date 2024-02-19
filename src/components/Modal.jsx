import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        modal.current.showModal();
      },
      close: () => {
        modal.current.close();
      },
    };
  });
  return createPortal(
    <dialog ref={modal}>
      {children}
      <form method="dialog">
        <button style={{ position: "absolute", top: 0, right: 0 }}>X</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
