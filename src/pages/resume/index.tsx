import React from "react";

export interface IResumeProps {
    [key: string]: any;
}

const Resume: React.FC<IResumeProps> = ({ id }) => {
    return <div>My Resume</div>;
};

export default Resume;
