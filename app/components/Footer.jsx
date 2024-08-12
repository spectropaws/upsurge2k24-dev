"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import styles from "@/app/smackathon/components/footer.module.css";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <footer
      className={`${styles.unifooter} h-[80vh] w-full flex flex-col items-center justify-center text-white`}
    >
      <div className="w-[80%] h-[80%] flex items-center justify-between">
        <div className="flex flex-col items-center gap-2">
          <motion.div ref={ref}>
            <Image
              src="/images/footer/UPSURGE_Logo.png"
              width={150}
              height={150}
              alt="upsruge logo"
              style={{
                transform: isInView ? "none" : "translateY(-250px)",
                transition: "all 3s",
              }}
            />
          </motion.div>
          <div className="flex items-center gap-5">
            <Image
              src="/images/footer/cosmosLogo.png"
              width={150}
              height={150}
              alt="upsruge logo"
              style={{
                transform: isInView ? "none" : "translateY(-250px)",
                transition: "all 2s",
              }}
            />
            <Image
              src="/images/footer/ACM_final.png"
              width={150}
              height={150}
              alt="upsruge logo"
              style={{
                transform: isInView ? "none" : "translateY(-250px)",
                transition: "all 1s",
              }}
            />
          </div>
          <div className="w-full flex items-center justify-between my-3 bg-black px-4 py-6 rounded-2xl border-8 border-neutral-100">
            <p className="text-3xl">Follow Us</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/cse_ycce_official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svgs/footer//instagram.svg"
                  alt="instagram"
                  width={35}
                  height={50}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/yccecosmos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svgs/footer//linkedin.svg"
                  alt="linkedin"
                  width={35}
                  height={50}
                />
              </Link>
              <Link
                href="mailto:smackathon@upsurge2k24.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svgs/footer/Mail.svg"
                  alt="mail"
                  className={styles.mail}
                  width={45}
                  height={70}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className=" bg-black pt-10 p-2 rounded-2xl border-8 border-neutral-100">
          <ul className="flex flex-col items-center gap-4 text-3xl">
            <li>
              <p>
                <Link href="/">Smackathon</Link>
              </p>
            </li>
            <li>
              <p>
                <Link href="/">Events</Link>
              </p>
            </li>
            <li>
              <p>
                <Link href="/">Schedule</Link>
              </p>
            </li>
            <li>
              <p>
                <Link href="/">Team</Link>
              </p>
            </li>
          </ul>
          <Image
            src="/images/unifooter/tetris-block.png"
            width={200}
            height={200}
            alt="tetris blocks"
            className="w-full"
          />
        </div>

        <div className="text-center flex flex-col items-center gap-5">
          <div className=" bg-black px-4 py-2 rounded-2xl border-8 border-neutral-100">
            <p className="text-4xl font-bold">Find Us</p>
            <p>
              CSE Dept, YCCE College <br /> Wanadongri, Nagpur
            </p>
          </div>
          <div className=" bg-black px-4 py-2 rounded-2xl border-8 border-neutral-100">
            <p className="text-4xl font-bold mb-2">Contact Us</p>
            <div>
              <p>Nancy Pande</p>
              <p>(President Cosmos)</p>
              <p>100</p>
            </div>
            <div className="mt-2">
              <p>Abhijeet Sahu</p>
              <p>(Chairperson ACM)</p>
              <p>9922509022</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-3xl px-24 pb-8 text-center">
        © Copyrights belongs to Department Computer Science and Engineering{" "}
        <br />
        Developed By Website Team CSE Privacy Policy,No Refund Policy
      </p>
    </footer>
  );
}
