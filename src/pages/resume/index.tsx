import React from "react";
import ResumePage from "../../components/resume/ResumePage";

export interface IResumeProps {
    [key: string]: any;
}

const Resume: React.FC<IResumeProps> = ({ id }) => {
    return <ResumePage />;
};

export default Resume;
