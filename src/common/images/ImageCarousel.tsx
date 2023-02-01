import React, { ElementRef } from "react";
import ImageGallery, {
    ReactImageGalleryProps,
    ReactImageGalleryImageSet,
} from "react-image-gallery";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { map } from "lodash";
import { useImperativeHandle } from "react";
import { useRef } from "react";

export interface IImageCarouselProps extends ReactImageGalleryProps {
    classNameItem?: string;
}

export interface IImageCarouselMethods {
    play?: (callback?: boolean) => void;
    pause?: (callback?: boolean) => void;
    fullScreen?: () => void;
    exitFullScreen?: () => void;
    slideToIndex?: (index: number) => void;
    getCurrentIndex?: () => number;
}

const ImageCarousel: React.ForwardRefRenderFunction<
    IImageCarouselMethods,
    IImageCarouselProps
> = ({ items = [], classNameItem, ...rest }, ref) => {
    // return (
    //     <Carousel showArrows swipeable showIndicators infiniteLoop>
    //         {map(items, (item) => {
    //             return (
    //                 <div className="md:w-1/3 h-auto">
    //                     <Image src={item?.original} />
    //                 </div>
    //             );
    //         })}
    //     </Carousel>
    // );

    const galleryRef = useRef<ElementRef<typeof ImageGallery>>(null);

    useImperativeHandle(ref, () => ({
        slideToIndex: (index: any) =>
            galleryRef.current && galleryRef.current?.slideToIndex(index),
    }));

    return (
        <ImageGallery
            items={items}
            renderItem={(item) => <Image src={item?.original} />}
            renderThumbInner={(item) => <Image src={item?.original} />}
            infinite
            showIndex={false}
            showThumbnails={false}
            autoPlay={false}
            {...rest}
            ref={galleryRef}
        />
    );
};

export default React.forwardRef(ImageCarousel);
