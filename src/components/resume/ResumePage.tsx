import Image from "next/image";
import React from "react";
import { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoMdOpen } from "react-icons/io";
import { DiAndroid } from "react-icons/di";
import { BsApple } from "react-icons/bs";
import Button from "../button/Button";
import EmployementItem, { ProjectItem } from "./content/EmployementItem";

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

    const renderIcon = (icon: any, action: () => any) => {
        return (
            <div
                className=" p-2 rounded-full cursor-pointer bg-blue-200 dark:bg-blue-900"
                onClick={action}
            >
                {icon}
            </div>
        );
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

    const renderTitle = (text: string, className?: string) => (
        <h3 className={` text-white font-bold block my-1 ${className}`}>
            {text}
        </h3>
    );

    const renderAndroidIos = ({
        linkAndroid,
        linkIos,
    }: {
        linkIos: string;
        linkAndroid: string;
    }) => {
        return (
            <div className="flex flex-row items-center gap-2 ml-2">
                <a href={linkAndroid} target="_blank" rel="noreferrer">
                    <DiAndroid className="cursor-pointer" size={24} />
                </a>
                <a href={linkIos} target="_blank" rel="noreferrer">
                    <BsApple className="cursor-pointer" size={24} />
                </a>
            </div>
        );
    };

    const renderEmpHistory = (
        <React.Fragment>
            {renderTitle("Employment history")}
            <ol className="relative border-l-2 border-blue-200 dark:border-blue-900 ml-2">
                <EmployementItem
                    label="Software Developer at Lotus Bedding Groups, Bangkok"
                    timeRange="FEBRUARY 2020 — PRESENT"
                    description="Working as software developer, create and maintain company's websites and applications"
                >
                    <label className="font-bold my-2">Projects:</label>
                    <ProjectItem
                        label="Sale Infinity X - Web"
                        icon={
                            <IoMdOpen
                                className="ml-3 cursor-pointer"
                                size={24}
                            />
                        }
                    >
                        <p>
                            - Description: Web page to place order , create and
                            manage products , includes dashboard page to monitor
                            data, create cart rules , promotions, transfer and
                            receive stocks.
                        </p>
                        <p>
                            - Tech: Reactjs, Rest API , React-redux, SCSS,
                            Material UI , Bootstrap,Firebase Messaging,
                        </p>
                    </ProjectItem>
                    <ProjectItem
                        label="Sale Infinity X - App"
                        icon={renderAndroidIos({
                            linkAndroid:
                                "https://play.google.com/store/apps/details?id=com.lotusbedding.onlinesalesorder&hl=th&gl=US",
                            linkIos:
                                "https://apps.apple.com/th/app/sales-infinity-x/id1521821249",
                        })}
                    >
                        <p>
                            - Description: app version includes all
                            functionality of the web version
                        </p>
                        <p>
                            - Tech: React Native, Rest API ,React-redux,Firebase
                            Messaging, ...
                        </p>
                    </ProjectItem>
                </EmployementItem>
                <EmployementItem
                    label="Software Developer at Lotus Bedding Groups, Bangkok"
                    timeRange="FEBRUARY 2020 — PRESENT"
                    description="Working as software developer in create and maintain company website and application . Current stack is BE and FE , with ReactJS , NextJS , React-native for FE , and NestJS and MongoDB for BE"
                >
                    Working Lotus
                </EmployementItem>
            </ol>
        </React.Fragment>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-10 md:gap-5 text-base">
            <div className="md:col-span-4 border border-2 border-blue-200 dark:border-blue-900 flex flex-col items-center px-4 py-5 md:p-6 text-white rounded-md">
                <Image
                    src={require("../../../public/images/avatar.jpg")}
                    width={200}
                    height={200}
                    layout="fixed"
                    alt="avatar"
                    className="rounded-full"
                />
                <div className="text-xl my-3 font-bold text-blue-200">
                    Do Xuan Trung
                </div>
                <div className="flex flex-row gap-3">
                    {renderIcon(
                        <AiFillPhone className="text-blue-500" />,
                        () => {
                            if (window !== undefined) {
                                navigator.clipboard.writeText("+66917749984");
                            }
                        }
                    )}
                    {renderIcon(<MdEmail className="text-blue-500" />, () => {
                        if (window !== undefined) {
                            navigator.clipboard.writeText(
                                "trung13988@gmail.com"
                            );
                        }
                    })}
                </div>
            </div>
            <div className="dark:text-white md:col-span-6">
                {renderTitle("About myself", "mt-2")}
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
                {renderEmpHistory}
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
