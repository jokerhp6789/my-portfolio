import React, { useMemo, useState } from "react";
import ClassNames from "classnames";

export interface IViewShowMoreProps {
    children: any;
    limitLength?: number;
    className?: string;
}

const ViewShowMore: React.FC<IViewShowMoreProps> = ({
    children,
    className,
    limitLength = 200,
}) => {
    const showFooter = useMemo(
        () => children && children?.length > limitLength,
        [children, limitLength]
    );
    const [showFull, setShowFull] = useState(false);

    const truncatedText = useMemo(() => {
        let res = children;
        if (showFull) {
            return children;
        }
        if (children && children?.length > limitLength) {
            res = children.slice(0, limitLength);
            res = `${res}...`;
        }
        return res;
    }, [children, limitLength, showFull]);

    const renderFooter = () => {
        return (
            <div
                className="cursor-pointer hover:text-blue-500 font-semibold text-sm dark:text-blue-200 z-10 my-3 text-center"
                onClick={() => setShowFull(!showFull)}
            >
                {showFull ? "Show less <<" : ">> Show more"}
            </div>
        );
    };

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div dangerouslySetInnerHTML={{ __html: truncatedText }} />
            {showFooter && renderFooter()}
            <div
                className={`absolute right-0 top-0 left-0 bottom-0  pointer-events-none p-20 dark:p-20 ${ClassNames(
                    {
                        "bg-gradient-to-t from-white dark:from-black":
                            !showFull,
                    }
                )}`}
            />
        </div>
    );
};

export default ViewShowMore;
