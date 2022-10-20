import Image from "next/image";
import React from "react";
import { AiFillGitlab } from "react-icons/ai";
import { BsFillHddStackFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiNestjs, SiNextdotjs, SiGraphql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export interface IHomePageProps {
    [key: string]: any;
}

const HomePage: React.FC<IHomePageProps> = ({ id }) => {
    const renderAvatar = () => {
        return (
            <section>
                <div className="relative border border-blue-200 bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mx-auto mt-20">
                    <Image
                        src={require("../../../public/images/dev-ed-wave.png")}
                        alt="avatar"
                        // layout="fixed"
                    />
                </div>
            </section>
        );
    };
    const renderIntro = () => {
        return (
            <section className="mx-auto">
                <div className="flex flex-col items-center mt-20">
                    <h4 className="text-3xl text-blue-500">Do Xuan Trung</h4>
                    <p className="mt-3 px-3 sm:px-0 md:text-center max-w-md md:max-w-xl dark:text-white">
                        <span className="font-semibold">Hi</span>, my name is
                        Trung and you can call me Trump. Coding is my work, my
                        hobby and my passion.I am always looking for new
                        challenges, new projects, or some one with similiar
                        interest to work, to learn and to have fun with along
                        the way.So if you are also a developer or currently
                        finding one,please get intouch maybe we can talk , share
                        some ideas , experiences or can work together.
                    </p>
                </div>
            </section>
        );
    };

    const renderStack = () => {
        return (
            <section className="dark:text-white first-letter:md:text-center px-3 sm:px-0 w-full sm:w-auto mt-3">
                <div>
                    <BsFillHddStackFill className="inline" size={10} />
                    <span className="mx-2">My stacks:</span>
                </div>
                <div className="grid grid-cols-2 my-3 md:grid-cols-3">
                    <div className="flex items-center ml-6 mt-2">
                        <FaReact size={30} />
                        <a
                            className="cursor-pointer ml-2"
                            href="https://reactnative.dev/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            React Native
                        </a>
                    </div>
                    <div className="flex items-center ml-6 mt-2">
                        <FaReact size={30} />
                        <a
                            className="cursor-pointer ml-2"
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            ReactJs
                        </a>
                    </div>

                    <div className="flex items-center ml-6 mt-2">
                        <SiNextdotjs size={30} />
                        <a
                            className="cursor-pointer ml-2"
                            href="https://nextjs.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            NextJs
                        </a>
                    </div>
                    <div className="flex items-center ml-6 mt-2">
                        <SiNestjs size={30} />
                        <a
                            className="cursor-pointer ml-2"
                            href="https://nestjs.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            NestJs
                        </a>
                    </div>
                    <div className="flex items-center ml-6 mt-2">
                        <DiMongodb size={30} />
                        <a
                            className="cursor-pointer ml-2"
                            href="https://www.mongodb.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Mongodb
                        </a>
                    </div>
                    <div className="flex items-center ml-6 mt-2">
                        <SiGraphql size={30} />
                        <a
                            className="cursor-pointer ml-2"
                            href="https://www.apollographql.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Apollo Graphql
                        </a>
                    </div>
                </div>
            </section>
        );
    };

    const renderSocail = () => {
        return (
            <section className="flex flex-row gap-10 mt-5">
                <a
                    href="https://github.com/jokerhp6789"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsGithub size={50} className="dark:text-white" />
                </a>
                <a
                    href="https://gitlab.com/trung13988"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillGitlab size={50} className="dark:text-white" />
                </a>
                <a
                    href="https://www.linkedin.com/in/trung-do-xuan-71167b133/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin size={50} className="dark:text-white" />
                </a>
            </section>
        );
    };

    const renderFooter = () => {
        return (
            <div className="flex flex-col w-full md:flex-row mt-20 gap-5 md:gap-5">
                <Image
                    src={require("../../../public/images/web1.png")}
                    className=""
                />
                <Image
                    src={require("../../../public/images/web2.png")}
                    className=""
                />
            </div>
        );
    };

    return (
        <div className="pb-11 flex flex-col items-center text">
            {renderAvatar()}
            {renderIntro()}
            {renderStack()}
            {renderSocail()}
            {/* {renderFooter()} */}
        </div>
    );
};

export default HomePage;
