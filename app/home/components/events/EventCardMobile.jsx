import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Array of retro game character images
const retroCharacters = [
  '/svgs/eventCardCharacters/char1.svg',
  '/svgs/eventCardCharacters/char2.svg',
  '/svgs/eventCardCharacters/char3.svg',
  '/svgs/eventCardCharacters/char4.svg',
  '/svgs/eventCardCharacters/char5.svg',
  '/svgs/eventCardCharacters/char6.svg',
  '/svgs/eventCardCharacters/char7.svg',
  '/svgs/eventCardCharacters/char8.svg',
  '/svgs/eventCardCharacters/char10.svg',
  '/svgs/eventCardCharacters/char11.svg',
  '/svgs/eventCardCharacters/char12.svg',
  '/svgs/eventCardCharacters/char13.svg',
  '/svgs/eventCardCharacters/char14.svg',
  '/svgs/eventCardCharacters/char15.svg',
  '/svgs/eventCardCharacters/char16.svg',
  '/svgs/eventCardCharacters/char17.svg',
  '/svgs/eventCardCharacters/char18.svg',
  '/svgs/eventCardCharacters/char19.svg',
  '/svgs/eventCardCharacters/char20.svg',
  '/svgs/eventCardCharacters/char21.svg',
  '/svgs/eventCardCharacters/char22.svg',
];

const getRandomCharacter = () => {
  return retroCharacters[Math.floor(Math.random() * retroCharacters.length)];
};

const EventCardMobile = ({ title, description, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Faster transition duration
      className="w-[90%] mx-auto rounded-lg overflow-hidden border-2 border-yellow-500 bg-gradient-to-b shadow-lg retro-border relative"
    >
      {/* Image at the top */}
      <div className="w-full h-[210px] relative z-10">
        <Image src={image} alt={title} fill objectFit='fill' className="object-cover border-b-2 border-yellow-500 " />
      </div>
      
      {/* Content at the bottom */}
      <div className="w-full h-[255px] bg-blue-950 bg-opacity-40 relative z-10">
        <div className="text-left retro-font text-white">
          <h3 className="font-bold text-2xl mb-2 px-3 pt-3 leading-5 mr-7">{title}</h3>
          <p className="mt-2 mb-4 leading-5 text-justify text-[20px] px-3 overflow-hidden">
            {description}
          </p>
          <div className='absolute bottom-2 w-full flex justify-center items-center'>
            <button
              onClick={() => alert('Details Button Clicked!')} // Replace with actual handler
              className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors duration-300"
            >
              Details
            </button>
          </div>
          
          {/* Random retro characters */}
          <div className="absolute inset-0 flex justify-between items-start p-2">
            <Image src={getRandomCharacter()} alt="Retro Character" width={30} height={30} className="absolute top-2 right-2" />
            <Image src={getRandomCharacter()} alt="Retro Character" width={30} height={30} className="absolute bottom-2 right-2" />
            <Image src={getRandomCharacter()} alt="Retro Character" width={30} height={30} className="absolute bottom-2 left-2" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCardMobile;
