import { useCallback, useContext } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { AppStateContext } from "../../components/layout/Layout";
import { OPTIONS_DEFAULT } from "./options/default";
import { OPTIONS_AMONG_US } from "./options/among-us";

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
            options={OPTIONS_DEFAULT(theme)}
            // options={OPTIONS_AMONG_US(theme)}
        />
    );
};

export default ReactParticles;
