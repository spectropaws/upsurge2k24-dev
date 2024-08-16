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

    <Image 
        src="/images/schedule/olive.png"
        height={150}
        width={150}
        alt='olive'
        className='absolute right-[20px] top-[550px]'
     />

    <Image 
        src="/svgs/schedule/bottomChar.svg"
        height={230}
        width={230}
        alt='bottomChar'
        className='absolute left-[50px] top-[2340px]'
     />

        <p className="text-white absolute left-1/2 translate-x-[-50%] top-[250px] text-5xl">
          Day 1 - 23rd August
        </p>
        <p className="text-white absolute text-center left-[370px] top-[550px] text-3xl">
          Inauguration <br /> 10:00 AM
        </p>
        <p className="text-white absolute text-center left-[710px] top-[550px] text-3xl">
          Talentsque <br /> 11:00 AM
        </p>
        <p className="text-white absolute text-center left-[1050px] top-[520px] text-3xl">
          Desi <br /> Daredevil <br /> 11:00 AM
        </p>
        <p className="text-white absolute text-center left-[390px] top-[924px] text-3xl">
          Coding <br /> Casino <br /> 11:00 AM
        </p>
        <p className="text-white absolute text-center left-[720px] top-[924px] text-3xl">
          FIFA &<br /> Smackdown <br /> 11:00 AM
        </p>
        <p className="text-white absolute text-center left-[1030px] top-[927px] text-3xl">
          Data Science <br /> Seminar <br /> 1:00 PM
        </p>
        <p className="text-white absolute text-center left-[730px] top-[1350px] text-3xl">
          Flashmob <br /> 3:00 PM
        </p>
        
        <p className="text-white absolute left-1/2 translate-x-[-50%] top-[1773px] text-5xl">
          Day 2 - 24th August
        </p>
        <p className="text-white absolute text-center left-[385px] top-[2040px] text-3xl">
          Cosmo Town <br /> 10:00 AM
        </p>
        <p className="text-white absolute text-center left-[710px] top-[2020px] text-3xl">
          Cloud <br /> (Hands On) <br />
          11:00 AM
        </p>
        <p className="text-white absolute text-center left-[1050px] top-[2020px] text-3xl">
          FIFA &<br /> Smackdown <br /> 11:00 AM
        </p>
        <p className="text-white absolute text-center left-[590px] top-[2400px] text-3xl">
          Coding <br /> Relay <br /> 12:00 PM
        </p>
        <p className="text-white absolute text-center left-[900px] top-[2390px] text-3xl">
          Desi <br /> Daredevils <br /> Final Round <br /> 11:00 AM
        </p>
      </div>
    </div>
  );
}
