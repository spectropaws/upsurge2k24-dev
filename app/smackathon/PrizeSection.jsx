"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./components/hero.module.css";

export default function Prize() {
  return (
    <>
      <div className="relative">
        <Image
          src="/svgs/prize/ground.svg"
          width={2020}
          height={734}
          className="w-full object-cover"
        />
        <div className="flex absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ">
          <button className={styles.btnfinale}>Download Brochure</button>
          {/* <button class={styles.btndb}>
            <i class={styles.animation}></i>BUTTON
            <i class={styles.animation}></i>
          </button> */}
        </div>
      </div>
      {/* <img src= className="" /> */}
      <div className="bg-[url('/images/prize/prize-bg.png')] w-full bg-cover flex flex-col items-center">
        <h2 className="text-5xl mt-16 text-center text-white font-bold">
          Cash Prizes
        </h2>
        <div className="flex flex-col gap-20 px-12 lg:flex-row lg:px-24 py-32 md:px-24">
          <div className="flex flex-col items-center gap-10 order-1 md:order-0">
            <span className="font-semibold text-white text-xl">Prize 2</span>

            <div className="p-14 bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_72%)] lg:bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_75%)]">
              <motion.div
                animate={{
                  y: [10, -10],
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                    // delay: 1,
                  },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/images/prize/Prize_2.png"
                  width={338}
                  height={397}
                />
              </motion.div>
            </div>
            <span className="font-medium text-white text-xl">5000</span>
          </div>
          <div className="flex flex-col items-center gap-10 order:0 md:order-1">
            <span className="font-semibold text-white text-xl">Prize 1</span>
            <div className="bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_75%)] p-14">
              <motion.div
                animate={{
                  y: [10, -10],
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                    delay: 1,
                  },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/images/prize/Prize_1.png"
                  width={430}
                  height={442}
                />
              </motion.div>
            </div>

            <span className="font-medium text-white text-xl">10000</span>
          </div>
          <div className="flex flex-col items-center gap-10 order-1">
            <span className="font-semibold text-white text-xl">Prize 3</span>

            <div className="p-16 bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_72%)] lg:bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_75%)]">
              <motion.div
                animate={{
                  y: [10, -10],
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                    // delay: 1,
                  },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/images/prize/Prize_3.png"
                  width={338}
                  height={397}
                />
              </motion.div>
            </div>

            <span className="font-medium text-white text-xl">2000</span>
          </div>
        </div>
      </div>
      <Image
        src="/images/prize/transition-nether-new.png"
        width={1440}
        height={348}
        className="w-full bg-cover h-44 lg:h-auto"
      />
    </>
  );
}
