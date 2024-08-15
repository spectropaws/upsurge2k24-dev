"use client";
import { useEffect, useRef } from "react";
import Tilty from "react-tilty";
import Image from "next/image";
import data from "./Details.json";
import StarsBackground from "./StarsBackground";
import styles from "./TeamCard.module.css";

// Import SVGs
import InstagramIcon from "../../../public/images/cards/insta.svg";
import LinkedInIcon from "../../../public/images/cards/linkedin.svg";
import GitHubIcon from "../../../public/images/cards/github.svg";

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
        .${styles.card}:hover:before { ${grad_pos} }  
        .${styles.card}:hover:after { ${sprk_pos} ${opc} } `;

      $card.style.transform = tf;
      $style.innerHTML = style;

      if (e.type === "touchmove") {
        return false;
      }
      clearTimeout(x);
    };

    const handleMouseEnter = (index) => {
      const $card = $cards[index];
      $card.classList.remove(styles.animated);
    };

    const handleMouseLeave = (index) => {
      const $card = $cards[index];
      $style.innerHTML = "";
      $card.removeAttribute("style");
      x = setTimeout(() => {
        $card.classList.add(styles.animated);
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
    <StarsBackground>
      <h1
        className={`${styles.teamName} text-white text-center font-bold md:text-5xl text-3xl pt-20 `}
      >
        <span>Upsurge2k24 Website</span>
        <br />
        <span>Team</span>
      </h1>
      <div className={`${styles.cards} mb-28 mt-28 ml-[0.5rem]`}>
        {data[12].map((cardClass, index) => (
          <Tilty key={index}>
            <div
              className={`${styles.card} ${styles[cardClass.name]} mx-10 ${
                styles.animated
              }`}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="socials flex z-10 justify-center items-center gap-[1rem] md:mb-[10px] lg:mb-[15px]">
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
                      className="ig md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]"
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
                      className="li md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]"
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
                      className="git md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]"
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
  );
};

export default Cards;
