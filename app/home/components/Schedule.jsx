import React, { useState } from "react";
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
    avatarUrl: "/images/navbar/t2.png",
    name: "Inaugration",
    time: "10:00 AM",
    comment: "Stage (CSE Department)",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Latent Show",
    time: "11:00 AM",
    comment: "Stage (CSE Department)",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Desi Daredevil",
    time: "11:00 AM",
    comment: "In front of CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Coding Casino",
    time: "11:00 AM",
    comment: "LAB 3-4 CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Sorts -  FIFA, Smackdown",
    time: "11:00 AM",
    comment: "LAB 5-6 CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Data Science Seminar",
    time: "1:00 PM",
    comment: "LAB 1 CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "FlashMob",
    time: "3:00 PM",
    comment: "In front of CSE Department",
  },
];

const schedule2 = [
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Cosmo Town",
    time: "10:00 AM",
    comment: "CSE Front",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Cloud Hands on session ",
    time: "11:00 AM",
    comment: "LAB 1 CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Desi Daredevil Final Round",
    time: "3:00 PM",
    comment: "In front of CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Coding Relay",
    time: "12:00 PM",
    comment: "LAB 3-4 CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Sports -  FIFA, Smackdown",
    time: "11:00 AM",
    comment: "LAB 5-6 CSE Department",
  },
];

const Schedule = () => {
  const [isSchedule1, setIsSchedule1] = useState(true);
  const [buttonText, setButtonText] = useState("Day 1");
  const currentSchedule = isSchedule1 ? schedule1 : schedule2;
  const currentClass = isSchedule1 ? "slideUp1" : "slideUp2";

  const handleClick = () => {
    setIsSchedule1(!isSchedule1);
    setButtonText(isSchedule1 ? "Day 2" : "Day 1");
  };

  return (
    <>
     <StarsBackground>
      <div className="flex justify-center">
        <button
          class="mt-20 group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 "
          onClick={handleClick}
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {buttonText}
          </span>
          <div class="hidden group-hover:block">
            <div class="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
              <div class="rounded-sm bg-black py-1 px-2">
                <p class="whitespace-nowrap">{`This is ${buttonText} Schedule`}</p>
              </div>
              <div class="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
            </div>
          </div>
        </button>
      </div>

      <div className="mt-52 mb-72 relative h-auto flex flex-col justify-center items-center text-white">
        {currentSchedule.map((comment, index) => (
          <div
            className={`bg-[url('/images/navbar/schedule.gif')] bg-cover h-24 md:h-28 ${currentClass} border border-purple-500`}
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
