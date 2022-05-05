import React from "react";
import { ReactDOM } from "react";;

function Modal({ children }) {
        return ReactDOM.createPortal(
            children,
            document.getElementById('modal')
        );
};

export { Modal };