"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Prize() {
  return (
    <>
      <div className="bg-[url(/images/prize/temp1.png)] h-[60vh] w-full bg-cover"></div>

      <div
        style={{
          boxShadow: "0px 25px 80px #000000 inset",
        }}
        className="bg-[url('/images/prize/new-prize-bg.png')] w-full bg-center flex flex-col items-center"
      >
        <h2 className="text-5xl mt-16 text-center text-white font-bold">
          Cash Prizes
        </h2>
        <div className="flex flex-col gap-8 px-12 lg:flex-row lg:px-24 lg:gap-20 py-32 md:px-24 md:gap-20">
          <div className="flex flex-col items-center gap-10 order-1 md:order-0">
            <div className="p-14 bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.4),_rgba(147,_133,_227,_0)_72%)] lg:bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_75%)]">
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
            <div className="bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.4),_rgba(147,_133,_227,_0)_75%)] p-14">
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
            <div className="p-16 bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.4),_rgba(147,_133,_227,_0)_60%)] lg:bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_75%)]">
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
      {/* <div
        className="w-full h-72"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #0f0d0c 0% 25%, #0e0e10 25% 50%, #0e0f14 50% 75%, #0e1018 75% 100%)",
        }}
      ></div> */}
      {/* <div
        className="w-full h-72"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #191513 0% 15%, #0f0d0c 15% 30%, #0e0f14 30% 45%, #0e1018 45% 60%, #0e0f14 75% 90%, #0e121a 90% 100%)",
        }}
      ></div> */}
      {/* <div
        className="w-full h-96"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #231c17 0%, #080f18 100%)", //#241d18  #0e121a
        }}
      ></div> */}
      {/* <div
        className="w-full h-96"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #231c17 0% 10%, #201b17 10% 20%, #1d1917 20% 30%, #171617 30% 40%, #171617 40% 50%, #131418 50% 60%, #0f1218 60% 70%, #0f1218 70% 80%, #0f1218 80% 90%, #090f18 90% 100%)",
        }}
      ></div> */}
      <div
        className="w-full h-96 md:h-80"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #231c17 0% 20%, #201b17 20% 40%, #1d1917 40% 60%, #171617 60% 80%, #090f18 80% 100%)",
        }}
      ></div>
    </>
  );
}
