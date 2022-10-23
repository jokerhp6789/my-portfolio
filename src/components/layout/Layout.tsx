import Head from "next/head";
import React, { Dispatch, useState } from "react";
import Header from "../header/Header";

export interface AppStateContext {
    theme?: "dark" | "light";
    setAppState?: Dispatch<AppStateContext>;
    onChangeState?: (
        key: keyof AppStateContext,
        value: AppStateContext[keyof AppStateContext]
    ) => void;
}

export const AppStateContext = React.createContext<AppStateContext>({});

export interface ILayoutProps {
    children: any;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    const [appState, setAppState] = useState<AppStateContext>({
        theme: "dark",
    });

    const { theme } = appState || {};

    const onChangeState = (key: keyof AppStateContext, value: any) => {
        setAppState((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <AppStateContext.Provider value={{ theme, setAppState, onChangeState }}>
            <div className="mx-3 md:mx-20 lg:mx-30 xl:mx-40 min-h-screen flex flex-col">
                <Header />
                <main className="h-full flex-grow">{children}</main>
            </div>
        </AppStateContext.Provider>
    );
};

export default Layout;
