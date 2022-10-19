import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { AppStateContext } from "../layout/Layout";

export interface IHeaderProps {
    [key: string]: any;
}

const Header: React.FC<IHeaderProps> = ({ id }) => {
    const { theme, onChangeState = () => {} } = useContext(AppStateContext);
    const isDarkmode = theme === "dark";

    const onChangeTheme = (theme: any) => {
        onChangeState("theme", theme);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const html = document.getElementsByTagName("html");
            const body = document.getElementsByTagName("body");
            if (html) {
                html?.[0]?.setAttribute?.("class", theme as string);
            }
            if (body && theme === "dark") {
                body?.[0]?.setAttribute?.("class", `dark:bg-black`);
            }
        }
    }, [theme]);

    return (
        <section className="flex flex-row items-center w-ful justify-between pt-5 pb-7 dark:text-white">
            <Link className="" href={"./"}>
                <h4 className="text-2xl md:text-3xl cursor-pointer ">Trung Dev</h4>
            </Link>
            <div className="flex flex-row items-center">
                <Link className="" href={"./projects"}>
                    <div className="mr-5 cursor-pointer hover:text-blue-500">
                        Showcase
                    </div>
                </Link>
                <Link className="" href={"./resume"}>
                    <div className="cursor-pointer hover:text-blue-500">
                        Resume
                    </div>
                </Link>
                {isDarkmode && (
                    <BsMoonStarsFill
                        className="ml-5 cursor-pointer"
                        color="yellow"
                        size={24}
                        onClick={() => onChangeTheme("light")}
                    />
                )}
                {!isDarkmode && (
                    <FaSun
                        className="ml-5 cursor-pointer"
                        color="orange"
                        size={32}
                        onClick={() => onChangeTheme("dark")}
                    />
                )}
            </div>
        </section>
    );
};

export default Header;
