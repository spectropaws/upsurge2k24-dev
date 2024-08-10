import Image from "next/image";

export default function Spaceship() {
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 w-24">
        <Image width={60} height={20} className="" src="/svgs/home/events/spaceship.svg" alt="spaceship" /> 
    </div>
  );
}
