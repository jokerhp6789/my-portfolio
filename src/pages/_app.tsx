import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import AppSeo from "../components/seo/app-seo/AppSeo";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <AppSeo />
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
