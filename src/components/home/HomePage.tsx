import Image from "next/image";
import React, { useEffect } from "react";
import { AiFillGitlab } from "react-icons/ai";
import { BsFillHddStackFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiNestjs, SiNextdotjs, SiGraphql } from "react-icons/si";
import { IoShareSocialOutline } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import ViewShowMore from "../../common/view/ViewShowMore";
import ReactParticles from "../../common/particles/ReactParticles";
import { styled } from "styled-components";

export interface IHomePageProps {
    [key: string]: any;
}

const HomePage: React.FC<IHomePageProps> = ({ id }) => {
    const renderAvatar = () => {
        return (
            <div className="bounce-in-top relative border border-blue-200 bg-gradient-to-b from-blue-500 rounded-full w-60 h-60 sm:w-80 sm:h-80 mx-auto mt-5 home-page__avatar-wrapper">
                <Image
                    src={require("../../../public/images/dev-ed-wave.png")}
                    alt="Do Xuan Trung"
                    className="home-page__avatar"
                />
            </div>
        );
    };
    const renderIntro = () => {
        return (
            <section className="mx-auto">
                <div className="flex flex-col items-center mt-5">
                    <h1 className="sm:text-3xl text-blue-500 text-focus-in text-xl mt-3 font-normal">
                        Do Xuan Trung
                    </h1>
                    <div className="mt-5 px-3 sm:px-0 md:text-center max-w-md md:max-w-xl dark:text-white text-focus-in">
                        <ViewShowMore className="text-center">
                            {`<span className="font-semibold">Hi</span>,my name is
                            Trung, currently working as full-stack developer in Bangkok,Thailand. I enjoy coding and have been working in this field for the past 6 years. If you are looking for someone to help you to build a website, mobile apps or APIs , don't hesitate to contact me , I will try my best to delivery a high quality result for you !`}
                        </ViewShowMore>
                    </div>
                </div>
            </section>
        );
    };

    const renderStack = () => {
        return (
            <section className="dark:text-white first-letter:md:text-center px-3 sm:px-0 w-full sm:w-auto mt-3 md:mt-5 z-10">
                <div className="w-full flex justify-center items-center z-10">
                    <BsFillHddStackFill className="inline z-10" size={15} />
                    <span className="mx-4 text-lg z-10 font-normal">
                        My stacks
                    </span>
                </div>
                <div className="grid grid-cols-2 my-3 md:grid-cols-3">
                    <div className="flex items-center ml-6 mt-3 z-10">
                        <div className="border border-2 border-blueReact rounded-sm h-8 w-6 flex justify-center items-center">
                            <FaReact size={15} className="text-blueReact" />
                        </div>

                        <a
                            className="cursor-pointer ml-4"
                            href="https://reactnative.dev/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            React Native
                        </a>
                    </div>
                    <div className="flex items-center ml-6 mt-3 z-10">
                        <FaReact size={30} className="text-blueReact" />
                        <a
                            className="cursor-pointer ml-4"
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            ReactJs
                        </a>
                    </div>

                    <div className="flex items-center ml-6 mt-3 z-10">
                        <SiNextdotjs
                            size={30}
                            className="text-blackNext dark:text-white"
                        />
                        <a
                            className="cursor-pointer ml-4"
                            href="https://nextjs.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            NextJs
                        </a>
                    </div>
                    <div className="flex items-center ml-6 mt-3 z-10">
                        <SiNestjs size={30} className="text-redNest" />
                        <a
                            className="cursor-pointer ml-4"
                            href="https://nestjs.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            NestJs
                        </a>
                    </div>
                    <div className="flex items-center ml-6 mt-3 z-10">
                        <DiMongodb size={30} className="text-greenMongo" />
                        <a
                            className="cursor-pointer ml-4"
                            href="https://www.mongodb.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Mongodb
                        </a>
                    </div>
                    <div className="flex items-center ml-6 mt-3 z-10">
                        <SiGraphql size={30} className="text-purpleGraphql" />
                        <a
                            className="cursor-pointer ml-4"
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

    const renderSocial = () => {
        return (
            <section className="relative w-full h-40 mt-3 md:mt-10">
                <div className="w-full flex justify-center items-center z-10">
                    <IoShareSocialOutline
                        className="inline z-10 dark:text-white"
                        size={25}
                    />
                    <span className="mx-4 text-lg z-10 dark:text-white font-normal">
                        My social
                    </span>
                </div>
                <div className="z-10 flex flex-row items-center justify-center gap-14 md:gap-20 mt-5">
                    <a
                        href="https://github.com/jokerhp6789"
                        target="_blank"
                        rel="noreferrer"
                        className="z-10"
                    >
                        <BsGithub size={50} className="dark:text-white" />
                    </a>
                    <a
                        href="https://gitlab.com/trung13988"
                        target="_blank"
                        rel="noreferrer"
                        className="z-10"
                    >
                        <AiFillGitlab size={50} className="dark:text-white" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/trung-do-xuan-71167b133/"
                        target="_blank"
                        rel="noreferrer"
                        className="z-10"
                    >
                        <BsLinkedin size={50} className="dark:text-white" />
                    </a>
                </div>
            </section>
        );
    };

    // useEffect(() => {
    //     const interval = setInterval(() => testSetInterval(), 3000);
    //     return () => clearInterval(interval);
    // }, []);

    // function testSetInterval() {
    //     console.log("Get in interval", new Date().valueOf());
    // }

    return (
        <HomePageStyled className="flex flex-col items-center">
            {renderAvatar()}
            {renderIntro()}
            <div className="relative w-full">
                {renderStack()}
                {renderSocial()}
                <ReactParticles />
            </div>
        </HomePageStyled>
    );
};

export default HomePage;

const HomePageStyled = styled.div``;
