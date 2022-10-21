/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import Image from "next/image";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import Modal, { IModalProps } from "../../custom/modal/Modal";
import { useDevice } from "../../utils/hooks/useMedia";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import PROJECTS_DATA from "./data/ProjectsData";

export interface IProjectsPageProps {}
export interface IPagePreviewProps extends IModalProps {
    data: typeof PROJECTS_DATA[0] | null;
}

const PagePreview = React.forwardRef<any, IPagePreviewProps>(
    ({ data, open, ...rest }, ref) => {
        const { width, height } = useWindowSize();
        const device = useDevice();
        const [viewSize, setViewSize] = useState({
            paddingTop: 0,
            width: 420,
            height: 596,
        });
        const arrowSize = 50;
        const flipRef = useRef<ElementRef<typeof HTMLFlipBook>>();
        const [activeIndex, setActiveIndex] = useState(0);
        const { screenType } = data || {};

        useEffect(() => {
            let documentHeight = 0;
            let documentWidth = 0;
            const reduceSize =
                device === "desktop" ? 150 : device === "tablet" ? 100 : 50;
            const ratio = screenType === "mobile" ? 1284 / 2778 : 280 / 180;
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
        }, [width, height, device, screenType]);

        useEffect(() => {
            setActiveIndex(0);
        }, []);

        const renderContent = () => {
            const { images = [] } = data || {};
            return (
                //@ts-ignore
                <HTMLFlipBook
                    {...viewSize}
                    showCover
                    // autoSize
                    showPageCorners
                    onFlip={(flip) => setActiveIndex(flip?.data)}
                    //@ts-ignore
                    ref={flipRef}
                >
                    {images?.map?.((img, index) => {
                        return (
                            <img
                                className=""
                                src={img}
                                alt="test"
                                key={`${index}_${img}`}
                                style={{ objectFit: "cover" }}
                            />
                        );
                    })}
                </HTMLFlipBook>
            );
        };

        const renderArrow = () => {
            return (
                <div className="flex mt-16 md:mt-0 md:absolute right-0 left-0 md:justify-between md:px-16 items-center md:h-full pointer-events-none">
                    <HiArrowCircleLeft
                        size={arrowSize}
                        onClick={() =>
                            flipRef.current &&
                            flipRef.current.pageFlip().flipPrev()
                        }
                        color="gray"
                        className="pointer-events-auto"
                    />
                    <div className="block md:absolute -bottom-5 left-1/2 md:-translate-x-1/2 mx-5">
                        {renderPagination()}
                    </div>

                    <HiArrowCircleRight
                        className="pointer-events-auto"
                        size={arrowSize}
                        onClick={() =>
                            flipRef.current &&
                            flipRef.current.pageFlip().flipNext()
                        }
                        color="gray"
                    />
                </div>
            );
        };

        const renderPagination = () => {
            return (
                <span className="block bg-gray-300 w-10 h-10 text-sm text-center rounded-full py-3 font-bold">{`${
                    activeIndex + 1
                }/${data?.images?.length ?? 0}`}</span>
            );
        };

        return (
            <Modal
                {...rest}
                open={open}
                className="flex flex-col justify-center items-center"
            >
                {renderContent()}
                {renderArrow()}
                {/* <div className="hidden md:flex md:absolute top-0 right-0 bg-red-400">{renderPagination()}</div> */}
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
            <div className=" dark:text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
                {PROJECTS_DATA.map((project, index) => {
                    const { label, images } = project;
                    return (
                        <div
                            key={`${index}_${label}_${images[0]}`}
                            className="max-h-96 flex flex-col border rounded-md border-blue-500 bg-gradient-to-bl from-blue-500 col-span-1 border border-1 border-gray-700 px-3 py-3 cursor-pointer"
                            onClick={() =>
                                setOpenModalPreview({
                                    open: true,
                                    data: project,
                                })
                            }
                        >
                            <div className="h-52 sm:h-full overflow-hidden rounded-md">
                                <img
                                    src={images[0]}
                                    alt={`show_case_image_${label}_${index}`}
                                    className="h-full w-full"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <h3 className="text-center mt-3 font-bold text-sm">
                                {label}
                            </h3>
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
