import React, { useState } from "react";

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
    animation: "slideUp 15s linear infinite",
  },
};

const keyframes = `
  @keyframes slideUp {
    0% {
      transform: translateY(100%) scale(0.5);
      opacity: 0;
    }
    5%, 20% {
      transform: translateY(100%) scale(0.7);
      opacity: 0.4;
    }
    25%, 40% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    45%, 60% {
      transform: translateY(-100%) scale(0.7);
      opacity: 0.4;
    }
    65%, 100% {
      transform: translateY(-100%) scale(0.5);
      opacity: 0;
    }
  }
`;

const schedule1 = [
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Event: Inaugration",
    time: "Time: 10:00 AM",
    comment: "Venue: Stage in front of CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Event: Smackathon",
    time: "Time: 8:30 AM",
    comment: "Venue: CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Event: Latent Show",
    time: "Time: 11:00 AM",
    comment: "Venue: Stage in front of CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Event: Desi Daredevil",
    time: "Time: 11:00 AM",
    comment: "Venue: Front of CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Event: Coding Casino",
    time: "Time: 11:00 AM",
    comment: "Venue: LAB 3-4 CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Event: Sorts -  FIFA, Smackdown",
    time: "Time: 11:00 AM",
    comment: "Venue: LAB 5-6 CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Event: Data Science Seminar",
    time: "Time: 1:00 PM",
    comment: "Venue: LAB 1 CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Event: FlashMob",
    time: "Time: 3:00 PM",
    comment: "Venue: Not yet decided",
  },
];

const schedule2 = [
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Event: Cosmo Town",
    time: "Time: 10:00 AM",
    comment: "Venue: CSE Front",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Event: Cloud Hands on session ",
    time: "Time: 11:00 AM",
    comment: "Venue: LAB 1 CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Event: Desi Daredevil Final Round",
    time: "Time: 3:00 PM",
    comment: "Venue: Front of CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Event: Coding Relay",
    time: "Time: 12:00 PM",
    comment: "Venue: LAB 3-4 CSE Department",
  },
  {
    avatarUrl: "/images/navbar/t2.png",
    name: "Event: Sorts -  FIFA, Smackdown",
    time: "Time: 11:00 AM",
    comment: "Venue: LAB 5-6 CSE Department",
  },
];

const Schedule = () => {
  const [isSchedule1, setIsSchedule1] = useState(true);
  const [buttonText, setButtonText] = useState("Day 1");
  const currentSchedule = isSchedule1 ? schedule1 : schedule2;

  const handleClick = () => {
    setIsSchedule1(!isSchedule1);
    setButtonText(isSchedule1 ? "Day 2" : "Day 1");
  };

  return (
    <>
      <button className="z-2 cursor-pointer mb-5 p-4" onClick={handleClick}>
        {buttonText}
      </button>
      <div className="mt-60 relative h-auto flex flex-col justify-center items-center text-white">
        <style>{keyframes}</style>

        {currentSchedule.map((comment, index) => (
          <div
            className="bg-[url('/images/navbar/schedule.gif')] bg-cover p-3"
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
            <div className="flex flex-col justify-center">
              <div>{comment.name}</div>
              <div>{comment.time}</div>
              <div className="mt-1">{comment.comment}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Schedule;