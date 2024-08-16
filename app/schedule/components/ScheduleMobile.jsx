import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';


export default function ScheduleMobile() {
  return (

    <div className=" w-full bg-[#090A0F]">
      <p className="bg-[#090A0F] text-white text-6xl text-center pt-[30px] h-[150px]">Schedule</p>
      <div className="relative">
      <Image
        src="https://upsurge2k24.s3.ap-south-1.amazonaws.com/svgs/schedule/Sbg.svg"
        height={1000}
        width={1000}
        className='w-full h-full'
        alt="background"
      />
{/*
<motion.div
      animate={{
        y: [0, -40, 0], // Move up by 20px and then back to original position
      }}
      transition={{
        duration: 10, // Duration for one cycle of the animation
        ease: "easeInOut", // Easing function for smooth animation
        repeat: Infinity, // Repeat animation infinitely
      }}
      className="absolute top-[-2rem]"
    >
      <Image
        src="/svgs/schedule/balloon.svg"
        height={150}
        width={150}
        alt="Balloon"
      />
    </motion.div>

    <motion.div
      animate={{
        y: [0, -40, 0], // Move up by 20px and then back to original position
      }}
      transition={{
        duration: 10, // Duration for one cycle of the animation
        ease: "easeInOut", // Easing function for smooth animation
        repeat: Infinity, // Repeat animation infinitely
      }}
      className="absolute top-[137rem]"
    >
      <Image
        src="/svgs/schedule/balloon.svg"
        height={150}
        width={150}
        alt="Balloon"
      />
    </motion.div> */}


    </div>
    </div>
  )
}











// import React from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion';


// export default function ScheduleMobile() {
//   return (

//     <div className='relative bg-black'>
//       <div className=' h-[150px] mb-[50px]'><h1 className='text-white pt-[50px] text-center'>Schedule</h1></div>
//       <Image
//         src="/svgs/schedule/Sbg.svg"
//         height={1000}
//         width={1000}
//         className='w-full h-full '
//       />

// <motion.div
//       animate={{
//         y: [0, -40, 0], // Move up by 20px and then back to original position
//       }}
//       transition={{
//         duration: 10, // Duration for one cycle of the animation
//         ease: "easeInOut", // Easing function for smooth animation
//         repeat: Infinity, // Repeat animation infinitely
//       }}
//       className="absolute top-[130px]"
//     >
//       <Image
//         src="/svgs/schedule/balloon.svg"
//         height={150}
//         width={150}
//         alt="Balloon"
//       />
//     </motion.div>

//     <motion.div
//       animate={{
//         y: [0, -40, 0], // Move up by 20px and then back to original position
//       }}
//       transition={{
//         duration: 10, // Duration for one cycle of the animation
//         ease: "easeInOut", // Easing function for smooth animation
//         repeat: Infinity, // Repeat animation infinitely
//       }}
//       className="absolute top-[2430px]"
//     >
//       <Image
//         src="/svgs/schedule/balloon.svg"
//         height={150}
//         width={150}
//         alt="Balloon"
//       />
//     </motion.div>

//      <Image
//         src="/images/schedule/fat.png"
//         height={150}
//         width={150}
//         alt='fat'
//         className='absolute right-[10px] top-[1930px]'
//      />
//      <Image
//         src="/svgs/schedule/bottomChar.svg"
//         height={150}
//         width={150}
//         alt='bottomChar'
//         className='absolute left-[-10px] top-[3910px]'
//      />
//      <Image
//         src="/images/schedule/olive.png"
//         height={90}
//         width={90}
//         alt='olive'
//         className='absolute right-[10px] top-[427px]'
//      />
//      <Image
//         src="/images/schedule/popeye.png"
//         height={120}
//         width={120}
//         alt='popeye'
//         className='absolute right-0 top-[1627px]'
//      />
//      <Image
//         src="/images/schedule/olive.png"
//         height={90}
//         width={90}
//         alt='olive'
//         className='absolute right-[2px] top-[2722px]'
//      />
//      <Image
//         src="/images/schedule/fat.png"
//         height={150}
//         width={150}
//         alt='fat'
//         className='absolute right-[10px] top-[3310px]'
//      />


//       <p className='text-white text-center absolute left-[110px] top-[206px] text-3xl'>DAY 1 - 23rd AUGUST</p>

//       <p className='text-white text-center absolute left-[130px] top-[390px] text-2xl'>Inauguration <br/>10:00 AM</p>
//       <p className='text-white text-center absolute left-[135px] top-[690px] text-2xl'>Talentesque <br/>11:00 AM</p>
//       <p className='text-white text-center absolute left-[140px] top-[970px] text-2xl'>Desi <br/> Daredevils <br/>11:00 AM</p>
//       <p className='text-white text-center absolute left-[145px] top-[1280px] text-2xl'>Coding <br/> Casino <br/>11:00 AM</p>
//       <p className='text-white text-center absolute left-[140px] top-[1580px] text-2xl'>FIFA & <br/> SmackDown <br/>11:00 AM</p>
//       <p className='text-white text-center absolute left-[130px] top-[1890px] text-2xl'>Data Science <br/> Seminar <br/>1:00 PM</p>
//       <p className='text-white text-center absolute left-[150px] top-[2210px] text-2xl'>Flashmob <br/>3:00 PM</p>

//       <p className='text-white text-center absolute left-[110px] top-[2470px] text-3xl'> DAY 2 - 24th AUGUST</p>

//       <p className='text-white text-center absolute left-[140px] top-[2680px] text-2xl'>Cosmo Town <br/>10:00 AM</p>
//       <p className='text-white text-center absolute left-[132px] top-[2970px] text-2xl'>Cloud Hands- <br/> on  Session <br/>11:00 AM</p>
//       <p className='text-white text-center absolute left-[145px] top-[3270px] text-2xl'>FIFA & <br/> Smackdown <br/>11:00 AM</p>
//       <p className='text-white text-center absolute left-[130px] top-[3600px] text-2xl'>Coding Relay <br/>12:00 PM</p>
//       <p className='text-white text-center absolute left-[135px] top-[3865px] text-2xl'>Desi <br/> Daredevils <br/>Final Round <br/>3:00 PM</p>
//     </div>
//   )
// }
