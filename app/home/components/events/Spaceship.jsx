import Image from "next/image";

export default function Spaceship() {
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 w-24">
        <Image width={100} height={100} objectFit="contain" className="drop-shadow-[0_0_35px_rgba(255,255,255,1)]" src="/svgs/home/events/spaceship.svg" alt="spaceship" /> 
    </div>
  );
}
