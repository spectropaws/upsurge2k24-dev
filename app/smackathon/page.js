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
import LocateUs from './LocateUs';
import Footer from "./Footer";

const FAQ = dynamic(() => import('./FAQ'), { ssr: false });

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
            <LocateUs />
            <Footer />
        </>
    );
}
