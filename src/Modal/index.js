import React from "react";
import ReactDOM from "react-dom"

function Modal({ childern }){
    return ReactDOM.createPortal(
        <div className="Modal">
            {childern}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };