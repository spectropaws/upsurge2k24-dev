import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import EventCardMobile from './EventCardMobile';
import StarsBackground from '../StarsBackground';

export default function EventsMobile() {
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);

    const events = [
        {
            title: 'Hands on cloud computing session',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae ipsam nam beatae, itaque possimus sapiente ea nemo non explicabo incidunt a, quas accusamus consequatur maiores aliquam ad, illum natus?',
            image: '/images/events/image.png'
        },

        {
            title: 'Lantern Rite',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae ipsam nam beatae, itaque possimus sapiente ea nemo non explicabo incidunt a, quas accusamus consequatur maiores aliquam ad, illum natus?',
            image: '/images/events/image2.jpg'
        },
        {
            title: 'Unreconciled Stars',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae ipsam nam beatae, itaque possimus sapiente ea nemo non explicabo incidunt a, quas accusamus consequatur maiores aliquam ad, illum natus?',
            image: '/images/events/image3.jpeg'
        },
        {
            title: 'Dragonspine',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae ipsam nam beatae, itaque possimus sapiente ea nemo non explicabo incidunt a, quas accusamus consequatur maiores aliquam ad, illum natus?",
            image: '/images/events/image.png'
        },
        {
            title: 'Hands on cloud computing session',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae ipsam nam beatae, itaque possimus sapiente ea nemo non explicabo incidunt a, quas accusamus consequatur maiores aliquam ad, illum natus?',
            image: '/images/events/image.png'
        },

        {
            title: 'Lantern Rite',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae ipsam nam beatae, itaque possimus sapiente ea nemo non explicabo incidunt a, quas accusamus consequatur maiores aliquam ad, illum natus?',
            image: '/images/events/image2.jpg'
        },
        {
            title: 'Unreconciled Stars',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae ipsam nam beatae, itaque possimus sapiente ea nemo non explicabo incidunt a, quas accusamus consequatur maiores aliquam ad, illum natus?',
            image: '/images/events/image3.jpeg'
        },
        {
            title: 'Dragonspine',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae ipsam nam beatae, itaque possimus sapiente ea nemo non explicabo incidunt a, quas accusamus consequatur maiores aliquam ad, illum natus?",
            image: '/images/events/image.png'
        },
        {
            title: 'Hands on cloud computing session',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae ipsam nam beatae, itaque possimus sapiente ea nemo non explicabo incidunt a, quas accusamus consequatur maiores aliquam ad, illum natus?',
            image: '/images/events/image.png'
        },

        {
            title: 'Lantern Rite',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae ipsam nam beatae, itaque possimus sapiente ea nemo non explicabo incidunt a, quas accusamus consequatur maiores aliquam ad, illum natus?',
            image: '/images/events/image2.jpg'
        },
        {
            title: 'Unreconciled Stars',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae ipsam nam beatae, itaque possimus sapiente ea nemo non explicabo incidunt a, quas accusamus consequatur maiores aliquam ad, illum natus?',
            image: '/images/events/image3.jpeg'
        },
        {
            title: 'Dragonspine',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae ipsam nam beatae, itaque possimus sapiente ea nemo non explicabo incidunt a, quas accusamus consequatur maiores aliquam ad, illum natus?",
            image: '/images/events/image.png'
        },

    ];

    useEffect(() => {
        let interval;

        if (!isSwiping) {
            interval = setInterval(() => {
                setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
            }, 3000); // Change every 3 seconds
        }

        return () => clearInterval(interval);
    }, [isSwiping, events.length]);

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
        },
        onSwipedRight: () => {
            setCurrentEventIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
        },
        onSwiping: () => {
            setIsSwiping(true);
        },
        onSwiped: () => {
            setIsSwiping(false);
        },
        onTouchStart: () => {
            setIsSwiping(true);
        },
        onTouchEnd: () => {
            setIsSwiping(false);
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // Optional: Enable swipe detection with mouse
    });

    return (
        <StarsBackground>
            <div className="sm:hidden min-h-screen p-4">
                <h1 className='text-white text-center mb-24'>Events</h1>
                <div
                    {...handlers}
                    className="relative w-full h-[300px]"
                >
                    <AnimatePresence>
                        <motion.div
                            key={currentEventIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }} // Faster transition duration
                            className="absolute w-full h-full"
                        >
                            <EventCardMobile
                                title={events[currentEventIndex].title}
                                description={events[currentEventIndex].description}
                                image={events[currentEventIndex].image}
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots for navigation */}
                    <div className="absolute -bottom-[170px] left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {events.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full cursor-pointer ${index === currentEventIndex ? 'bg-yellow-400' : 'bg-gray-500'}`}
                                onClick={() => setCurrentEventIndex(index)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </StarsBackground>
    );
}
