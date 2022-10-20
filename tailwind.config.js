/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            ...colors,
            blueReact: "rgb(103,219,249)",
            redNest: "rgb(232,44,73)",
            blackNext: "rgb(17,17,17)",
            greenMongo: "rgb(38,233,106)",
            purpleGraphql: "rgb(64,42,183)",
        },
    },
    plugins: [],
    darkMode: "class",
};
