import HeroSection from "./hero";
import PrizeSection from "./PrizeSection";
import Goodies from "./Goodies";
import Tracks from "./Tracks";
import Timeline from "./Timeline";
import TimelineMobile from "./TimelineMobile";
import FAQ from "./FAQ";
import Footer from "./Footer";


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
            <FAQ />
            <Footer />
        </>
    );
}
