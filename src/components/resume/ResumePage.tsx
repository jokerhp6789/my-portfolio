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
                  - As a full stack developer with expertise in React, React Native, and NodeJs, I have a strong foundation in both front-end and back-end development. 
                  I have more than 5 years of experience in FE side. I have a passion for creating intuitive and engaging user experiences, and I enjoy using React to build responsive and dynamic web applications. Additionally, my experience with React Native has allowed me to create native mobile apps for both iOS and Android using the same codebase. 
                  On the back-end, I have extensive experience with NodeJs and am comfortable working with server-side JavaScript to build scalable and efficient APIs. With this skill set, I am well-equipped to develop full-stack applications that deliver a seamless experience across multiple platforms
                </p>`}
                </ViewShowMore>
                {renderEmpHistory}
            </div>
        </div>
    );
};

export default ResumePage;
