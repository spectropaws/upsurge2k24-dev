"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EventCard = ({ poster, title, description, pokemon, isPosterLeft, registerLink, id }) => {
    return (
        <div id={`${id}`}
            className="relative flex flex-col md:flex-row items-center w-full my-8 p-4 border border-gray-300 rounded-lg shadow-md"
            style={{ backgroundColor: '#a2d5f2' }} // Soft pastel blue background color
        >
            <div className="w-full md:w-1/2 p-2 md:order-1">
                <Image
                    src={poster}
                    alt="Event Poster"
                    layout="responsive"
                    width={4}
                    height={3}
                    className="rounded-lg object-cover"
                />
            </div>
            <div className={`w-full md:w-1/2 p-2 relative ${isPosterLeft && 'order-2'}`}>
                <h3 className="mb-2 text-3xl font-semibold text-gray-800">{title}</h3>
                <p className="mb-4 text-xl leading-6 text-gray-600 text-justify" style={{ whiteSpace: 'pre-line' }}>{description}</p>
                <Link href={registerLink} passHref target='_blank' onClick={(e) => {
                    if (!registerLink) e.preventDefault();
                }}>
                    <p>
                        <button
                            className="self-start px-6 py-2 mt-4 text-white bg-[#2E7586] hover:bg-[#237C47] rounded"
                        >
                            {registerLink ? 'Register' : 'Join us'}
                        </button>
                    </p>
                </Link>
                <div className="absolute -right-10 -bottom-5 w-32 h-32">
                    <Image
                        src={pokemon}
                        alt="Pokemon"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>
    );
};

