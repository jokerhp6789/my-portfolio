import type { NextPage } from "next";
import HomePage from "../components/home/HomePage";
import styles from "../styles/Home.module.css";

declare const VALID_LAYOUT_VALUES: readonly [
    "fill",
    "fixed",
    "intrinsic",
    "responsive",
    undefined
];

const type: typeof VALID_LAYOUT_VALUES[number] = "fill";

const Home: NextPage = () => {
    return <HomePage />;
};

export default Home;
