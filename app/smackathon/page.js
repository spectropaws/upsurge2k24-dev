"use client";

import React, { useEffect } from "react";
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
import ScreenEventEmitter from "@/app/components/ScreenEventEmitter";

const FAQ = dynamic(() => import('./FAQ'), { ssr: false });

export default function Smackathon() {
    return (
        <ScreenEventEmitter>
            <div className="bg-black">
                <HeroSection />
                <PrizeSection />
                <Goodies />
            </div>
            <div className='bg-blue-500'>
                <Tracks />
                <div className="w-full hidden md:block">
                    <Timeline />
                </div>
                <div className="w-full block md:hidden">
                    <TimelineMobile />
                </div>
            </div>
            <div className="bg-black">
                <RulesandGuidelines />
                <AssessmentCriteria />
            </div>
            <div className="bg-[#0D131E]">
                <FAQ />
                <LocateUs />
            </div>
            <div className='bg-[#3CBCFC] m-0 p-0 w-full -mt-[2px]'>
                <Footer />
            </div >
        </ScreenEventEmitter>
    );
}
