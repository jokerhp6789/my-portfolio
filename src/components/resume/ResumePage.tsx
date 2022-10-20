import Image from "next/image";
import React, { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { IoMdOpen } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import EmployementItem, { ProjectItem } from "./content/EmployementItem";
import {
    ResumeEmploymentDataProjectType,
    ResumeEmploymentDataType,
    RESUME_EMPLOYEMENT_DATA,
} from "./data/ResumeData";

export interface IResumePageProps {
    [key: string]: any;
}

const ResumePage: React.FC<IResumePageProps> = ({ id }) => {
    const [activeExpanding, setactiveExpanding] = useState<string>();

    const renderRow = (label: string, content: string) => {
        return (
            <div className="flex flex-row justify-between pt-2">
                <div>{label}:</div>
                <div className="text-end">{content}</div>
            </div>
        );
    };

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
            <div className="flex flex-row items-center gap-3 ml-3">
                <a href={linkAndroid} target="_blank" rel="noreferrer">
                    <DiAndroid className="cursor-pointer" size={24} />
                </a>
                <a href={linkIos} target="_blank" rel="noreferrer">
                    <BsApple className="cursor-pointer" size={24} />
                </a>
            </div>
        );
    };

    const renderIconWeb = (link: string) => {
        return (
            <a href={link} target="_blank" rel="noreferrer">
                <IoMdOpen className="ml-3 cursor-pointer" size={24} />
            </a>
        );
    };

    const renderPersonalInfo = () => {
        return (
            <div className="md:col-span-4 border bg-gradient-to-br from-blue-500 dark:border-blue-500 flex flex-col items-center px-4 py-5 md:p-6 text-white rounded-md">
                <div className="d-none md:block">
                    <Image
                        src={require("../../../public/images/avatar.jpg")}
                        width={200}
                        height={200}
                        layout="fixed"
                        alt="avatar"
                        className="rounded-full"
                    />
                </div>
                <div className="block md:hidden">
                    <Image
                        src={require("../../../public/images/avatar-mobile.jpg")}
                        width={125}
                        height={125}
                        layout="fixed"
                        alt="avatar"
                        className="rounded-full"
                    />
                </div>

                <div className="text-xl my-3 font-bold text-blue-900 dark:text-blue-200">
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
                        "callto:+66917749984"
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
            </div>
        );
    };

    const renderEmpHistory = (
        <React.Fragment>
            {renderTitle("My timeline")}
            <ol className="relative border-l-2 border-blue-200 dark:border-blue-500 ml-2">
                {RESUME_EMPLOYEMENT_DATA.map(
                    (item: ResumeEmploymentDataType) => {
                        const {
                            label,
                            timeRange,
                            description,
                            projects = [],
                        } = item || {};
                        const empId = `${label}_${timeRange}_${description}`;
                        return (
                            <EmployementItem
                                key={empId}
                                label={timeRange}
                                description={description}
                                timeRange={label}
                            >
                                <label className="text-sm font-bold my-2">
                                    Projects:
                                </label>
                                {Array.isArray(projects) && projects?.length > 0
                                    ? projects?.map?.(
                                          (
                                              project: ResumeEmploymentDataProjectType,
                                              index
                                          ) => {
                                              const {
                                                  iconAndroidIos,
                                                  iconWeb,
                                                  content,
                                                  label: projectLabel,
                                              } = project as any;
                                              const projectId = `${empId}_${iconWeb}_${iconAndroidIos}_${projectLabel}_${index}`;
                                              const isExpading =
                                                  projectId === activeExpanding;
                                              return (
                                                  <ProjectItem
                                                      expanding={isExpading}
                                                      key={projectId}
                                                      onClick={() => {
                                                          if (isExpading) {
                                                              return setactiveExpanding(
                                                                  undefined
                                                              );
                                                          }
                                                          setactiveExpanding(
                                                              undefined
                                                          );
                                                          setTimeout(
                                                              () =>
                                                                  setactiveExpanding(
                                                                      projectId
                                                                  ),
                                                              350
                                                          );
                                                      }}
                                                      label={projectLabel}
                                                      icon={
                                                          iconWeb
                                                              ? renderIconWeb(
                                                                    iconWeb
                                                                )
                                                              : iconAndroidIos
                                                              ? renderAndroidIos(
                                                                    iconAndroidIos
                                                                )
                                                              : null
                                                      }
                                                  >
                                                      {content}
                                                  </ProjectItem>
                                              );
                                          }
                                      )
                                    : projects}
                            </EmployementItem>
                        );
                    }
                )}
            </ol>
        </React.Fragment>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-10 md:gap-5 text-base">
            {renderPersonalInfo()}
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
        </div>
    );
};

export default ResumePage;
