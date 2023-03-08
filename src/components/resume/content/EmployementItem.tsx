import React, { useEffect, useState } from "react";
import ClassNames from "classnames";
import { MdArrowDropDownCircle } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { isEmpty } from "lodash";
import ImageCarousel from "../../../common/images/ImageCarousel";

export interface IEmploymentItemProps {
    label?: string;
    timeRange?: string;
    description?: string;
    children?: any;
    onClick?: () => void;
}

export interface IProjectItemProps {
    label?: string;
    icon?: any;
    children?: any;
    onClick?: () => void;
    expanding?: boolean;
    images?: Array<any>;
}

function generateRandom(min = 0, max = 20) {
    // find diff
    let difference = max - min;
    // generate random number
    let rand = Math.random();
    // multiply with difference
    rand = Math.floor(rand * difference);
    // add with min value
    rand = rand + min;
    return rand;
}

const AOS_ANIMATION = [
    "fade-up",
    "fade-down",
    "fade-right",
    "fade-left",
    "fade-up-right",
    "fade-up-left",
    "fade-down-right",
    "fade-down-left",
    "fade-down-right",
    "flip-up",
    "flip-down",
    "flip-right",
    "flip-left",
    "zoom-in",
    "zoom-in-up",
    "zoom-in-down",
    "zoom-in-left",
    "zoom-in-right",
    "zoom-out",
    "zoom-out-up",
    "zoom-out-down",
    "zoom-out-left",
    "zoom-out-right",
];

const EmploymentItem: React.FC<IEmploymentItemProps> = ({
    label,
    timeRange,
    description,
    children,
    onClick,
}) => {
    const icon = (
        <span className="flex absolute -left-4 border-2 border-blue-200 dark:border-blue-500 justify-center items-center w-7 h-7 bg-blue-200 rounded-full  dark:bg-blue-900">
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
    const [aosAnimation, setAosAnimation] = useState<string | null>(null);
    useEffect(() => {
        const randomNo = generateRandom();
        setAosAnimation(AOS_ANIMATION?.[randomNo]);
    }, []);

    return (
        <li
            className="mt-3"
            data-aos={aosAnimation || "flip-down"}
        >
            <div className="flex flex-row items-start">
                {icon}
                <div className="ml-4">
                    <h4 className=" text-blue-500 dark:text-blue-500 font-semibold">
                        {label}
                    </h4>
                    <time className="block text-sm text-blue-500 dark:text-blue-500 italic font-semibold">
                        {timeRange}
                    </time>
                </div>
            </div>
            <div className="ml-4 mt-1">
                <p className="text">{description}</p>
                {children}
            </div>
        </li>
    );
};

export default EmploymentItem;

export const ProjectItem: React.FC<IProjectItemProps> = ({
    label,
    icon,
    children,
    onClick,
    expanding,
    images,
}) => {
    const [aosAnimation, setAosAnimation] = useState<string | null>(null);
    useEffect(() => {
        const randomNo = generateRandom();
        setAosAnimation(AOS_ANIMATION?.[randomNo]);
    }, []);

    return (
        <li
            className="mt-3 border border-blue-200 bg-blue-200 bg-gradient-to-l from-blue-500 dark:border-blue-500 dark:bg-blue-900 p-3 rounded-md"
            data-aos={aosAnimation || "zoom-in-out"}
        >
            <div
                className="flex flex-row items-center justify-between dark:text-white hover:cursor-pointer"
                onClick={onClick}
            >
                <div className="flex flex-row items-center">
                    <h4 className="text-sm font-bold ">{label}</h4>
                    {icon}
                </div>
                <IoMdArrowDropdown
                    size={24}
                    onClick={onClick}
                    className={`cursor-pointer arrow-icon ${ClassNames({
                        "arrow-icon__upside-down": expanding,
                        "arrow-icon__drop-down": !expanding,
                    })} `}
                />
            </div>
            <div
                className={`mt-1 expander-content ${ClassNames({
                    "expander-content__expanding": expanding,
                    "expander-content__hiding": !expanding,
                })}`}
            >
                {children}
                {!isEmpty(images) && images && (
                    <div>
                        <label className="mb-3 block"> - Gallery:</label>
                        <div className="flex align-middle justify-center my-4">
                            <div className="md:w-1/2">
                                <ImageCarousel items={images} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </li>
    );
};
