/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Modal, { IModalProps } from "../../custom/modal/Modal";
import { useDevice } from "../../utils/hooks/useMedia";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import PROJECTS_DATA from "./data/ProjectsData";

export interface IProjectsPageProps {}
export interface IPagePreviewProps extends IModalProps {
    data: typeof PROJECTS_DATA[0] | null;
}

const PagePreview = React.forwardRef<any, IPagePreviewProps>(
    ({ data, ...rest }, ref) => {
        const { width, height } = useWindowSize();
        const device = useDevice();
        const [viewSize, setViewSize] = useState({
            paddingTop: 0,
            width: 420,
            height: 596,
        });

        console.log({ device });

        useEffect(() => {
            let documentHeight = 0;
            let documentWidth = 0;
            const reduceSize =
                device === "desktop" ? 150 : device === "tablet" ? 100 : 20;
            const ratio = 210 / 297;
            if (width > 576) {
                documentHeight = height - reduceSize;
                documentWidth = documentHeight * ratio;
            } else {
                documentWidth = width - reduceSize;
                documentHeight = documentWidth / ratio;
            }
            const paddingTop = (window.innerHeight - documentHeight - 20) / 2;
            setViewSize({
                paddingTop,
                width: parseInt(documentWidth.toString()),
                height: parseInt(documentHeight.toString()),
            });
        }, [width, height, device]);

        console.log({ viewSize });

        const renderContent = () => {
            const { images = [] } = data || {};
            return (
                //@ts-ignore
                <HTMLFlipBook {...viewSize} showCover autoSize>
                    {images?.map?.((img, index) => {
                        return (
                            <img
                                className=""
                                src={img}
                                alt="test"
                                key={`${index}_${img}`}
                                style={{ objectFit: "scale-down" }}
                            />
                        );
                    })}
                </HTMLFlipBook>
            );
        };

        return (
            <Modal
                {...rest}
                className="flex flex-col justify-center items-center"
            >
                {renderContent()}
            </Modal>
        );
    }
);

const ProjectsPage: React.FC<IProjectsPageProps> = ({}) => {
    const [openModalPreview, setOpenModalPreview] = useState<{
        open: boolean;
        data: typeof PROJECTS_DATA[0] | null;
    }>({
        open: false,
        data: null,
    });
    return (
        <React.Fragment>
            <div className=" dark:text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {PROJECTS_DATA.map((project, index) => {
                    const { label, images } = project;
                    return (
                        <div
                            key={`${index}_${label}_${images[0]}`}
                            className="flex flex-col bg-red-400 col-span-1 border border-1 border-gray-700 px-2 pt-5 cursor-pointer"
                            onClick={() =>
                                setOpenModalPreview({
                                    open: true,
                                    data: project,
                                })
                            }
                        >
                            <img
                                src={images[0]}
                                alt={`show_case_image_${label}_${index}`}
                                className=""
                                style={{ objectFit: "fill" }}
                            />
                            <div className="text-center">{label}</div>
                        </div>
                    );
                })}
            </div>
            {openModalPreview.open && openModalPreview.data && (
                <PagePreview
                    data={openModalPreview.data}
                    open={openModalPreview.open}
                    onRequestClose={() =>
                        setOpenModalPreview({ open: false, data: null })
                    }
                />
            )}
        </React.Fragment>
    );
};

export default ProjectsPage;
