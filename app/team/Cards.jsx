"use client";
import { useEffect, useRef } from 'react';
import styles1 from './TeamCard.module.css';
import Tilty from 'react-tilty';
// import generateStars, { starrySkyStyle } from './generateStars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import "./Cards.module.css"
import data from "./Details.json"
import StarsBackground from './StarsBackground';
// import { starrySkyStyle } from './generateStars';

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
      console.log(data);
  
      return () => {
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


 {/* Core Team */}
 <h1 className={`${styles1.teamName} text-white text-center font-bold md:text-6xl text-3xl mt-20 ml-[1.5rem]`}>CORE TEAM</h1>
 {/* <div className='main_container'> */}
<div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
      {data[0].map((cardClass, index) => (
        <Tilty key={index}>
        <div className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${styles1.animated}`}
          ref={(el) => (cardRefs.current[index] = el)}>
          <div className="socials z-10 flex justify-center items-center gap-[1rem] md:mb-[10px] lg:mb-[15px]">
            {cardClass.instagram && (
              <a href={cardClass.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='ig md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.linkedin && (
              <a href={cardClass.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='li md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.github && (
              <a href={cardClass.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className='git md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
          </div>
        </div>
      </Tilty>
      ))}
      <style ref={styleRef}></style>
    </div>
  {/* </div> */}

 {/* Technical Team */}
<h1 className={`${styles1.teamName} text-white text-center font-bold md:text-6xl text-3xl mt-20 ml-[1.5rem]`}>TECHNICAL TEAM</h1>
<div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
      {data[1].map((cardClass, index) => (
        <Tilty key={index}>
        <div className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${styles1.animated}`}
          ref={(el) => (cardRefs.current[index] = el)}>
          <div className="socials z-10 flex justify-center items-center gap-[1rem] md:mb-[10px] lg:mb-[15px]">
            {cardClass.instagram && (
              <a href={cardClass.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='ig md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.linkedin && (
              <a href={cardClass.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='li md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.github && (
              <a href={cardClass.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className='git md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
          </div>
        </div>
      </Tilty>
      ))}
      <style ref={styleRef}></style>
    </div>

 {/* Design Team */}
<h1 className={`${styles1.teamName} text-white text-center font-bold md:text-6xl text-3xl ml-[1.5rem]`}>DESIGN TEAM</h1>
<div className={`${styles1.cards} mb-32 mt-20 ml-[0.5rem]`} >
      {data[2].map((cardClass, index) => (
        <Tilty key={index}>
        <div className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${styles1.animated}`}
          ref={(el) => (cardRefs.current[index] = el)}>
          <div className="socials z-10 flex justify-center items-center gap-[1rem] md:mb-[10px] lg:mb-[15px]">
            {cardClass.instagram && (
              <a href={cardClass.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='ig md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.linkedin && (
              <a href={cardClass.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='li md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.github && (
              <a href={cardClass.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className='git md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
          </div>
        </div>
      </Tilty>
      ))}
      <style ref={styleRef}></style>
    </div>

    {/* EventManagement Team  */}
<h1 className={`${styles1.teamName} text-white text-center font-bold md:text-6xl text-3xl ml-[1.5rem]`}>EVENT MANAGEMENT TEAM</h1>
<div className={`${styles1.cards} mb-32 mt-20 ml-[0.5rem]`}>
      {data[3].map((cardClass, index) => (
        <Tilty key={index}>
            <div className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${styles1.animated}`}
          ref={(el) => (cardRefs.current[index] = el)}>
          <div className="socials z-10 flex justify-center items-center gap-[1rem] md:mb-[10px] lg:mb-[15px]">
            {cardClass.instagram && (
              <a href={cardClass.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='ig md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.linkedin && (
              <a href={cardClass.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='li md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.github && (
              <a href={cardClass.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className='git md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
          </div>
        </div>
      </Tilty>
      ))}
      <style ref={styleRef}></style>
    </div>

    {/* Cultural Team  */}
<h1 className={`${styles1.teamName} text-white text-center font-bold md:text-6xl text-3xl ml-[1.5rem]`}>CULTURAL TEAM</h1>
<div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
{data[4].map((cardClass, index) => (
        <Tilty key={index}>
            <div className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${styles1.animated}`}
          ref={(el) => (cardRefs.current[index] = el)}>
          <div className="socials z-10 flex justify-center items-center gap-[1rem] md:mb-[10px] lg:mb-[15px]">
            {cardClass.instagram && (
              <a href={cardClass.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='ig md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.linkedin && (
              <a href={cardClass.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='li md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.github && (
              <a href={cardClass.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className='git md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
          </div>
        </div>
      </Tilty>
      ))}
      <style ref={styleRef}></style>
    </div>

    {/* Sponsership team  */}
<h1 className={`${styles1.teamName} text-white text-center font-bold md:text-6xl text-3xl ml-[1.5rem]`}>SPONSERSHIP TEAM</h1>
<div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
      {data[5].map((cardClass, index) => (
        <Tilty key={index}>
            <div className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${styles1.animated}`}
          ref={(el) => (cardRefs.current[index] = el)}>
          <div className="socials z-10 flex justify-center items-center gap-[1rem] md:mb-[10px] lg:mb-[15px]">
            {cardClass.instagram && (
              <a href={cardClass.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='ig md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.linkedin && (
              <a href={cardClass.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='li md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.github && (
              <a href={cardClass.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className='git md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
          </div>
        </div>
      </Tilty>
      ))}
      <style ref={styleRef}></style>
    </div>

    {/* Database team  */}
<h1 className={`${styles1.teamName} text-white text-center font-bold md:text-6xl text-3xl ml-[1.5rem]`}>DATABASE TEAM</h1>
<div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
{data[6].map((cardClass, index) => (
        <Tilty key={index}>
            <div className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${styles1.animated}`}
          ref={(el) => (cardRefs.current[index] = el)}>
          <div className="socials z-10 flex justify-center items-center gap-[1rem] md:mb-[10px] lg:mb-[15px]">
            {cardClass.instagram && (
              <a href={cardClass.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='ig md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.linkedin && (
              <a href={cardClass.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='li md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.github && (
              <a href={cardClass.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className='git md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
          </div>
        </div>
      </Tilty>
      ))}
      <style ref={styleRef}></style>
    </div>

    {/* Publicity Team  */}
<h1 className={`${styles1.teamName} text-white text-center font-bold md:text-6xl text-3xl ml-[1.5rem]`}>PUBLICITY TEAM</h1>
<div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
      {data[7].map((cardClass, index) => (
        <Tilty key={index}>
            <div className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${styles1.animated}`}
          ref={(el) => (cardRefs.current[index] = el)}>
          <div className="socials z-10 flex justify-center items-center gap-[1rem] md:mb-[10px] lg:mb-[15px]">
            {cardClass.instagram && (
              <a href={cardClass.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='ig md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.linkedin && (
              <a href={cardClass.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='li md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.github && (
              <a href={cardClass.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className='git md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
          </div>
        </div>
      </Tilty>
      ))}
      <style ref={styleRef}></style>
    </div>

    {/* Literature Team  */}
<h1 className={`${styles1.teamName} text-white text-center font-bold md:text-6xl text-3xl ml-[1.5rem]`}>LITERATURE TEAM</h1>
<div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
{data[8].map((cardClass, index) => (
        <Tilty key={index}>
            <div className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${styles1.animated}`}
          ref={(el) => (cardRefs.current[index] = el)}>
          <div className="socials z-10 flex justify-center items-center gap-[1rem] md:mb-[10px] lg:mb-[15px]">
            {cardClass.instagram && (
              <a href={cardClass.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='ig md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.linkedin && (
              <a href={cardClass.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='li md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.github && (
              <a href={cardClass.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className='git md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
          </div>
        </div>
      </Tilty>
      ))}
      <style ref={styleRef}></style>
    </div>
    
    {/* Art team  */}
  <h1 className={`${styles1.teamName} text-white text-center font-bold md:text-6xl text-3xl ml-[1.5rem]`}>ART TEAM</h1>
  <div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
  {data[9].map((cardClass, index) => (
        <Tilty key={index}>
            <div className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${styles1.animated}`}
          ref={(el) => (cardRefs.current[index] = el)}>
          <div className="socials z-10 flex justify-center items-center gap-[1rem] md:mb-[10px] lg:mb-[15px]">
            {cardClass.instagram && (
              <a href={cardClass.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='ig md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.linkedin && (
              <a href={cardClass.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='li md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.github && (
              <a href={cardClass.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className='git md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
          </div>
        </div>
      </Tilty>
      ))}
      <style ref={styleRef}></style>
    </div>

    {/* Sports Team  */}
    <h1 className={`${styles1.teamName} text-white text-center font-bold md:text-6xl text-3xl mt-20 ml-[1.5rem]`}>SPORTS TEAM</h1>
    <div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
    {data[10].map((cardClass, index) => (
        <Tilty key={index}>
            <div className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${styles1.animated}`}
          ref={(el) => (cardRefs.current[index] = el)}>
          <div className="socials z-10 flex justify-center items-center gap-[1rem] md:mb-[10px] lg:mb-[15px]">
            {cardClass.instagram && (
              <a href={cardClass.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='ig md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.linkedin && (
              <a href={cardClass.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='li md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.github && (
              <a href={cardClass.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className='git md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
          </div>
        </div>
      </Tilty>
      ))}
      <style ref={styleRef}></style>
    </div>

    {/* Social Media Team  */}
    <h1 className={`${styles1.teamName} text-white text-center font-bold md:text-6xl text-3xl mt-20 ml-[1.5rem]`}>SOCIAL MEDIA TEAM</h1>
    <div className={`${styles1.cards} mb-28 mt-28 ml-[0.5rem]`}>
    {data[11].map((cardClass, index) => (
        <Tilty key={index}>
            <div className={`${styles1.card} ${styles1[cardClass.name]} mx-10 ${styles1.animated}`}
          ref={(el) => (cardRefs.current[index] = el)}>
          <div className="socials z-10 flex justify-center items-center gap-[1rem] md:mb-[10px] lg:mb-[15px]">
            {cardClass.instagram && (
              <a href={cardClass.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='ig md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.linkedin && (
              <a href={cardClass.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='li md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
              </a>
            )}
            {cardClass.github && (
              <a href={cardClass.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className='git md:h-[23px] md:w-[23px] lg:h-[30px] lg:w-[30px]' />
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
