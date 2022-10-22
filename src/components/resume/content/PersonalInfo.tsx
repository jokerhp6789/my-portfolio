import Image from "next/image";
import ClassNames from "classnames";
import { IoIosArrowDropdown } from "react-icons/io";
import React, { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export interface IPersonalInfoProps {
    [key: string]: any;
}

const INFORMATION = [
    {
        label: "Nationality",
        content: "Vietnamese",
    },
    // {
    //     label: "Birthday",
    //     content: "13/09/1988",
    // },
    {
        label: "Languages",
        content: "Vietnamese, English",
    },
    {
        label: "Current Address",
        content: "Bangkok,Thailand",
    },
    {
        label: "Birth Place",
        content: "Haiphong,Vietnam",
    },
];

const PersonalInfo: React.FC<IPersonalInfoProps> = ({ id }) => {
    const [expanding, setExpanding] = useState(false);

    const renderIcon = (icon: any, action: () => any, href?: string) => {
        return (
            <a
                className=" p-2 rounded-full cursor-pointer bg-blue-200 dark:bg-blue-900"
                onClick={action}
                href={href}
            >
                {icon}
            </a>
        );
    };

    const renderInfoRow = (
        left: string,
        right: string,
        options?: { showBorder?: boolean }
    ) => {
        const { showBorder } = options || {};
        return (
            <div
                className={`flex flex-row items-center w-full justify-between text-sm text-black dark:text-blue-200 py-3 ${ClassNames(
                    {
                        "border-t border-blue-500 border-opacity-60  dark:border-blue-200  dark:border-opacity-30":
                            showBorder,
                    }
                )}`}
            >
                <label className="block font-semibold">{left}</label>
                <label className="block">{right}</label>
            </div>
        );
    };

    const renderExpandButton = () => {
        return (
            <div className="md:hidden w-full flex justify-end mt-3">
                <div onClick={() => setExpanding(!expanding)}>
                    <IoIosArrowDropdown
                        size={30}
                        className={`text-blue-400 dark:text-blue-500 arrow-icon  ${ClassNames(
                            {
                                "rotate-180": expanding,
                            }
                        )}`}
                    />
                </div>
            </div>
        );
    };

    const renderInformation = () => {
        return (
            <div
                className={`w-full expander-content ${ClassNames(
                    {
                        "expander-content__expanding": expanding,
                        "expander-content__hiding": !expanding,
                    }
                )} md:max-h-max`}
            >
                {INFORMATION.map((item, index) => {
                    const { label, content } = item || {};
                    return renderInfoRow(label, content, {
                        showBorder: index !== 0,
                    });
                })}
            </div>
        );
    };

    return (
        <div className="md:col-span-4 border bg-gradient-to-br from-blue-500 dark:border-blue-500 flex flex-col items-center px-4 py-5 md:py-6 text-white rounded-md">
            <div className="d-none md:block">
                <Image
                    src="/images/avatar.jpg"
                    width={200}
                    height={200}
                    layout="fixed"
                    alt="avatar"
                    className="rounded-full"
                />
            </div>
            <div className="block md:hidden">
                <Image
                    src={"/images/avatar-mobile.jpg"}
                    width={125}
                    height={125}
                    layout="fixed"
                    alt="avatar"
                    className="rounded-full"
                />
            </div>

            <div className="text-xl my-3 font-semibold text-blue-700 dark:text-blue-200 dark:sm:text-blue-200">
                Do Xuan Trung
            </div>
            <div className="flex flex-row gap-3">
                {renderIcon(
                    <AiFillPhone className="text-blue-500" />,
                    () => {
                        if (window !== undefined) {
                            navigator.clipboard.writeText("+66917749984");
                        }
                    },
                    "tel:+66917749984"
                )}
                {renderIcon(
                    <MdEmail className="text-blue-500" />,
                    () => {
                        if (window !== undefined) {
                            navigator.clipboard.writeText(
                                "trung13988@gmail.com"
                            );
                        }
                    },
                    "mailto:trung13988@gmail.com"
                )}
            </div>
            {renderInformation()}
            {renderExpandButton()}
        </div>
    );
};

export default PersonalInfo;
