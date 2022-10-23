import React from "react";
import { SocialProfileJsonLd } from "next-seo";

export interface ISocialSeoProps {
    [key: string]: any;
}

export const MYScript = {
    type: "Person",
    name: "Do Xuan Trung",
    url: "https://www.trung-dev.com/",
    sameAs: [
        "https://web.facebook.com/doxuan.trung.1/",
        "https://www.instagram.com/do_xuan_trung_hp/",
        "htps://www.linkedin.com/in/trung-do-xuan-71167b133/",
    ],
    birthPlace: "Haiphong,Vietname",
    email: "trung13988@gmail.com",
    gender: "Male",
    nationality: {
        name: "Vietnam",
    },
};

const SocialSeo: React.FC<ISocialSeoProps> = ({ id }) => {
    return <SocialProfileJsonLd {...(MYScript as any)} />;
};

export default SocialSeo;
