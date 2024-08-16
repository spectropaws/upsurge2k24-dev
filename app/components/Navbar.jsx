import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Navbar() {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [clickedButton, setClickedButton] = useState(null);
    const [firePosition, setFirePosition] = useState({ x: 0, y: 0 });
    const [fireScale, setFireScale] = useState(1);
    const [menuVisible, setMenuVisible] = useState(false);

    const planeRefs = useRef({});
    const buttonRefs = useRef({});

    const animationVariants = {
        hidden: { opacity: 0, x: 0, rotate: 0 },
        visible: { opacity: 1, x: -80, rotate: 180 },
    };

    const fireAnimationVariants = {
        hidden: { opacity: 0, x: 0, y: 0, scale: 0 },
        visible: (custom) => ({
            opacity: 1,
            x: custom.x,
            y: custom.y,
            scale: custom.scale,
            transition: { duration: 0.5 },
        }),
    };

    const handleMouseEnter = (buttonName) => setHoveredButton(buttonName);
    const handleMouseLeave = () => setHoveredButton(null);

    const handleButtonClick = (buttonName, event) => {
        const buttonRect = event.currentTarget.getBoundingClientRect();
        const planeRect = planeRefs.current[buttonName]?.getBoundingClientRect();

        if (planeRect) {
            setFirePosition({
                x:
                    buttonRect.left +
                    buttonRect.width / 2 -
                    (planeRect.left + planeRect.width / 2),
                y:
                    buttonRect.top +
                    buttonRect.height / 2 -
                    (planeRect.top + planeRect.height / 2),
            });
            setFireScale(1);
        }

        setClickedButton(buttonName);

        setTimeout(() => {
            setClickedButton(null);
            setFireScale(0);

            const url =
                links[
                ["home", "smackathon", "schedule", "events", "teams", "exit"].indexOf(
                    buttonName
                )
                ];
            if (buttonName == "exit" && window != undefined) window.parent.postMessage("escapeZoom", '*');
            if (url) {
                window.open(url, "_self");
            }
        }, 200); //delay after click - fire dikhane ke liye
    };

    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    };

    const links = [
        "/home",
        "/smackathon",
        "/schedule",
        "/events",
        "/team",
        "/startScreen",
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            {/* Menu Toggle Button */}
            <button className="fixed top-5 left-5 z-20" onClick={handleMenuToggle}>
                <Image
                    src={`https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/${menuVisible ? "close" : "menu"}.png`}
                    width={50}
                    height={50}
                    alt={menuVisible ? "close icon" : "menu icon"}
                />
            </button>

            {/* Animated Menu */}
            <motion.section
                className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-10"
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: menuVisible ? 1 : 0, y: menuVisible ? 0 : "-100%" }}
                transition={{ duration: 0.5 }}
            >
                <nav className="relative flex flex-col justify-center items-center h-[100vh] top-10 gap-4">
                    {["home", "smackathon", "schedule", "events", "teams", "exit"].map(
                        (buttonName, index) => (
                            <div
                                key={index}
                                className="relative flex items-center"
                                onMouseEnter={() => handleMouseEnter(buttonName)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {hoveredButton === buttonName && (
                                    <motion.div
                                        className="absolute top-4 left-0 md:-left-8 z-10"
                                        ref={(el) => (planeRefs.current[buttonName] = el)}
                                        initial="hidden"
                                        animate="visible"
                                        variants={animationVariants}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Image
                                            src="https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/plane.png"
                                            width={50}
                                            height={50}
                                            alt="plane icon"
                                        />
                                    </motion.div>
                                )}
                                {clickedButton === buttonName && (
                                    <motion.div
                                        className="absolute top-7 -left-24 md:-left-32 z-9"
                                        initial="hidden"
                                        animate="visible"
                                        variants={fireAnimationVariants}
                                        custom={{
                                            x: firePosition.x,
                                            y: firePosition.y,
                                            scale: fireScale,
                                        }}
                                        style={{ transformOrigin: "center" }}
                                    >
                                        <Image
                                            src="https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/laser-bullet.png"
                                            width={50}
                                            height={50}
                                            alt="fire icon"
                                        />
                                    </motion.div>
                                )}
                                <a
                                    href="#"
                                    className="relative transition-transform duration-150"
                                >
                                    <button
                                        className={`relative ${hoveredButton === buttonName ? "scale-90" : "scale-100"
                                            } ${buttonName == "exit" && "hidden md:block"}`}
                                        ref={(el) => (buttonRefs.current[buttonName] = el)}
                                        onClick={(event) => handleButtonClick(buttonName, event)}
                                    >
                                        <Image
                                            src={`https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/${buttonName}.png`}
                                            width={200}
                                            height={103}
                                            alt={`${buttonName} icon`}
                                        />
                                    </button>
                                </a>
                            </div>
                        )
                    )}
                </nav>
            </motion.section>
        </div>
    );
}

export default Navbar;
