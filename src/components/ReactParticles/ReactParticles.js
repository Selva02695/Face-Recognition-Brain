import React from "react";
import Particles from "react-particles-js";

const ReactParticles = () => {
    const plygen = {
        polygon: {
            enable: true,
            type: 'inside',
            move: {
                radius: 10
            },
            url: 'path/to/svg.svg'
        }
    }

    return (
        <Particles params={plygen} />
    )
}

export default ReactParticles;