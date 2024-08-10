"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Start() {
  const [selectedOption, setSelectedOption] = useState(0); // Start with the first option
  const router = useRouter();
  const audioRef = useRef(null);
  const audioPlayedRef = useRef(false); // Track if the audio has played

  const options = [
    { label: "HOME", path: "/home" },
    { label: "SMACKATHON", path: "/smackathon" },
    { label: "TEAM", path: "/team" },
    { label: "SCHEDULE", path: "/schedule" },
    { label: "EVENTS", path: "/events" },
  ];

  useEffect(() => {

    const handleKeyDown = (event) => {
      console.log(`Key pressed: ${event.key}`); // Debugging key events
      if (event.key === "ArrowUp") {
        setSelectedOption((prevOption) =>
          (prevOption - 1 + options.length) % options.length
        );
      }
      if (event.key === "ArrowDown") {
        setSelectedOption((prevOption) =>
          (prevOption + 1) % options.length
        );
      }
      if (event.key === "Enter") {
        console.log(`Navigating to ${options[selectedOption].label}`);
        router.push(options[selectedOption].path);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router, options, selectedOption]);

  const handleMouseEnter = (index) => {
    setSelectedOption(index);
  };

  const handleOptionClick = (path) => {
    router.push(path);
  };

  return (
    <div className="relative min-h-screen text-white bg-black">


      <img
        src="/images/startScreen/contra.png"
        className="absolute h-1/2 bottom-[6rem] right-6"
      />
      <img src="/images/startScreen/upsurgeLogo.png" className="absolute h-96 top-0 left-1/2 w-[60%] transform -translate-x-1/2" />
      <img src="/images/startScreen/fire.svg" className="absolute bottom-0 -mt-[2px]" />
      <div className="absolute bottom-[6rem] left-1/4 transform -translate-x-1/2 flex flex-col space-y-3">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex items-start items-center space-x-4 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleOptionClick(option.path)}
          >
            <img
              src="/images/startScreen/contraSwitch.png"
              className={`h-14 w-14 z-10 ${selectedOption === index ? 'block' : 'invisible'}`}
            />
            <h1 className="text-2xl text-[#808382]">{option.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
