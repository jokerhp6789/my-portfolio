import { ISourceOptions } from "tsparticles-engine";

export const OPTIONS_DEFAULT = (theme: any): ISourceOptions => ({
    background: {},
    fullScreen: { enable: false, zIndex: 0 },
    fpsLimit: 40,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "bubble",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 1,
            },
            // repulse: {
            //     distance: 200,
            //     duration: 0.4,
            // },
        },
    },
    particles: {
        color: {
            value: theme === "dark" ? "#bcd2f5" : "#186df5",
            // value: theme === "dark" ? "#186df5" : "#4085f3",
        },
        links: {
            color: theme === "dark" ? "#4085f3" : "#bcd2f5",
            distance: 150,
            enable: true,
            opacity: 0.8,
            width: 1,
        },
        collisions: {
            enable: false,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 240,
        },
        opacity: {
            value: 0.3,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
});
