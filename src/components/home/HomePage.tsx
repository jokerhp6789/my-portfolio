import Image from "next/image";
import React from "react";
import { AiFillGitlab } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export interface IHomePageProps {
    [key: string]: any;
}

const HomePage: React.FC<IHomePageProps> = ({ id }) => {
    const renderBody = () => {
        return (
            <div className="">
                <section className="mx-auto">
                    <div className="relative bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mx-auto mt-20">
                        <Image
                            src={require("../../../public/images/dev-ed-wave.png")}
                            alt="avatar"
                            // layout="fixed"
                        />
                    </div>
                    <div className="flex flex-col items-center mt-20">
                        <h4 className="text-3xl text-blue-500">
                            Do Xuan Trung
                        </h4>
                        <p className="my-5 text-center max-w-md lg: dark:text-white">
                            Every utility class in Tailwind can be applied
                            conditionally by adding a modifier to the beginning
                            of the class name that describes the condition you
                            want to target.
                        </p>
                        <div className="flex flex-row gap-10">
                            <a
                                href="https://github.com/jokerhp6789"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsGithub
                                    size={50}
                                    className="dark:text-white"
                                />
                            </a>
                            <a
                                href="https://gitlab.com/trung13988"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiFillGitlab
                                    size={50}
                                    className="dark:text-white"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/trung-do-xuan-71167b133/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsLinkedin
                                    size={50}
                                    className="dark:text-white"
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
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
        <div className="">
            {renderBody()}
            {renderFooter()}
        </div>
    );
};

export default HomePage;
