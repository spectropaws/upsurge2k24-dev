"use client";
import { useEffect, useRef } from "react";
import styles1 from "./TeamCard.module.css";
import Tilty from "react-tilty";
import data from "./Details.json";
import StarsBackground from "./StarsBackground";
import Image from "next/image";
import InstagramIcon from "../../public/images/teams/insta.svg";
import LinkedInIcon from "../../public/images/teams/linkedin.svg";
import GitHubIcon from "../../public/images/teams/github.svg";
const Cards = () => {
  const cardRefs = useRef([]);
  const styleRef = useRef(null);

  useEffect(() => {
    const $cards = cardRefs.current;
    const $style = styleRef.current;
    let x;

    const handleMouseMove = (e, index) => {
      const $card = $cards[index];
      let pos = [e.offsetX, e.offsetY];
      if (e.type === "touchmove") {
        pos = [e.touches[0].clientX, e.touches[0].clientY];
      }

      const l = pos[0];
      const t = pos[1];
      const h = $card.clientHeight;
      const w = $card.clientWidth;
      const px = Math.abs(Math.floor((100 / w) * l) - 100);
      const py = Math.abs(Math.floor((100 / h) * t) - 100);
      const pa = 50 - px + (50 - py);

      const lp = 50 + (px - 50) / 1.5;
      const tp = 50 + (py - 50) / 1.5;
      const px_spark = 50 + (px - 50) / 7;
      const py_spark = 50 + (py - 50) / 7;
      const p_opc = 20 + Math.abs(pa) * 1.5;
      const ty = ((tp - 50) / 2) * -1;
      const tx = ((lp - 50) / 1.5) * 0.5;

      const grad_pos = `background-position: ${lp}% ${tp}%;`;
      const sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
      const opc = `opacity: ${p_opc / 100};`;
      const tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg);`;

      const style = `
          .card:hover:before { ${grad_pos} }  
          .card:hover:after { ${sprk_pos} ${opc} } `;

      $card.style.transform = tf;
      $style.innerHTML = style;

      if (e.type === "touchmove") {
        return false;
      }
      clearTimeout(x);
    };

    const handleMouseEnter = (index) => {
      const $card = $cards[index];
      $card.classList.remove("animated");
    };

    const handleMouseLeave = (index) => {
      const $card = $cards[index];
      $style.innerHTML = "";
      $card.removeAttribute("style");
      x = setTimeout(() => {
        $card.classList.add("animated");
      }, 2500);
    };

    $cards.forEach((card, index) => {
      card.addEventListener("mousemove", (e) => handleMouseMove(e, index));
      card.addEventListener("mouseenter", () => handleMouseEnter(index));
      card.addEventListener("mouseleave", () => handleMouseLeave(index));
      card.addEventListener("touchmove", (e) => handleMouseMove(e, index));
      card.addEventListener("touchstart", () => handleMouseEnter(index));
      card.addEventListener("touchend", () => handleMouseLeave(index));
      card.addEventListener("touchcancel", () => handleMouseLeave(index));
    });

    return () => {
      if (!$cards) return;
      if (!$cards[0]) return;
      console.log($cards);
      $cards.forEach((card, index) => {
        card.removeEventListener("mousemove", (e) => handleMouseMove(e, index));
        card.removeEventListener("mouseenter", () => handleMouseEnter(index));
        card.removeEventListener("mouseleave", () => handleMouseLeave(index));
        card.removeEventListener("touchmove", (e) => handleMouseMove(e, index));
        card.removeEventListener("touchstart", () => handleMouseEnter(index));
        card.removeEventListener("touchend", () => handleMouseLeave(index));
        card.removeEventListener("touchcancel", () => handleMouseLeave(index));
      });
    };
  }, []);

  return (
    <div className="bg-black">
      <StarsBackground>
        {/* Core Team */}
        <h1
          className={`${styles1.teamName} text-white text-center font-bold md:text-5xl text-3xl pt-20`}
        >
          CORE TEAM
        </h1>
        {/* <div className='main_container'> */}
        <div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
          {data[0].map((cardClass, index) => (
            <Tilty key={index}>
              <div
                className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${
                  styles1.animated
                }`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="socials flex z-10 justify-center mb-4 items-center gap-[1rem] md:mb-[6px] lg:mb-[15px]">
                  {cardClass.instagram && (
                    <a
                      href={cardClass.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="ig md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.linkedin && (
                    <a
                      href={cardClass.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="li md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.github && (
                    <a
                      href={cardClass.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GitHubIcon}
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="git md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                </div>
              </div>
            </Tilty>
          ))}
          <style ref={styleRef}></style>
        </div>
        {/* </div> */}
      </StarsBackground>
      <StarsBackground>
        {/* Technical Team */}
        <h1
          className={`${styles1.teamName} text-white text-center font-bold md:text-5xl text-3xl pt-20`}
        >
          TECHNICAL TEAM
        </h1>
        <div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
          {data[1].map((cardClass, index) => (
            <Tilty key={index}>
              <div
                className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${
                  styles1.animated
                }`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="socials flex z-10 justify-center mb-4 items-center gap-[1rem] md:mb-[6px] lg:mb-[15px]">
                  {cardClass.instagram && (
                    <a
                      href={cardClass.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="ig md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.linkedin && (
                    <a
                      href={cardClass.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="li md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.github && (
                    <a
                      href={cardClass.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GitHubIcon}
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="git md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                </div>
              </div>
            </Tilty>
          ))}
          <style ref={styleRef}></style>
        </div>
      </StarsBackground>
      <StarsBackground>
        {/* Design Team */}
        <h1
          className={`${styles1.teamName} text-white text-center font-bold md:text-5xl text-3xl pt-20`}
        >
          DESIGN TEAM
        </h1>
        <div className={`${styles1.cards} mb-32 mt-20 ml-[0.5rem]`}>
          {data[2].map((cardClass, index) => (
            <Tilty key={index}>
              <div
                className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${
                  styles1.animated
                }`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="socials flex z-10 justify-center mb-4 items-center gap-[1rem] md:mb-[6px] lg:mb-[15px]">
                  {cardClass.instagram && (
                    <a
                      href={cardClass.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="ig md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.linkedin && (
                    <a
                      href={cardClass.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="li md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.github && (
                    <a
                      href={cardClass.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GitHubIcon}
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="git md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                </div>
              </div>
            </Tilty>
          ))}
          <style ref={styleRef}></style>
        </div>
      </StarsBackground>
      <StarsBackground>
        {/* EventManagement Team  */}
        <h1
          className={`${styles1.teamName} text-white text-center font-bold md:text-5xl text-3xl pt-20`}
        >
          EVENT MANAGEMENT TEAM
        </h1>
        <div className={`${styles1.cards} mb-32 mt-20 ml-[0.5rem]`}>
          {data[3].map((cardClass, index) => (
            <Tilty key={index}>
              <div
                className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${
                  styles1.animated
                }`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="socials flex z-10 justify-center mb-4 items-center gap-[1rem] md:mb-[6px] lg:mb-[15px]">
                  {cardClass.instagram && (
                    <a
                      href={cardClass.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="ig md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.linkedin && (
                    <a
                      href={cardClass.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="li md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.github && (
                    <a
                      href={cardClass.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GitHubIcon}
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="git md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                </div>
              </div>
            </Tilty>
          ))}
          <style ref={styleRef}></style>
        </div>
      </StarsBackground>
      <StarsBackground>
        {/* Cultural Team  */}
        <h1
          className={`${styles1.teamName} text-white text-center font-bold md:text-5xl text-3xl pt-20`}
        >
          CULTURAL TEAM
        </h1>
        <div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
          {data[4].map((cardClass, index) => (
            <Tilty key={index}>
              <div
                className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${
                  styles1.animated
                }`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="socials flex z-10 justify-center mb-4 items-center gap-[1rem] md:mb-[6px] lg:mb-[15px]">
                  {cardClass.instagram && (
                    <a
                      href={cardClass.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="ig md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.linkedin && (
                    <a
                      href={cardClass.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="li md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.github && (
                    <a
                      href={cardClass.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GitHubIcon}
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="git md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                </div>
              </div>
            </Tilty>
          ))}
          <style ref={styleRef}></style>
        </div>
      </StarsBackground>
      <StarsBackground>
        {/* Sponsership team  */}
        <h1
          className={`${styles1.teamName} text-white text-center font-bold md:text-5xl text-3xl pt-20`}
        >
          SPONSERSHIP TEAM
        </h1>
        <div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
          {data[5].map((cardClass, index) => (
            <Tilty key={index}>
              <div
                className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${
                  styles1.animated
                }`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="socials flex z-10 justify-center mb-4 items-center gap-[1rem] md:mb-[6px] lg:mb-[15px]">
                  {cardClass.instagram && (
                    <a
                      href={cardClass.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="ig md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.linkedin && (
                    <a
                      href={cardClass.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="li md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.github && (
                    <a
                      href={cardClass.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GitHubIcon}
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="git md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                </div>
              </div>
            </Tilty>
          ))}
          <style ref={styleRef}></style>
        </div>
      </StarsBackground>
      <StarsBackground>
        {/* Database team  */}
        <h1
          className={`${styles1.teamName} text-white text-center font-bold md:text-5xl text-3xl pt-20`}
        >
          DATABASE TEAM
        </h1>
        <div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
          {data[6].map((cardClass, index) => (
            <Tilty key={index}>
              <div
                className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${
                  styles1.animated
                }`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="socials flex z-10 justify-center mb-4 items-center gap-[1rem] md:mb-[6px] lg:mb-[15px]">
                  {cardClass.instagram && (
                    <a
                      href={cardClass.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="ig md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.linkedin && (
                    <a
                      href={cardClass.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="li md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.github && (
                    <a
                      href={cardClass.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GitHubIcon}
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="git md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                </div>
              </div>
            </Tilty>
          ))}
          <style ref={styleRef}></style>
        </div>
      </StarsBackground>
      <StarsBackground>
        {/* Publicity Team  */}
        <h1
          className={`${styles1.teamName} text-white text-center font-bold md:text-5xl text-3xl pt-20`}
        >
          PUBLICITY TEAM
        </h1>
        <div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
          {data[7].map((cardClass, index) => (
            <Tilty key={index}>
              <div
                className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${
                  styles1.animated
                }`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="socials flex z-10 justify-center mb-4 items-center gap-[1rem] md:mb-[6px] lg:mb-[15px]">
                  {cardClass.instagram && (
                    <a
                      href={cardClass.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="ig md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.linkedin && (
                    <a
                      href={cardClass.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="li md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.github && (
                    <a
                      href={cardClass.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GitHubIcon}
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="git md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                </div>
              </div>
            </Tilty>
          ))}
          <style ref={styleRef}></style>
        </div>
      </StarsBackground>
      <StarsBackground>
        {/* Literature Team  */}
        <h1
          className={`${styles1.teamName} text-white text-center font-bold md:text-5xl text-3xl pt-20`}
        >
          LITERATURE TEAM
        </h1>
        <div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
          {data[8].map((cardClass, index) => (
            <Tilty key={index}>
              <div
                className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${
                  styles1.animated
                }`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="socials flex z-10 justify-center mb-4 items-center gap-[1rem] md:mb-[6px] lg:mb-[15px]">
                  {cardClass.instagram && (
                    <a
                      href={cardClass.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="ig md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.linkedin && (
                    <a
                      href={cardClass.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="li md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.github && (
                    <a
                      href={cardClass.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GitHubIcon}
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="git md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                </div>
              </div>
            </Tilty>
          ))}
          <style ref={styleRef}></style>
        </div>
      </StarsBackground>
      <StarsBackground>
        {/* Art team  */}
        <h1
          className={`${styles1.teamName} text-white text-center font-bold md:text-5xl text-3xl pt-20`}
        >
          ART TEAM
        </h1>
        <div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
          {data[9].map((cardClass, index) => (
            <Tilty key={index}>
              <div
                className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${
                  styles1.animated
                }`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="socials flex z-10 justify-center mb-4 items-center gap-[1rem] md:mb-[6px] lg:mb-[15px]">
                  {cardClass.instagram && (
                    <a
                      href={cardClass.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="ig md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.linkedin && (
                    <a
                      href={cardClass.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="li md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.github && (
                    <a
                      href={cardClass.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GitHubIcon}
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="git md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                </div>
              </div>
            </Tilty>
          ))}
          <style ref={styleRef}></style>
        </div>
      </StarsBackground>
      <StarsBackground>
        {/* Sports Team  */}
        <h1
          className={`${styles1.teamName} text-white text-center font-bold md:text-5xl text-3xl pt-20`}
        >
          SPORTS TEAM
        </h1>
        <div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
          {data[10].map((cardClass, index) => (
            <Tilty key={index}>
              <div
                className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${
                  styles1.animated
                }`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="socials flex z-10 justify-center mb-4 items-center gap-[1rem] md:mb-[6px] lg:mb-[15px]">
                  {cardClass.instagram && (
                    <a
                      href={cardClass.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="ig md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.linkedin && (
                    <a
                      href={cardClass.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="li md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.github && (
                    <a
                      href={cardClass.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GitHubIcon}
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="git md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                </div>
              </div>
            </Tilty>
          ))}
          <style ref={styleRef}></style>
        </div>
      </StarsBackground>
      <StarsBackground>
        {/* Social Media Team  */}
        <h1
          className={`${styles1.teamName} text-white text-center font-bold md:text-5xl text-3xl pt-20`}
        >
          SOCIAL MEDIA TEAM
        </h1>
        <div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
          {data[11].map((cardClass, index) => (
            <Tilty key={index}>
              <div
                className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${
                  styles1.animated
                }`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="socials flex z-10 justify-center mb-4 items-center gap-[1rem] md:mb-[6px] lg:mb-[15px]">
                  {cardClass.instagram && (
                    <a
                      href={cardClass.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="ig md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.linkedin && (
                    <a
                      href={cardClass.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="li md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                  {cardClass.github && (
                    <a
                      href={cardClass.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GitHubIcon}
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="git md:h-[15px] md:w-[15px] lg:h-[25px] lg:w-[25px]"
                      />
                    </a>
                  )}
                </div>
              </div>
            </Tilty>
          ))}
          <style ref={styleRef}></style>
        </div>
      </StarsBackground>
    </div>
  );
};

export default Cards;
