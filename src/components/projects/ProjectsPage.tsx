/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import Image from "next/image";
import React from "react";
import HTMLFlipBook from "react-pageflip";
import PROJECTS_DATA from "./data/ProjectsData";

export interface IProjectsPageProps {
    [key: string]: any;
}

const Page = React.forwardRef<any, any>((props, ref) => {
    return (
        <div className="demoPage" ref={ref}>
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

const ProjectsPage: React.FC<IProjectsPageProps> = ({ id }) => {
    return (
        //@ts-ignore
        // <HTMLFlipBook width={300} height={500}>
        //     <Page number="1">Page text</Page>
        //     <Page number="2">Page text</Page>
        //     <Page number="3">Page text</Page>
        //     <Page number="4">Page text</Page>
        // </HTMLFlipBook>
        <div className=" dark:text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {PROJECTS_DATA.map((project, index) => {
                const { label, images } = project;
                return (
                    <div
                        key={`${index}_${label}_${images[0]}`}
                        className="flex flex-col bg-red-400 col-span-1 border border-1 border-gray-700 p-2"
                    >
                        <img
                            src={images[0]}
                            alt={`show_case_image_${label}_${index}`}
                            className=""
                            style={{ objectFit: "cover" }}
                        />
                        <div className="text-center">{label}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectsPage;
