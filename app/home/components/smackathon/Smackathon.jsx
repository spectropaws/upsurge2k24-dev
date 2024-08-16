// import Image from "next/image";
// import StarsBackground from "../StarsBackground";
// import Asteroids from "./Asteroids";
// import { motion } from "framer-motion";
// import styles from "../../../smackathon/components/hero.module.css";
// import Button from "./Button";
// import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
// import { easeIn, easeInOut } from "framer-motion";

// export default function Smackathon() {
//   return (
//     <StarsBackground>
//       <div className="relative w-full min-h-full flex flex-col items-center justify-center px-4 md:px-8">
//         {/* Logo and Presents Text Animation */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
//           className="flex flex-col items-center mb-4 md:mb-6"
//         >
//           <Image height="150" width="150" src="/images/hero/cojag.png" alt="Cojag Logo" />
//           <p className="text-2xl md:text-3xl text-white text-center mt-2 md:mt-4">PRESENTS</p>
//         </motion.div>

//         {/* Planet with Smackathon Logo Animation */}
//         <motion.div
//           className="relative flex flex-col items-center justify-center"
//           style={{
//             backgroundImage: "url('/images/smackathon/invadersPlanet.png')",
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             width: "80vw",
//             height: "80vw",
//             maxWidth: "650px",
//             maxHeight: "650px",
//           }}
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
//         >
//           <Image
//             height="24"
//             width="500"
//             src="/images/hero/smackathon_logo.png"
//             alt="Smackathon Logo"
//             className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//           />
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: 1,
//               transition: { delay: 2, duration: 1, ease: easeIn },
//             }}
//             className="mt-[10rem] md:mt-[14rem]"
//           >
//             <Dialog>
//               <DialogTrigger
//                 className={`${styles.button} flex text-xs md:text-lg justify-center`}
//               >
//                 <p className={styles.box}>R</p>
//                 <p className={styles.box}>E</p>
//                 <p className={styles.box}>G</p>
//                 <p className={styles.box}>I</p>
//                 <p className={styles.box}>S</p>
//                 <p className={styles.box}>T</p>
//                 <p className={styles.box}>E</p>
//                 <p className={styles.box}>R</p>
//               </DialogTrigger>
//               <DialogContent className="w-[90%] max-w-3xl h-[80%] px-4 py-10">
//                 <iframe
//                   src="https://konfhub.com/widget/smackathon-2024?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Nunito&borderRadius=5"
//                   id="konfhub-widget"
//                   title="Register for Smackathon 2024"
//                   className="w-full"
//                   style={{
//                     transform: "translateZ(0)",
//                     backfaceVisibility: "hidden",
//                   }}
//                 ></iframe>
//               </DialogContent>
//             </Dialog>
//           </motion.div>
//         </motion.div>

//         {/* Descriptive Text Animation */}
//         <motion.div
//           className="w-full max-w-[560px]"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
//         >
//           <p className="text-white text-xl md:text-3xl text-center">
//             Experience the thrill of winning incredible prizes that will boost
//             your confidence and take you to unprecedented levels
//           </p>
//         </motion.div>

//         {/* Scattered Asteroids Animation */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
//         >
//           <Asteroids />
//         </motion.div>
//       </div>
//     </StarsBackground>
//   );
// }









"use client";


import Image from "next/image";
import { useRouter } from "next/navigation";
import StarsBackground from "@/app/components/StarsBackground";
import Asteroids from "./Asteroids";
import { motion } from "framer-motion";
import styles from "../../../smackathon/components/hero.module.css";
import { easeIn } from "framer-motion";

