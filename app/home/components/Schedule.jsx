import React, { useState } from "react";
import Image from "next/image";
import StarsBackground from "@/app/components/StarsBackground";
import "./Schedule.css";

const styles = {
  comment: {
    position: "absolute",
    display: "flex",
    gridTemplateColumns: "70px 1fr",
    gap: "10px",
    padding: "10px 15px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: "7px",
    opacity: 0,
  },
};

const schedule1 = [
  {
    avatarUrl:
      "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/t2.png",
    name: "Inaugration",
    time: "10:00 AM",
    comment: "Stage (CSE Department)",
  },
  {
    avatarUrl:
      "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/t2.png",
    name: "Talentesque",
    time: "11:00 AM",
    comment: "Stage (CSE Department)",
  },
  {
    avatarUrl:
      "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/t2.png",
    name: "Desi Daredevil",
    time: "11:00 AM",
    comment: "In front of CSE Department",
  },
  {
    avatarUrl:
      "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/t2.png",
    name: "Coding Casino",
    time: "11:00 AM",
    comment: "LAB 3-4 CSE Department",
  },
  {
    avatarUrl:
      "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/t2.png",
    name: "Sports -  FIFA, Smackdown",
    time: "11:00 AM",
    comment: "LAB 5-6 CSE Department",
  },
  {
    avatarUrl:
      "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/t2.png",
    name: "Data Science Seminar",
    time: "1:00 PM",
    comment: "LAB 1 CSE Department",
  },
  {
    avatarUrl:
      "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/t2.png",
    name: "FlashMob",
    time: "3:00 PM",
    comment: "In front of CSE Department",
  },
];

const schedule2 = [
  {
    avatarUrl:
      "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/t2.png",
    name: "Cosmo Town",
    time: "10:00 AM",
    comment: "In front of CSE Department",
  },
  {
    avatarUrl:
      "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/t2.png",
    name: "Cloud Hands on Session ",
    time: "11:00 AM",
    comment: "LAB 1 CSE Department",
  },
  {
    avatarUrl:
      "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/t2.png",
    name: "Desi Daredevil Final Round",
    time: "3:00 PM",
    comment: "In front of CSE Department",
  },
  {
    avatarUrl:
      "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/t2.png",
    name: "Coding Relay",
    time: "12:00 PM",
    comment: "LAB 3-4 CSE Department",
  },
  {
    avatarUrl:
      "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/t2.png",
    name: "Sports -  FIFA, Smackdown",
    time: "11:00 AM",
    comment: "LAB 5-6 CSE Department",
  },
];

const Schedule = () => {
  const [isSchedule1, setIsSchedule1] = useState(true);
  const [selectedValue, setSelectedValue] = useState("value-1");

  const handleChange = (value) => {
    setSelectedValue(value);
    setIsSchedule1(value === "value-1");
  };

  const currentSchedule = isSchedule1 ? schedule1 : schedule2;
  const currentClass = isSchedule1 ? "slideUp1" : "slideUp2";

  return (
    <>
      <StarsBackground>
        <h1 className="text-white text-center text-3xl md:text-5xl md:mb-10 mt-48">
          Schedule
        </h1>
        <div className="flex justify-center">
          <div className="relative flex items-center my-14 bg-white text-black rounded-xl border border-fuchsia-600 overflow-hidden w-[180px]">
            <input
              type="radio"
              id="value-1"
              name="value-radio"
              value="value-1"
              checked={selectedValue === "value-1"}
              onChange={() => handleChange("value-1")}
              className="hidden"
            />
            <input
              type="radio"
              id="value-2"
              name="value-radio"
              value="value-2"
              checked={selectedValue === "value-2"}
              onChange={() => handleChange("value-2")}
              className="hidden"
            />

            <span
              className={`absolute top-0 left-0 h-full transition-transform duration-150 ease-in-out bg-neutral-800 z-0 ${
                selectedValue === "value-1"
                  ? "w-1/2 translate-x-full"
                  : "w-1/2 translate-x-0"
              }`}
            ></span>

            <label
              htmlFor="value-1"
              className={`w-1/2 p-2 cursor-pointer flex items-center justify-center z-10 font-semibold text-sm ${
                selectedValue === "value-1" ? "text-black" : "text-white"
              }`}
            >
              <p>Day 1</p>
            </label>
            <label
              htmlFor="value-2"
              className={`w-1/2 p-2 cursor-pointer flex items-center justify-center z-10 font-semibold text-sm ${
                selectedValue === "value-2" ? "text-black" : "text-white"
              }`}
            >
              <p>Day 2</p>
            </label>
          </div>
        </div>

        <div className="mt-52 mb-72 relative h-auto flex flex-col justify-center items-center text-white md:scale-110">
          <Image
            width={80}
            height={80}
            src="/svgs/home/events/asteroid.svg"
            className="hidden -top-40 left-1/4 md:block md:absolute"
            alt="asteroid"
          />
          <Image
            src="https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/sponsors/planet3.png"
            alt="Large Planet"
            width={320}
            height={320}
            className="hidden -top-1/4 right-[20%] md:block md:absolute"
          />
          {currentSchedule.map((comment, index) => (
            <div
              className={`bg-[url('https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/navbar/schedule.gif')] bg-cover h-24 md:h-28 ${currentClass} border border-purple-500`}
              key={index}
              style={{
                ...styles.comment,
                animationDelay: `${index * 3}s`,
              }}
            >
              <div className="flex items-center">
                <img
                  src={`${comment.avatarUrl}`}
                  alt={`${comment.name}'s avatar`}
                  className="w-16 rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center my-10 ml-2">
                <p>Event: {comment.name}</p>
                <p>Time: {comment.time}</p>
                <p>
                  Venue: <span className="text-justify">{comment.comment}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </StarsBackground>
    </>
  );
};

export default Schedule;