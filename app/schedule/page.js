"use client"

import MainContainer from "@/app/components/MainContainer"
import Schedule from "./components/Schedule"
import ScheduleMobile from "./components/ScheduleMobile"

export default function page() {
    return (
        <MainContainer>
            <div className="w-full h-full hidden md:block">
                <Schedule />
            </div>
            <div className="w-full h-full md:hidden">
                <ScheduleMobile />
            </div>
        </MainContainer>
    )
}
