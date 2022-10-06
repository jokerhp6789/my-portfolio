import React, { useState } from "react";
import { MdArrowDropDownCircle } from "react-icons/md";

export interface IEmployementItemProps {
    label?: string;
    timeRange?: string;
    description?: string;
    children?: any;
}

export interface IProjectItemProps {
    label?: string;
    icon?: any;
    children?: any;
}

const EmployementItem: React.FC<IEmployementItemProps> = ({
    label,
    timeRange,
    description,
    children,
}) => {
    const icon = (
        <span className="flex absolute -left-4 justify-center items-center w-7 h-7 bg-blue-200 rounded-full ring-9 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </span>
    );
    return (
        <li className="mt-3">
            <div className="flex flex-row items-start">
                {icon}
                <div className="ml-4">
                    <h4 className="text font-bold text-blue-500">{label}</h4>
                    <time className="block text-xs mt-1 italic">
                        {timeRange}
                    </time>
                </div>
            </div>
            <div className="ml-4 mt-2">
                <p className="text">{description}</p>
                {children}
            </div>
        </li>
    );
};

export default EmployementItem;

export const ProjectItem: React.FC<IProjectItemProps> = ({
    label,
    icon,
    children,
}) => {
    const [expanding, setExpanding] = useState(false);
    return (
        <li className="mt-3 border border-1 border-blue-500 bg-blue-200 dark:border-blue-500 dark:bg-blue-900 p-3 rounded-md">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                    <h4 className="text-sm font-bold">{label}</h4>
                    {icon}
                </div>
                <MdArrowDropDownCircle
                    size={24}
                    onClick={() => {
                        setExpanding(!expanding);
                    }}
                    className="cursor-pointer"
                />
            </div>
            {expanding && <div className="mt-1">{children}</div>}
        </li>
    );
};
