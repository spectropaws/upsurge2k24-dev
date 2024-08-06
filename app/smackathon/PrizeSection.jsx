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
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.8) 0px -80px 36px -28px inset",
          boxShadow: "0px 25px 20px #000000 inset",
        }}
        className="bg-[url('/images/prize/new-prize-bg.png')] w-full bg-center flex flex-col items-center"
      >
        <h2 className="text-5xl mt-16 text-center text-white font-bold">
          Cash Prizes
        </h2>
        <div className="flex flex-col gap-20 px-12 lg:flex-row lg:px-24 py-32 md:px-24">
          <div className="flex flex-col items-center gap-10 order-1 md:order-0">
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
                  src="/images/prize/second-prize.png"
                  width={338}
                  height={397}
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 order:0 md:order-1">
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
                  src="/images/prize/first-prize.png"
                  width={430}
                  height={442}
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 order-1">
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
                  src="/images/prize/third-prize.png"
                  width={338}
                  height={397}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
