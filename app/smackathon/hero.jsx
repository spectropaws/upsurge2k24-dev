import Image from "next/image";
import styles from "./components/hero.module.css";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { easeIn, easeInOut, motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <div className=" relative h-[120vh] lg:h-[100vh]">
        <video
          autoPlay="autoplay"
          loop
          muted
          className="object-cover h-full w-screen"
        >
          <source alt="hero video" src="/videos/hero/bgg.mp4" />
        </video>

        <div className="w-[80%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center gap-8 md:gap-32 md:flex-row md:justify-center md:items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2, duration: 1, ease: easeIn },
              }}
            >
              <div className="flex flex-col items-center gap-2 md:mb-[-25px]">
                <p className="text-base text-white font-semibold pb-1 md:text-2xl">
                  Powered By
                </p>
                <Image
                  src="/images/hero/unstop.png"
                  alt="unstop logo"
                  width="150"
                  height="50"
                />
              </div>
            </motion.div>
            <div className="flex flex-col items-center">
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
                  width="200"
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
                <p className={`text-lg text-white font-bold md:text-2xl`}>
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
                  src="/images/hero/smackathon_logo_cropped.png"
                  alt="smackathon logo"
                  width="400"
                  height="191"
                  className="mb-4"
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
                  className={`${styles.fontglow} text-lg md:text-2xl text-center text-white font-semibold mb-8`}
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
                <Dialog className="w-full">
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
                  <DialogContent className="w-[100%] h-[90%] px-6 py-8">
                    <iframe
                      src="https://konfhub.com/widget/smackathon-2024?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Nunito&borderRadius=5"
                      id="konfhub-widget"
                      title="Register for Smackathon 2024"
                      // className="scale-125"
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
            >
              <div className="flex flex-col items-center gap-8  sm:flex-row sm:gap-20 md:gap-80 lg:gap-[400px]">
                <div className="flex flex-col items-center md:mb-[-50px]">
                  <p className="text-base text-white font-semibold pb-1 md:text-2xl">
                    Co-powered By
                  </p>
                  <Image
                    src="/images/hero/Mk.png"
                    alt="mk constructions logo"
                    width="100"
                    height="50"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
