import Image from "next/image";
import { motion } from 'framer-motion';

export default function Schedule() {
  return (
    <div className=" w-full">
      <p className="bg-black text-white text-9xl text-center pt-20">Schedule</p>
      <div className="relative">
      
        <Image
          src="/svgs/schedule/Lpbg.svg"
          width={1000}
          height={1000}
          className=" w-full h-full -mt-2"
        />
        <motion.div
      animate={{
        y: [0, -130, 0], // Move up by 20px and then back to original position
      }}
      transition={{
        duration: 6, // Duration for one cycle of the animation
        ease: "easeInOut", // Easing function for smooth animation
        repeat: Infinity, // Repeat animation infinitely
      }}
      className="absolute top-[100px] left-[100px]"
    >
      <Image 
        src="/svgs/schedule/balloon.svg"
        height={250}
        width={250}
        alt="Balloon"
      />
    </motion.div>

    

      </div>
    </div>
  );
}
