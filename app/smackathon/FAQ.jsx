import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "@/components/ui/SmackathonAccordion"
import generateStars, { starrySkyStyle } from "./components/generateStars";

export default function FAQ() {

    const faq = [
        {
            question: "Q1. What is SMACKATHON?",
            answer: "SMACKATHON is a 24-hour intensive challenge featuring innovative problem statements where teams are tasked with implementing their creative ideas and developing cutting-edge solutions through step-by-step coding or software development. This offline event will take place in the CSE department at YCCE."
        },
        {
            question: "Q2. Why should one participate in Smackathon?",
            answer: "Participating in SMACKATHON offers the chance to apply your technical skills to real-world problems, develop innovative solutions, and enhance teamwork and time management abilities. It’s also a great opportunity to network, showcase your talent, and gain valuable experience. Plus, winners receive cash prizes and exciting goodies"
        },
        {
            question: "Q3. Is there any eligibility criteria to participate in Smackathon? If yes, which candidates are eligible?",
            answer: "There are no specific eligibility requirements to participate in SMACKATHON.The event is typically open to students and professionals with a background in technology, coding, or software development. Candidates who are enthusiastic about problem-solving, innovation, and have the technical skills to contribute to a team are eligible to participate."
        },
        {
            question: "Q4. Is accomodation facility available for outsiders?",
            answer: "Yes, accomodation is available for both local participants and outsiders at SMACKATHON. But staying on-site during the entire 24 hours is compulsory for at least 2 team mates, so participants can choose whether or not to opt for accomodation facility. (Note: Only boys participants can stay at night and can opt for accomodation)"
        },
        {
            question: "Q5. What are the perks of attending Smackathon?",
            answer: "Attending SMACKATHON offers the chance to enhance your technical skills, collaborate with peers, and showcase your talent. Participants can also win cash prizes, receive exciting goodies, and enjoy provided meals and optional accommodation."
        },
        {
            question: "Q6. When will the problem statement be provided to the candidate?",
            answer: "The problem statement will be provided to participants on Day 1, upon check-in."
        },
        {
            question: "Q7. Do I compulsorily need to have a team to participate?",
            answer: "Yes, forming a team is compulsory to participate in SMACKATHON."
        },
        {
            question: "Q8. Are there any specific tools or technologies that participants are required to use?",
            answer: "There are no specific restrictions on tools or technologies for SMACKATHON. Participants are free to use any tools and technologies of their choice."
        },
        {
            question: "Q9. How do I register for Smackathon?",
            answer: "To register for SMACKATHON, visit the website https://www.upsurge2k24.tech/ and follow the instructions provided there."
        },
        {
            question: "Q10. Will there be food and beverages provided during the event?",
            answer: "Yes, food and beverages will be provided during the event, but only if you opt for it."
        },
    ]

    return (
        <>
        <div className="bg-gradient-to-t from-[#010919] h-40 via-slate-950 to-black pt-64 "></div>
        <div style={starrySkyStyle} className="py-10 flex flex-col items-center">
            {generateStars(100)}
            <h1 className="text-3xl md:text-5xl text-white py-5 z-10 mb-16">FAQ&apos;s</h1>
            <Accordion type="single" collapsible className="md:w-[80%] text-white rounded-md m-auto px-5 pb-5 h-[90rem] sm:h-[55rem] bg-opacity-[0.85] relative z-10">
                {
                    faq.map((val, index) => {
                        return (
                            <div className="mb-2 bg-blue-800 rounded-sm border-2 px-5" key={index}>
                                <AccordionItem value={`item-${index}`}>
                                    <AccordionTrigger className="flex">{val.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {val.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </div>
                        )
                    })
                }
            </Accordion>
        </div>
        </>
    )
}
