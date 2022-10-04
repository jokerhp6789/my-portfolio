import Image from "next/image";
import React from "react";
import { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Button from "../button/Button";

export interface IResumePageProps {
    [key: string]: any;
}

const ResumePage: React.FC<IResumePageProps> = ({ id }) => {
    const [showAuthModal, setShowAuthModal] = useState(false);

    const renderRow = (label: string, content: string) => {
        return (
            <div className="flex flex-row justify-between pt-2">
                <div>{label}:</div>
                <div className="text-end">{content}</div>
            </div>
        );
    };

    const renderIcon = (icon: any) => {
        return <div className="bg-white p-2 rounded-full">{icon}</div>;
    };

    const renderInfo = () => {
        return (
            <div className="w-full">
                {renderRow("Email", "trung13988@gmail.com")}
                {renderRow("Phone", "0917749984")}
                {renderRow("Current Address", "Bangkok,Thailand")}
            </div>
        );
    };

    const renderLabel = (text: string, className?: string) => (
        <h3
            className={`text-xl text-blue-500 font-bold block mb-2 ${className}`}
        >
            {text}
        </h3>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-10 md:gap-5">
            <div className="md:col-span-4 bg-blue-500 flex flex-col items-center px-4 py-5 md:p-6 text-white rounded-md">
                <Image
                    src={require("../../../public/images/avatar.png")}
                    width={100}
                    height={100}
                    layout="fixed"
                />
                <div className="text-xl my-3 font-bold">Do Xuan Trung</div>
                <div className="flex flex-row gap-3">
                    {renderIcon(<AiFillPhone className="text-blue-500" />)}
                    {renderIcon(<MdEmail className="text-blue-500" />)}
                </div>
            </div>
            <div className="dark:text-white md:col-span-6">
                {renderLabel("Profile")}
                <p className="">
                    I am always seeking new challenges and ways to solve
                    problems. As part of a team or on my own, I value good
                    communication and teamwork with others from different
                    backgrounds. My goal is to help people as much as possible
                    using my technical expertise and skills. On the personal
                    side, I am passionate about photography, travel, aquarium
                    and gardening . When I have time I usually practice , read
                    books , go swimming, go hiking and play video games.
                </p>
                {renderLabel("Employment History", "mt-3")}
                <p className="">
                    I am always seeking new challenges and ways to solve
                    problems. As part of a team or on my own, I value good
                    communication and teamwork with others from different
                    backgrounds. My goal is to help people as much as possible
                    using my technical expertise and skills. On the personal
                    side, I am passionate about photography, travel, aquarium
                    and gardening . When I have time I usually practice , read
                    books , go swimming, go hiking and play video games.
                </p>
            </div>
            {/* <div className="mt-5 flex w-full justify-end">
                <Button className="p-2" onClick={() => setShowAuthModal(true)}>
                    Edit Mode
                </Button>
            </div> */}
        </div>
    );
};

export default ResumePage;
