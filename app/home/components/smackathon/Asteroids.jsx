import Image from "next/image";
import { motion } from "framer-motion";

export default function Asteroids() {
  const positions = [
    { top: "74%", left: "12%" },
    { top: "40%", left: "7%" },
    { top: "60%", left: "19%" },
    { top: "55%", left: "8%" },
    { top: "80%", left: "5%" },
    { top: "87%", left: "20%" },

    { top: "40%", right: "15%" },
    { top: "60%", right: "14%" },
    { top: "75%", right: "20%" },
    { top: "50%", right: "23%" },
    { top: "76%", right: "5%" },
    { top: "85%", right: "13%" }
  ];

  return (
    <div className="hidden md:block">
      {positions.map((position, index) => (
        <motion.div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 opacity-70"
          style={{ top: position.top, left: position.left, right: position.right }}
          animate={{ rotate: index % 2 === 0 ? 360 : -360 }} // Rotate clockwise or counterclockwise
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Image
            height="50"
            width="50"
            src="/svgs/home/events/asteroid.svg"
            alt={`Asteroid ${index + 1}`}
          />
        </motion.div>
      ))}
    </div>
  );
}






// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Asteroids() {
//   const positions = [
//     { top: "74%", left: "12%" },
//     { top: "40%", left: "7%" },
//     { top: "60%", left: "19%" },
//     { top: "55%", left: "8%" },
//     { top: "80%", left: "5%" },
//     { top: "87%", left: "20%" },
    
//     { top: "40%", right: "15%" },
//     { top: "60%", right: "14%" },
//     { top: "75%", right: "20%" },
//     { top: "50%", right: "23%" },
//     { top: "76%", right: "5%" },
//     { top: "85%", right: "13%" }
//   ];

//   return (
//     <>
//       {positions.map((position, index) => (
//         <motion.div
//           key={index}
//           className="absolute transform -translate-x-1/2 -translate-y-1/2 opacity-70"
//           style={{ top: position.top, left: position.left, right: position.right }}
//           animate={{ rotate: index % 2 === 0 ? 360 : -360 }} // Rotate clockwise or counterclockwise
//           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//         >
//           <Image
//             height="50"
//             width="50"
//             src="/svgs/home/events/asteroid.svg"
//             alt={`Asteroid ${index + 1}`}
//           />
//         </motion.div>
//       ))}
//     </>
//   );
// }
