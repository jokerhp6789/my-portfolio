import React from "react";

export interface IProjectProps {
    [key: string]: any;
}

const Projects: React.FC<IProjectProps> = ({ id }) => {
    return <div>My Projects</div>;
};

export default Projects;
