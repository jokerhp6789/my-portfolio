import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import AppSeo from "../components/seo/app-seo/AppSeo";
import SocialSeo from "../components/seo/social-seo/SocialSeo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Layout>
            <AppSeo />
            <SocialSeo />
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
