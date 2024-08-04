import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "@/components/ui/SmackathonAccordion"
import generateStars, { starrySkyStyle } from "./components/generateStars";

export default function FAQ() {

    const faq = [
        {
            question: "Q1. What is SMACKATHON?",
            answer: "'SMACKATHON', presented by Geeks for Geeks and co-powered by COJAG is a 24 hour long challenge with innovative problem statements. Teams have to implement their tinkering ideas and craft an innovative solution by intensive step by step coding or software development."
        },
        {
            question: "Q2. Why should one participate in Smackathon?",
            answer: "Participating in Smackathon can build up your confidence and it’s a great platform to showcase your technical skills in front of all. Also the participants will be getting 20% discount on any GFG course and exlcusive GFG goodies and Rs.2000 coupons for each winner!"
        },
        {
            question: "Q3. Is there any eligibility criteria to participate in Smackathon? If yes, which candidates are eligible?",
            answer: "There is no specific eligibility criteria. It’s an open opportunity for tech enthusiasts to harness their technical skill and craft an innovative solution. Students from any college and pursuing any course can participate."
        },
        {
            question: "Q4. Is accomodation facility available for outsiders?",
            answer: "Yes, accomodation facility is available for outsiders."
        },
        {
            question: "Q5. What are the perks of attending Smackathon?",
            answer: "Attending Smackathon is undoubtedly worth it. Alll the participants will be getting 20% discount on any GFG course and exlcusive GFG goodies and Rs.2000 coupons for each winner!"
        },
        {
            question: "Q6. When will the problem statement be provided to the candidate?",
            answer: "The problem statement will be provided on the day of hackathon at 10:00 am."
        },
        {
            question: "Q7. Do I compulsorily need to have a team to participate?",
            answer: "Yes, it is compulsory to participate in a team. Team can have minimum 3 and maximum 5 members."
        },
    ]

    return (
        <>
        <div className="bg-gradient-to-t from-[#0D131E] h-40 via-slate-950 to-black "></div>
        <div style={starrySkyStyle} className="py-10 flex flex-col items-center">
            {generateStars(100)}
            <p className="text-3xl text-red-600 font-bold py-5 z-10">FAQ&apos;s</p>
            <Accordion type="single" collapsible className="md:w-[60vw] text-white rounded-md m-auto px-5 pb-5 bg-opacity-[0.85] relative z-10">
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
