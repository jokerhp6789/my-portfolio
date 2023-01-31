import { useCallback, useContext } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { AppStateContext } from "../../components/layout/Layout";

export interface IReactParticlesProps {
    [key: string]: any;
}

const ReactParticles: React.FC<IReactParticlesProps> = ({ id }) => {
    const { theme } = useContext(AppStateContext);
    const particlesInit = useCallback(async (engine: any) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="react-particles__canvas-wrapper"
            canvasClassName="react-particles__canvas bg-white dark:bg-black"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {},
                fullScreen: { enable: false, zIndex: 0 },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
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
                        enable: true,
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
            }}
        />
    );
};

export default ReactParticles;