export default function Smackathon() {
    const router = useRouter();

    return (
        <StarsBackground>
            <div className="relative w-full min-h-full flex flex-col items-center justify-center">
                {/* Logo and Presents Text Animation */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                    className="flex flex-col items-center mb-[30px]  lg:mb-[-30px]" // Adjust margin-bottom here
                >
                    <Image height="200" width="200" src="/images/hero/cojag.png" alt="Cojag Logo" className="h-[100px] w-[180px] md:h-[100px] md:w-[200px] object-contain " />
                    <p className=" text-2xl md:text-3xl text-white text-center">PRESENTS</p> {/* Adjust margin-top here */}
                </motion.div>

                {/* Planet with Smackathon Logo Animation */}
                <motion.div
                    className="relative flex flex-col items-center justify-center h-[350px] w-[350px] lg:h-[650px] lg:w-[650px]"
                    style={{
                        backgroundImage: "url('/images/smackathon/invadersPlanet.png')",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
                >
                    <Image
                        height="300"
                        width="600"
                        src="/images/hero/smackathon_logo.png"
                        alt="Smackathon Logo"
                        className="absolute top-[100px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:top-[200px]"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 2, duration: 1, ease: easeIn },
                        }}
                        className="mt-[8rem] md:mt-[14rem]"
                    >
                        <button
                            onClick={() => { router.push("/smackathon") }}
                            className={`${styles.button} flex text-xs w-[10rem] md:w-[18rem] justify-center md:text-lg`}
                        >
                            <p className={`${styles.box} py-[4px] px-[6px] md:py-[8px] md:px-[12px]`}>R</p>
                            <p className={`${styles.box} py-[4px] px-[6px] md:py-[8px] md:px-[12px]`}>E</p>
                            <p className={`${styles.box} py-[4px] px-[6px] md:py-[8px] md:px-[12px]`}>G</p>
                            <p className={`${styles.box} py-[4px] px-[6px] md:py-[8px] md:px-[12px]`}>I</p>
                            <p className={`${styles.box} py-[4px] px-[6px] md:py-[8px] md:px-[12px]`}>S</p>
                            <p className={`${styles.box} py-[4px] px-[6px] md:py-[8px] md:px-[12px]`}>T</p>
                            <p className={`${styles.box} py-[4px] px-[6px] md:py-[8px] md:px-[12px]`}>E</p>
                            <p className={`${styles.box} py-[4px] px-[6px] md:py-[8px] md:px-[12px]`}>R</p>
                        </button>
                    </motion.div>
                </motion.div>


                {/* Descriptive Text Animation */}
                <motion.div
                    className="w-[90%] lg:w-[50%]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
                >
                    <p className="text-white text-xl lg:mt-[-20px] text-center  lg:text-3xl ">
                        Unleash your potential and enjoy the thrill of Smackathon, a 24-hour live hackathon. Earn amazing
                        rewards while enhancing your skills and confidence to new heights.
                    </p>
                </motion.div>

                {/* Scattered Asteroids Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
                >
                    <Asteroids />
                </motion.div>
                {/* <Image height='60' width="60" src="/images/smackathon/p1.png" className="absolute left-[20rem] top-[10rem] transform -translate-x-1/2 -translate-y-1/2 "/>
        <Image height='60' width="60" src="/images/smackathon/p2.png" className="absolute left-[15rem] top-[30rem] transform -translate-x-1/2 -translate-y-1/2 "/>
        <Image height='60' width="60" src="/images/smackathon/p3.png" className="absolute left-[10rem] top-[40rem] transform -translate-x-1/2 -translate-y-1/2 "/>
        <Image height='60' width="60" src="/images/smackathon/p4.png" className="absolute right-1/4 top-1/4 transform -translate-x-1/2 -translate-y-1/2 "/>
        <Image height='60' width="60" src="/images/smackathon/p5.png" className="absolute right-[5rem] top-[10rem] transform -translate-x-1/2 -translate-y-1/2 "/> */}

            </div>
        </StarsBackground>
    );
}






// import Image from "next/image";
// import StarsBackground from "../StarsBackground";
// import Asteroids from "./Asteroids";
// import { motion } from "framer-motion";
// import styles from "../../../smackathon/components/hero.module.css";
// import Button from "./Button";

// export default function Smackathon() {
//   return (
//     <StarsBackground>
//       <div className="relative w-full min-h-full flex flex-col items-center justify-center space-y-2">
//         {/* Logo and Presents Text Animation */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
//           className="flex flex-col items-center"
//         >
//           <Image height="200" width="200" src="/images/hero/cojag.png" alt="Cojag Logo"/>
//           <p className="text-3xl text-white text-center mt-4">PRESENTS</p>
//         </motion.div>

