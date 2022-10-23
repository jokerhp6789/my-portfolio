import React from "react";
import { DefaultSeo, DefaultSeoProps } from "next-seo";

export interface IAppSeoProps {
    [key: string]: any;
}

const DefaultDescription = "Fullstack developer  with ReactNative , ReactJs, NextJs & NodeJs";

const DEFAULT_CONFIG_SEO: DefaultSeoProps = {
    title: "Portfolio",
    titleTemplate: "Do Xuan Trung | %s",
    description: DefaultDescription,
    openGraph: {
        title: "Open Graph Profile Title",
        description: DefaultDescription,
        url: "https://www.trung-dev.com/",
        type: "profile",
        locale: "en_IE",
        siteName: "trung-dev",
        profile: {
            firstName: "Trung",
            lastName: "Do Xuan",
            username: "trung-dev",
            gender: "male",
        },
        images: [
            {
                url: "/images/avatar.jpg",
                width: 850,
                height: 650,
                alt: "Profile Photo",
            },
            {
                url: "/images/avatar-mobile.jpg",
                width: 850,
                height: 650,
                alt: "Profile Photo",
            },
        ],
    },
    twitter: {
        handle: "@trung-dev",
        site: "@trung-dev",
        cardType: "summary_large_image",
    },
    additionalLinkTags: [
        {
            href: "/images/avatar.jpg",
            rel: "icon",
        },
        {
            href: "/images/avatar.jpg",
            rel: "canonical",
        },
    ],
};

const AppSeo: React.FC<IAppSeoProps> = ({ id }) => {
    return <DefaultSeo {...DEFAULT_CONFIG_SEO} />;
};

export default AppSeo;
