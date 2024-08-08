import Image from "next/image";
import styles from "./components/hero.module.css";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { easeIn, easeInOut, motion } from "framer-motion";
export default function HeroSection() {
  return (
    <>
      <div className=" relative h-[100vh]">
        <video
          autoPlay="autoplay"
          loop
          muted
          className="object-cover h-full w-screen"
        >
          <source alt="hero video" src="/videos/hero/bgg.mp4" />
        </video>

        <div className="w-[80%] py-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2, duration: 1, ease: easeIn },
                }}
              >
                <Image
                  src="/images/hero/Gfg+White.png"
                  alt="Gfg Logo"
                  width="258"
                  height="41"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2, duration: 1, ease: easeIn },
                }}
                className="py-4"
              >
                <span className="text-lg text-white font-bold ">Presents</span>
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
                  width="500"
                  height="191"
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
                <span className="text-lg text-white font-bold">On</span>
                <span className="text-lg text-white font-semibold mb-6">
                  23rd - 24th August
                </span>
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
                    className={`${styles.button} flex text-xs justify-center`}
                  >
                    <span className={styles.box}>R</span>
                    <span className={styles.box}>E</span>
                    <span className={styles.box}>G</span>
                    <span className={styles.box}>I</span>
                    <span className={styles.box}>S</span>
                    <span className={styles.box}>T</span>
                    <span className={styles.box}>E</span>
                    <span className={styles.box}>R</span>
                  </DialogTrigger>
                  <DialogContent className="w-[90%] h-[75%] px-6 py-8">
                    <iframe
                      src="https://konfhub.com/widget/smackathon-2024?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Nunito&borderRadius=5"
                      id="konfhub-widget"
                      title="Register for Smackathon 2024"
                      width="200%"
                      height="500"
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
              <div className="flex flex-col items-center gap-8 sm:flex-row md:gap-[500px]">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-base text-white font-semibold pb-1">
                    Powered By
                  </span>
                  <Image
                    src="/images/hero/COJAG.png"
                    alt="COJAG logo"
                    width="100"
                    height="50"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-base text-white font-semibold pb-1">
                    Co-powered By
                  </span>
                  <Image
                    src="/images/hero/webgurukul.png"
                    alt="webgurukul logo"
                    width="172"
                    height="50"
                  />
                </div>
              </div>
            </motion.div>
            {/* <div className="flex text-xs justify-center py-24"> */}
            {/* <button className={styles.button}>
                <span className={styles.box1}>D</span>
                <span className={styles.box1}>O</span>
                <span className={styles.box1}>W</span>
                <span className={styles.box1}>N</span>
                <span className={styles.box1}>L</span>
                <span className={styles.box1}>O</span>
                <span className={styles.box1}>A</span>
                <span className={styles.box1}>D</span>
              </button> */}
            {/* <button className={styles.buttondb}>Download Brochure</button> */}
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* <div className="relative">
        <Image
          src="/images/hero/hero-char1.png"
          alt="hero character 1"
          width={800}
          height={500}
          className="hidden opacity-60 absolute top-72 -right-40 md:block md:opacity-100 "
        />
        <Image
          src="/images/hero/hero-chars.png"
          alt="hero character 2"
          width={350}
          height={350}
          className="opacity-60 absolute -bottom-10 left-0 md:opacity-100"
        />
        <div className="">
          <video
            autoPlay="autoplay"
            loop
            muted
            className="object-cover h-screen w-screen"
          >
            <source alt="hero video" src="/videos/hero/bgg.mp4" />
          </video>
        </div>
        <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 shadow-lg flex flex-col gap-10 text-center px-12 py-6 rounded-lg w-9/12 ">
          <div className="flex flex-col items-center">
            <Image
              src="/images/hero/Gfg+White.png"
              alt="Gfg Logo"
              width="278"
              height="52"
              className="mb-6"
            />
            <span className="text-2xl text-white font-bold ">Presents</span>
            <Image
              src="/images/hero/smackathon_logo.png"
              alt="smackathon logo"
              width="525"
              height="191"
            />

            <div className="flex w-full justify-center">
              <button className={styles.button}>
                <span className={styles.box}>R</span>
                <span className={styles.box}>E</span>
                <span className={styles.box}>G</span>
                <span className={styles.box}>I</span>
                <span className={styles.box}>S</span>
                <span className={styles.box}>T</span>
                <span className={styles.box}>E</span>
                <span className={styles.box}>R</span>
              </button>
            </div>

           
          </div>
          <div className="flex-col flex items-center gap-8 justify-between px-4 md:px-12 md:flex-row ">
            <div className="flex flex-col gap-2">
              <span className="text-lg text-white font-semibold md:text-xl">
                Powered By
              </span>
              <Image
                src="/images/hero/COJAG.png"
                alt="COJAG logo"
                width="150"
                height="50"
              />
            </div>
            <span className="text-lg text-white md:text-xl">
              16th - 17th August
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-lg text-white font-semibold md:text-xl">
                Co-powered By
              </span>
              <Image
                src="/images/hero/webgurukul.png"
                alt="webgurukul logo"
                width="172"
                height="50"
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
