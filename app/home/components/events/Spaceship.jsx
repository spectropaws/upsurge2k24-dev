// Spaceship.jsx

import React, { forwardRef } from "react";
import Image from "next/image";

const Spaceship = forwardRef(function Spaceship(props, ref) {
    return (
        <div
            ref={ref}
            className={`w-24 h-16 rounded-full z-20 ${props.className}}`}
        >
            <Image
                width={100}
                height={100}
                objectFit="contain"
                className="drop-shadow-[0_0_35px_rgba(255,255,255,1)]"
                src="/svgs/home/events/spaceship.svg"
                alt="spaceship"
            />
        </div>
    );
});

export default Spaceship;