const EventCards = () => {
    const events = [
        {
            poster: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/events/cosmoTown.png',
            title: 'Cosmotown',
            id: "cosmotown",
            description: "Cosmotown is a thrilling minigame festival happening on August 24th from 10 AM to 3:30 PM! Explore over 10 diverse games, collecting stamps on your Cosmo-Passport as you progress. Win prizes and bid on rewards in the 4 PM auction. Pre-register to receive double CosmoCoins, giving you a competitive edge. Entry fee is just Rs 50, making it an affordable and fun-filled experience. Don't miss out on the excitement and prizes worth Rs 2500! Come along and see if you have what it takes to conquer Cosmotown!",
            pokemon: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/events/char2.png',
            isPosterLeft: true,
            registerLink: 'https://forms.gle/MG2tg8sbh7eY6S3v8',
        },
        {
            poster: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/events/talentsque.png',
            title: 'Talentesque',
            id: "talentsque",
            description: "Calling all talented individuals! Join TALENTESQUE, a spectacular talent show, on August 23rd, 2024, at 12:00 noon. Whether you're a singer, dancer, musician, magician, comedian, or have any other hidden talent, we invite you to take center stage. Showcase your unique talent, compete for prizes worth Rs 5000/, and enjoy an unforgettable experience. Entry fees: Rs 49/ (solo), Rs 99/ (duo), Rs 149/ (group). Register now and unleash your inner star!",
            pokemon: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/events/char1.png',
            isPosterLeft: false,
            registerLink: 'https://forms.gle/rAKGi9MVayXSd8Th8',
        },
        {
            poster: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/events/codingRelay.png',
            title: 'Coding Relay',
            id: "codingRelay",
            description: "Get ready for the high-energy CODING RELAY at UPSURGE 2k24! Assemble your team for a thrilling two-stage challenge. First, tackle the Debugging Quiz, where only the top teams will advance. Then, compete in the Coding Relay, where speed and accuracy will crown the champions. With a ₹2400 prize pool, this is your chance to shine as a team and claim victory. Don't forget your laptops and join us on August 24th, 2024, at the CSE Department. Be prepared for an electrifying competition that will put your coding skills to the test!",
            pokemon: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/events/char3.png',
            isPosterLeft: true,
            registerLink: 'https://forms.gle/icuRvzvb6RpJtEKf8',
        },
        {
            poster: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/events/codingCasino.png',
            title: 'Coding Casino',
            id: "codingCasino",
            description: "Welcome to the thrilling and electrifying 'CODING CASINO' brought to you by UPSURGE 2k24. Whether you're a coding wizard or just looking for some high-stakes fun, this event is your shot to prove your skills and seize victory. Bet before seeing the question, win if you solve it, and lose if you don’t. With the prize pool of rupees 2000, this is your moment to shine and claim the title of Coding Casino champion. Don't forget to bring your laptops and we'll see you guys on August 23rd, 2024 at Lab 3 and 4 ,CSE Department!",
            pokemon: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/events/char5.png',
            isPosterLeft: false,
            registerLink: 'https://forms.gle/N8b2NCndQWjAeStdA',
        },
        {
            poster: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/events/flashmob.png',
            title: 'Flashmob',
            id: "flashmob",
            description: "Get ready for an unforgettable flashmob on August 23rd, 2024, at 3 PM in front of the CSE Department! This high-energy event will feature electrifying music, vibrant energy, and spontaneous dance moves. Whether you're a seasoned dancer or just looking for fun, this is your chance to be part of something extraordinary. Celebrate the CSE spirit, connect with fellow students, and create an unforgettable moment. Gather friends, get in the groove, and join us for an afternoon of pure joy. Don't just watch – be part of it and help light up the campus with enthusiasm!",
            pokemon: '/images/events/char7.png',
            isPosterLeft: true,
            registerLink: '',
        },
        {
            poster: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/events/fifa.png',
            title: 'FIFA',
            id: "fifa",
            description: "Get ready for the FIFA FEVER CUP, an electrifying 1v1 football gaming tournament that will ignite your competitive spirit! Face off in a thrilling derby showdown and showcase your skills, tactics, and formations. With 6-minute halves and a single elimination format, every second counts. For just ₹49, you could win the ₹1000 first prize! The event will be held at the CSE Department, so mark your calendars, gear up, and bring your A-game to outmaneuver and outscore your opponents. Don’t miss this chance to prove your mettle, create unforgettable memories, and claim your victory!",
            pokemon: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/events/char9.png',
            isPosterLeft: false,
            registerLink: 'https://forms.gle/uXxVqxF1v3BsLRnR6',
        },
        {
            poster: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/events/smackdown.png',
            title: 'WWE Smackdown',
            id: "smackdown",
            description: "Step into the golden age of WWE with the Smackdown Showdown Championship, a nostalgic gaming tournament on the classic PS2 platform. Relive iconic wrestling moments and test your skills in Survival Rounds, Elimination Chambers, and Single Match showdowns. Join us on August 23rd and 24th at the CSE Department for intense action and friendly competition. For just ₹49, compete for a chance to win prizes of ₹1000 or ₹500 and claim the title of Smackdown Showdown Champion. Don’t miss this chance to relive WWE's glory days and prove yourself as a wrestling gaming legend!",
            pokemon: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/events/char10.png',
            isPosterLeft: true,
            registerLink: 'https://forms.gle/Q6RHr9X4JgSzmvS98',
        },
        {
            poster: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/events/desiDaredevils.png',
            title: 'Desi Daredevils',
            id: "desiDaredevils",
            description: `Desi Daredevils: A 3-stage team game for 4 players, featuring unique challenges in each round for a day full of teamwork and excitement. \n ▶ Blindfold Backshift: Two teammates coordinate back-to-back to move balloons, while a blindfolded third member navigates the course with guidance from the fourth. \n ▶ Bite Battle: A culinary challenge where food enthusiasts embark on a delicious journey that will tantalize their taste buds. \n ▶ Mystery Roll: The grand finale, a life-sized ludo-inspired game, filled with excitement and surprises at every turn.`,
            pokemon: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/events/char8.png',
            isPosterLeft: false,
            registerLink: 'https://forms.gle/nbqsf72FNsjXb9GN8',
        },
        {
            poster: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/events/dataScience.png',
            title: 'Data Science Seminar',
            id: "dataScience",
            description: "Unlock your potential in data science and technology! Join us on August 23rd at 1 PM for an exclusive session designed to help you navigate this exciting field. Our expert speaker will guide you through building a successful tech career, covering essential skills, industry trends, and job opportunities. Whether you're starting out or looking to pivot, this session will provide the insights and confidence you need to break into the tech world and give your career the head start it deserves. Don't miss this chance to embark on your journey into the tech industry!",
            pokemon: 'https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/events/char4.png',
            isPosterLeft: true,
            registerLink: 'https://konfhub.com/data-science-seminar-eee1269a',
        },

    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-gray-900">
            <div className="event-cards-container relative py-16 bg-fixed bg-cover bg-center px-8 md:px-[15%]"
                style={{
                    backgroundImage: "url('https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/events/eventbg.jpg')",
                }}>
                {/* Overlay for reducing background opacity */}
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                {/* Event cards content */}
                <div className="relative z-10">
                    <h1 className="font-bold text-white text-center m-10 md:mb-24 relative z-10">Events</h1>
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            id={event.id}
                            poster={event.poster}
                            title={event.title}
                            description={event.description}
                            pokemon={event.pokemon}
                            isPosterLeft={event.isPosterLeft}
                            registerLink={event.registerLink}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[20vh] bg-gradient-to-t from-[#090A0F] to-transparent"></div>
        </div>
    );
};

export default EventCards;
