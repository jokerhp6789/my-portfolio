import React from "react";
import ReactModal, { Props } from "react-modal";

export interface IModalProps extends Omit<Props, "isOpen"> {
    children?: any;
    open?: boolean;
}

const Modal: React.FC<IModalProps> = ({
    children,
    open = false,
    className,
    ...rest
}) => {
    return (
        <ReactModal
            {...rest}
            className={` ${className}`}
            isOpen={open}
            ariaHideApp={false}
        >
            {children}
        </ReactModal>
    );
};

export default Modal;
