import React from "react";
import ReactModal, { Props } from "react-modal";
import { CgCloseR } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";

export interface IModalProps extends Omit<Props, "isOpen"> {
    children?: any;
    open?: boolean;
    showCloseButton?: boolean;
}

const Modal: React.FC<IModalProps> = ({
    children,
    open = false,
    className,
    showCloseButton = true,
    shouldCloseOnEsc = true,
    onRequestClose,
    ...rest
}) => {
    const closeButton = (
        <div className="absolute right-0 top-0 left-0 bottom-0 pointer-events-none">
            <div
                className="absolute top-0 right-0 sm:top-5 sm:right-5 z-20 pointer-events-auto"
                onClick={onRequestClose}
            >
                <IoMdCloseCircle size={40} color="gray" />
            </div>
        </div>
    );
    return (
        <ReactModal
            {...rest}
            className={`${className}`}
            isOpen={open}
            ariaHideApp={false}
            shouldCloseOnEsc={shouldCloseOnEsc}
            onRequestClose={onRequestClose}
        >
            {showCloseButton && closeButton}
            {children}
        </ReactModal>
    );
};

export default Modal;
