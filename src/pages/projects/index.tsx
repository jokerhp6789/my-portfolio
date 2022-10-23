import React from "react";
import ProjectsPage from "../../components/projects/ProjectsPage";

export interface IProjectProps {
    [key: string]: any;
}

const Projects: React.FC<IProjectProps> = ({ id }) => {
    return <ProjectsPage />;
};

export default Projects;
