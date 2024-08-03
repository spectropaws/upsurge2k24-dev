"use client";

import dynamic from 'next/dynamic';
import HeroSection from "./hero";
import PrizeSection from "./PrizeSection";
import Goodies from "./Goodies";
import Tracks from "./Tracks";
import Timeline from "./Timeline";
import TimelineMobile from "./TimelineMobile";
import RulesandGuidelines from "./RulesandGuidelines";
import AssessmentCriteria from "./AssessmentCriteria";
import Footer from "./Footer";
import RulesandGuidelines from "./RulesandGuidelines";
import AssessmentCriteria from "./AssessmentCriteria";

const FAQ = dynamic(() => import('./FAQ'), { ssr: false });
const LocateUs = dynamic(() => import('./LocateUs'), { ssr: false });
const LocateUsMobile = dynamic(() => import('./LocateUsMobile'), { ssr: false });


export default function Smackathon() {
  return (
        <>
            <HeroSection />
            <PrizeSection />
            <Goodies />
            <Tracks />
            <div className="w-full hidden md:block">
                <Timeline />
            </div>
            <div className="w-full block md:hidden">
                <TimelineMobile />
            </div>
            <RulesandGuidelines />
            <AssessmentCriteria />
            <FAQ />
            <div className="w-full hidden md:block">
                <LocateUs />
            </div>
            <div className="w-full block md:hidden">
                <LocateUsMobile />
            </div>
            <Footer />
        </>
    );
}
