"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Prize() {
  return (
    <>
      <Image
        src="/images/prize/temp1.png"
        width={2020}
        height={734}
        className="w-full bg-cover"
      />
      {/* <img src= className="" /> */}
      <div className="bg-[url('/images/prize/prize-bg.png')] w-full bg-cover flex flex-col items-center">
        <h2 className="text-5xl mt-16 text-center text-white font-bold">
          Cash Prizes
        </h2>
        <div className="flex flex-col gap-20 lg:flex-row px-24 py-32">
          <div className="flex flex-col items-center gap-10 order-1 md:order-0">
            <span className="font-semibold text-white text-xl">Prize 2</span>

            <div className="bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_75%)] p-14">
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
                <Image src="/images/prize/Prize_2.png" width={338} height={397} />
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
                <Image src="/images/prize/Prize_1.png" width={430} height={442} />
              </motion.div>
            </div>

            <span className="font-medium text-white text-xl">10000</span>
          </div>
          <div className="flex flex-col items-center gap-10 order-1">
            <span className="font-semibold text-white text-xl">Prize 3</span>

            <div className="bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_75%)] p-16">
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
                <Image src="/images/prize/Prize_3.png" width={338} height={397} />
              </motion.div>
            </div>

            <span className="font-medium text-white text-xl">2000</span>
          </div>
        </div>
      </div>
      <Image src="/images/prize/transition-nether-new.png" width={1440} height={348} className="w-full bg-cover h-44 lg:h-auto" />
    </>
  );
}