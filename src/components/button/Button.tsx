import React, { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    [key: string]: any;
}

const Button: React.FC<IButtonProps> = ({ children, className, ...rest }) => {
    return (
        <button className={`bg-blue-500 p-3 text-sm text-white ${className}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
