export const cameraConf = {
    rotation: {},
    fakeObj: {
        POSITION: [50, 50, 100],
        animation: {
            INITIAL_POSITION: {
                X: 0,
                Y: 30,
                Z: 70
            },
            TARGET_POSITION: {
                X: 0,
                Y: 0,
                Z: 19 
            },
            INITIAL_ROTATION: Math.PI / 4,
            ZOOM_DURATION: 0.8,
            OSCILLATION_DURATION: 20
        }
    }
}

export const scene = {

}

export const controller = {
    POSITION: [0, 0, 0], 
    ROTATION: [0, 0, 0],
    SCALE: [1, 1, 1],

    model: {
        position: {
            X: 0,
            Y: 0,
            Z: 0,
        },
        rotation: {
            X: 0.01,
            Y: Math.PI,
            Z: Math.PI,
        },
        scale: {
            X: 21.5,
            Y: 20,
            Z: 20,
        },
    },

    screen: {
        POSITION: [0, 0, 0.01],
        WIDTH: 1536,
        HEIGHT: 864,
        SCALE: 1.25,
        
    }
}
