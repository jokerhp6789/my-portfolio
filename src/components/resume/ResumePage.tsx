import React, { useState } from "react";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { IoMdOpen } from "react-icons/io";
import ViewShowMore from "../../custom/view/ViewShowMore";
import EmployementItem, { ProjectItem } from "./content/EmployementItem";
import PersonalInfo from "./content/PersonalInfo";
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
        <h3 className={`dark:text-white font-bold block my-1 ${className}`}>
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

    const renderEmpHistory = (
        <React.Fragment>
            {renderTitle("My timeline", "mt-2")}
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
                                <label className="text-sm font-bold mt-2">
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
            <PersonalInfo />
            <div className="dark:text-white md:col-span-6">
                {renderTitle("Intro", "mt-2")}
                <ViewShowMore className="">
                    {`<p className="">
                    I am always seeking new challenges and ways to solve
                    problems. As part of a team or on my own, I value good
                    communication and teamwork with others from different
                    backgrounds. My goal is to help people as much as possible
                    using my technical expertise and skills. On the personal
                    side, I am passionate about photography, travel, aquarium
                    and gardening . When I have time I usually practice , read
                    books , go swimming, go hiking and play video games.
                </p>`}
                </ViewShowMore>
                {renderEmpHistory}
            </div>
        </div>
    );
};

export default ResumePage;
