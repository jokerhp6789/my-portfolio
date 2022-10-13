import React from "react";
import ProjectsPage from "../../components/projects/ProjectsPage";

export interface IProjectProps {
    [key: string]: any;
}

const Projects: React.FC<IProjectProps> = ({ id }) => {
    return (
        <div className="bg-red w-full h-full text-white">
            <ProjectsPage />
        </div>
    );
};

export default Projects;
