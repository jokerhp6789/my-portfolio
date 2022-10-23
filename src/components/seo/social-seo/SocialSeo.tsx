import React from "react";
import { SocialProfileJsonLd } from "next-seo";

export interface ISocialSeoProps {
    [key: string]: any;
}

const SocialSeo: React.FC<ISocialSeoProps> = ({ id }) => {
    return (
        <SocialProfileJsonLd
            type="Person"
            name="Do Xuan Trung"
            url="https://www.trung-dev.com/"
            sameAs={[
                "https://web.facebook.com/doxuan.trung.1/",
                "https://www.instagram.com/do_xuan_trung_hp/",
                "https://www.linkedin.com/in/trung-do-xuan-71167b133/",
            ]}
        />
    );
};

export default SocialSeo;
