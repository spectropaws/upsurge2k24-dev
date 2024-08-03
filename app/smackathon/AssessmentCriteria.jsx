"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles2 from "./components/AssessmentCriteria.module.css";

const assessmentCriteria = [
  {
    src: "/images/pacman/quality.png",
    alt: "Quality of work submitted",
    text: "Quality of work submitted",
  },
  {
    src: "/images/pacman/timeManagement.png",
    alt: "Timeliness of submissions",
    text: "Timeliness of submissions",
  },
  {
    src: "/images/pacman/participation.png",
    alt: "Participation in discussions",
    text: "Participation in discussions",
  },
  {
    src: "/images/pacman/innovation.png",
    alt: "Innovation through imagination",
    text: "Innovation through imagination",
  },
];

const Pacman = () => {
  const [toggled, setToggled] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [welcomeText, setWelcomeText] = useState("Welcome Back to the Pacman Era");

  const handleToggle = () => {
    setToggled(!toggled);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!toggled) {
      setShowWelcome(true);
      const welcomeTimer = setTimeout(() => {
        setShowWelcome(false);
      }, 4500);

      const textChangeTimer = setTimeout(() => {
        setWelcomeText("Now it's my turn");
      }, 3000);

      return () => {
        clearTimeout(welcomeTimer);
        clearTimeout(textChangeTimer);
      };
    }
  }, [toggled]);

  return (
    <div className="bg-black flex items-center justify-center min-h-screen overflow-hidden">
      <div className="relative flex flex-col items-center justify-center w-full h-full p-5">
        <h1 className="text-white font-bold text-2xl mb-10 mt-20 text-center">
          Assessment Criteria For Smackathon 2024
        </h1>
        <div
          className={`relative mx-8 sm:ml-20 md:mx-[6-rem] my-5 flex flex-col items-center pb-20 pt-10 w-4/5 h-4/5 border-8 border-dotted border-yellow-300 box-border`}
        >
          <div className={`${styles2.pacman} ${toggled ? "" : styles2.reverse}`}>
            <div className={styles2.mouth}></div>
          </div>
          <div className={`${styles2.ghost} ${styles2.blinky} ${toggled ? "" : styles2.reverse}`}>
            <div className="relative flex justify-between top-2.5 left-2.5">
              <div className="bg-white rounded-full h-3.5 w-3.5 relative">
                <div className="bg-blue-500 rounded-full h-1.5 w-1.5 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
              </div>
              <div className="bg-white rounded-full h-3.5 mr-3 w-3.5 relative">
                <div className="bg-blue-500 rounded-full h-1.5 w-1.5 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          </div>
          <div className={`${styles2.ghost} ${styles2.pinky} ${toggled ? "" : styles2.reverse}`}>
            <div className="relative flex justify-between top-2.5 left-2.5">
              <div className="bg-white rounded-full h-3.5 w-3.5 relative">
                <div className="bg-blue-500 rounded-full h-1.5 w-1.5 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
              </div>
              <div className="bg-white rounded-full h-3.5 mr-3 w-3.5 relative">
                <div className="bg-blue-500 rounded-full h-1.5 w-1.5 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          </div>
          <div className={`${styles2.ghost} ${styles2.inky} ${toggled ? "" : styles2.reverse}`}>
            <div className="relative flex justify-between top-2.5 left-2.5">
              <div className="bg-white rounded-full h-3.5 w-3.5 relative">
                <div className="bg-blue-500 rounded-full h-1.5 w-1.5 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
              </div>
              <div className="bg-white rounded-full h-3.5 mr-3 w-3.5 relative">
                <div className="bg-blue-500 rounded-full h-1.5 w-1.5 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          </div>
          <div className={`${styles2.ghost} ${styles2.clyde} ${toggled ? "" : styles2.reverse}`}>
            <div className="relative flex justify-between top-2.5 left-2.5">
              <div className="bg-white rounded-full h-3.5 w-3.5 relative">
                <div className="bg-blue-500 rounded-full h-1.5 w-1.5 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
              </div>
              <div className="bg-white rounded-full h-3.5 mr-3 w-3.5 relative">
                <div className="bg-blue-500 rounded-full h-1.5 w-1.5 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          </div>
          {showWelcome && (
            <h4 className="welcome justify-center items-center text-white mt-14 text-xl">{welcomeText}</h4>
          )}
          <div className="w-full flex flex-col items-center mt-[120px] mx-4">
            {assessmentCriteria.reduce((acc, criteria, index) => {
              if (index % 2 === 0) {
                acc.push(
                  <div key={index} className="flex flex-col md:flex-row justify-center mb-10 w-full">
                    <div className="flex flex-col items-center w-full md:w-1/2 mx-4 mb-4 md:mb-0">
                      <img
                        src={criteria.src}
                        className="rounded-full h-16 w-16 md:h-24 md:w-24 mb-4"
                        alt={criteria.alt}
                      />
                      <h4 className="text-white text-center text-sm md:text-lg">
                        {criteria.text}
                      </h4>
                    </div>
                    {index + 1 < assessmentCriteria.length && (
                      <div className="flex flex-col items-center w-full md:w-1/2 mx-4">
                        <img
                          src={assessmentCriteria[index + 1].src}
                          className="rounded-full h-16 w-16 md:h-24 md:w-24 mb-4"
                          alt={assessmentCriteria[index + 1].alt}
                        />
                        <h4 className="text-white text-center text-sm md:text-lg">
                          {assessmentCriteria[index + 1].text}
                        </h4>
                      </div>
                    )}
                  </div>
                );
              }
              return acc;
            }, [])}
          </div>
        </div>
        <div className={`${styles2.frame} w-[60%] md:w-[500px] h-[90px] md:h-[160px] flex items-center justify-center mb-20 mt-5`}>
          <div className={`${styles2.checkContainer} mt-20 w-[40%] md:w-[500px] h-[5px] md:h-[160px] flex items-center justify-center`}>
            <input
              id="joy"
              className={styles2.checkbox}
              type="checkbox"
              checked={toggled}
              onChange={handleToggle}
            />
            <label htmlFor="joy" className={`${styles2.checkStick}`}></label>
          </div>
        </div>
        <Image src="/images/pacman/downwalls.svg" width={500} height={500}  alt="Downwall Logo" className={`${styles2.imageSize}`} /> 
      </div>
    </div>
  );
};

export default Pacman;

