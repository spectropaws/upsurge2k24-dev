import Image from "next/image";
import styles from "./components/hero.module.css";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { easeIn, easeInOut, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <>
      <div className=" relative h-[160vh] lg:h-[100vh]">
        <video
          autoPlay="autoplay"
          loop
          muted
          className="object-cover h-full w-screen"
        >
          <source alt="hero video" src="/videos/hero/bgg.mp4" />
        </video>

        <div className="w-[90%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center gap-8 md:gap-32 md:flex-row md:justify-center md:items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2, duration: 1, ease: easeIn },
              }}
              className="order-1 md:order-[0]"
            >
              <div className="flex flex-col items-center gap-1 md:mb-[-35px]">
                <p className="text-base text-white font-semibold pb-1 md:text-2xl">
                  Powered By
                </p>
                <Image
                  src="/images/hero/Unstop-Logo-White-Small.png"
                  alt="unstop logo"
                  width="200"
                  height="50"
                />
              </div>
            </motion.div>
            <div className="flex flex-col items-center ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2, duration: 1, ease: easeIn },
                }}
                className="flex flex-col items-center"
              >
                <h2 className={`${styles.fontglow} text-center text-white`}>
                  YCCE Techfest
                </h2>
                <p className={`text-lg text-white font-bold md:text-3xl my-4`}>
                  and
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2, duration: 1, ease: easeIn },
                }}
              >
                <Image
                  src="/images/hero/cojag.png"
                  alt="Cojag Logo"
                  width="225"
                  height="41"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2, duration: 1, ease: easeIn },
                }}
                className="pb-4"
              >
                <p className={` text-white text-lg font-bold md:text-3xl`}>
                  Presents
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: [100, 0],
                  scale: [2, 1],
                  transition: {
                    type: "string",
                    bounce: 0.25,
                    duration: 2,
                    ease: easeInOut,
                  },
                }}
              >
                <Image
                  src="/images/hero/smackathon_logo.png"
                  alt="smackathon logo"
                  width="400"
                  height="191"
                  className="mb-8"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2, duration: 1, ease: easeIn },
                }}
                className="flex flex-col items-center gap-1"
              >
                {/* <span className="text-lg text-white font-bold">On</span> */}
                <h2
                  className={`${styles.fontglow} text-lg md:text-2xl text-center text-white font-semibold mb-12`}
                >
                  {/* On <br /> */}
                  23rd - 24th August
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2, duration: 1, ease: easeIn },
                }}
              >
                <Dialog>
                  <DialogTrigger
                    className={`${styles.button} flex text-xs justify-center md:text-lg`}
                  >
                    <p className={styles.box}>R</p>
                    <p className={styles.box}>E</p>
                    <p className={styles.box}>G</p>
                    <p className={styles.box}>I</p>
                    <p className={styles.box}>S</p>
                    <p className={styles.box}>T</p>
                    <p className={styles.box}>E</p>
                    <p className={styles.box}>R</p>
                  </DialogTrigger>
                  <DialogContent className="w-[100%] max-w-3xl h-[90%] px-6 py-14">
                    <iframe
                      src="https://konfhub.com/widget/smackathon-2024?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Nunito&borderRadius=5"
                      id="konfhub-widget"
                      title="Register for Smackathon 2024"
                      className="w-full"
                      style={{
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                    ></iframe>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2, duration: 1, ease: easeIn },
              }}
              className="order-1 "
            >
              <div className="flex flex-col items-center md:mb-[-75px]">
                <p className="text-base text-white font-semibold pb-1 md:text-2xl">
                  Co-powered By
                </p>
                <Image
                  src="/images/hero/new-Mk.png"
                  alt="mk constructions logo"
                  width="150"
                  height="50"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