//         {/* Planet with Smackathon Logo Animation */}
//         <motion.div
//           className="relative flex flex-col items-center justify-center"
//           style={{
//             backgroundImage: "url('/images/smackathon/invadersPlanet.png')",
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             width: "650px",
//             height: "650px",
//           }}
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
//         >
//           <Image
//             height="30"
//             width="600"
//             src="/images/hero/smackathon_logo.png"
//             alt="Smackathon Logo"
//             className="absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//           />
//         </motion.div>
//         <div><Button/></div>

//         {/* Descriptive Text Animation */}
//         <motion.div
//           className="w-[560px]"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
//         >
//           <p className="text-white text-3xl text-center">
//             Experience the thrill of winning incredible prizes that will boost
//             your confidence and take you to unprecedented levels
//           </p>
//         </motion.div>

//         {/* Scattered Asteroids Animation */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
//         >
//           <Asteroids />
//         </motion.div>
//       </div>
//     </StarsBackground>
//   );
// }





// import Image from "next/image";
// import StarsBackground from "../StarsBackground";
// // import Button from "./Button";
// import Asteroids from "./Asteroids";
// import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
// import { easeIn, easeInOut, motion } from "framer-motion";
// import styles from "../../../smackathon/components/hero.module.css";


// export default function Smackathon() {
//   return (
//     <StarsBackground>
//       <div className="relative w-full min-h-full flex flex-col items-center justify-center">
//         <div>
//           <Image height="200" width="200" src="/images/hero/cojag.png" />
//           <p className="text-3xl text-white text-center mt-4">PRESENTS</p>
//         </div>
//         <div
//           className="relative flex flex-col items-center justify-center"
//           style={{
//             backgroundImage: "url('/images/smackathon/invadersPlanet.png')",
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             width: "650px",
//             height: "650px",
//           }}
//         >
//           <Image
//             height="30"
//             width="600"
//             src="/images/hero/smackathon_logo.png"
//             alt="Smackathon Logo"
//             className="absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//           />

//         </div>
//         <div className="w-[560px]">
//             <p className="text-white text-3xl text-center">
//               Experience the thrill of winning incredible prizes that will boost
//               your confidence and take you to unprecedented levels
//             </p>
//           </div>
//         {/* Scattered Asteroids */}
//         <Asteroids />

//       </div>
//     </StarsBackground>
//   );
// }










// import Image from "next/image";
// import StarsBackground from "../StarsBackground";
// import Button from "./Button";

// export default function Smackathon() {
//   return (
//     <StarsBackground>
//       <div>
//             <div className="w-full h-full flex flex-col items-center justify-center">
//                 {/* <Image height={50} width={50} src="/images/smackathon/screen.png"className="w-1/2"/> */}
//                 <div>
//                     <Image height="200" width="200" src="/images/hero/cojag.png"/>
//                     <p className="text-3xl text-white text-center mt-4">PRESENTS</p>
//                 </div>
//                 <div
//                   className="relative flex flex-col items-center justify-center gap-[250px] "
//                   style={{
//                     backgroundImage: "url('/images/smackathon/invadersPlanet.png')",
//                     backgroundSize: "contain", // or "cover" depending on how you want the background to be scaled
//                     backgroundRepeat: "no-repeat",
//                     backgroundPosition: "center", // Aligns the background image
//                     width: "650px", // Ensures the container is the same width as the logo
//                     height: "650px", // Ensures the container is the same height as the logo
//                   }}
//                 >
//                 <div><Image
//                           height="30"
//                           width="600"
//                           src="/images/hero/smackathon_logo.png"
//                           alt="Smackathon Logo"
//                           className="absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                 /></div>
//                 <div className="w-[560px]"><p className="text-white text-3xl text-center">Experience the thrill of winning incredible prizes that will boost your confidence and take you to unprecedented levels </p></div>

//             </div>
//               <Button label="REGISTER NOW!"/>
//               <Image height="20" width="20" src="/images/smackathon/asteroids.png" className="absolute"/>
//         </div>
//         </div>
//     </StarsBackground>
//   )
// }
