import Image from "next/image";
import styles from "./components/hero.module.css";

export default function HeroSection() {
  return (
    <>
      <div className="relative">
        <Image
          src="/images/hero/hero-char1.png"
          alt="hero character 1"
          width={800}
          height={500}
          className="hidden opacity-60 absolute top-72 -right-40 md:block opacity-100 "
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
            <source alt="hero video" src="/videos/hero/bggg.mp4" />
          </video>
          {/* <img src="/images/bg.webp" className="object-cover h-screen w-screen" /> */}
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

            {/* <button className={styles.btn}>Register Now!</button> */}
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
      </div>
    </>
  );
}
