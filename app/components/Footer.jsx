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
    <>
      <footer
        className={`${styles.unifooter} relative py-8 w-full flex flex-col gap-12 items-center justify-center text-white md:p-12 `}
      >
        <motion.div ref={ref} className="absolute bottom-12 right-[475px]">
          <Image
            src="/images/unifooter/ufo-removebg-preview.png"
            width={200}
            height={200}
            alt="ufo image"
            style={{
              transform: isInView ? "none" : "translateY(-400px)",
              transition: "all 3s",
            }}
          />
        </motion.div>
        <div className="w-[95%] h-[80%] flex flex-col gap-20 items-center justify-between md:flex-row">
          <div className="flex flex-col items-center gap-2">
            <motion.div ref={ref}>
              <Image
                src="/images/footer/UPSURGE_Logo.png"
                width={100}
                height={100}
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
                width={100}
                height={100}
                alt="upsruge logo"
                style={{
                  transform: isInView ? "none" : "translateY(-250px)",
                  transition: "all 2s",
                }}
              />
              <Image
                src="/images/footer/ACM_final.png"
                width={100}
                height={100}
                alt="upsruge logo"
                style={{
                  transform: isInView ? "none" : "translateY(-250px)",
                  transition: "all 1s",
                }}
              />
            </div>
            <div className="w-full flex items-center gap-14 mt-6">
              <p className="text-white text-3xl">Follow Us</p>
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
          <div className="mx-6">
            <ul className="flex flex-col gap-7 items-center md:gap-10">
              <li>
                <p>
                  <Link className="text-4xl font-bold" href="/smackathon">
                    Smackathon
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link className="text-4xl font-bold" href="/schedule">
                    Schedule
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link className="text-4xl font-bold" href="/events">
                    Events
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link className="text-4xl font-bold" href="/team">
                    Teams
                  </Link>
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-center md:text-left">
              <p className="mb-2 text-5xl">Find Us</p>
              <p className="text-2xl px-4 md:px-0">
                CSE Dept, YCCE College Wanadongri, Nagpur{" "}
              </p>
            </div>
            <div>
              <p className="text-center mb-4 text-5xl md:text-left">
                Contact Us
              </p>
              <div className="flex items-center justify-between px-6 text-center md:gap-10 md:text-left md:px-0">
                <div className="">
                  <p>Nancy Pande</p>
                  <p>(President Cosmos)</p>
                  <p>983576249</p>
                </div>

                <div className="">
                  <p>Abhijeet Sahu</p>
                  <p>(Chairperson ACM)</p>
                  <p>9922509022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xl text-center md:pt-8 md:px-24 md:text-3xl z-10">
          © Copyrights belongs to Department Computer Science and Engineering
          <br />
          Developed By Website Team CSE <br />
          <Link
            href="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Privacy+and+policy+/privacy+policy+.pdf"
            className={styles.a}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy&nbsp;
          </Link>
          ,&nbsp;
          <Link
            href="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/Privacy+and+policy+/no+refund+policy+.pdf"
            className={styles.a}
            target="_blank"
            rel="noopener noreferrer"
          >
            No Refund Policy
          </Link>
        </p>
      </footer>
    </>
  );
}
