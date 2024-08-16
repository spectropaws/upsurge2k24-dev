import Image from "next/image";

export default function Schedule() {
  return (
    <div className=" w-full">
      <p className="bg-black text-white text-9xl text-center pt-20">Schedule</p>
      <div className="relative">
        <Image
          src="/images/schedule/bg-popeye.png"
          width={1000}
          height={1000}
          className=" w-full h-full -mt-2"
        />
        <p className="text-white absolute left-1/2 translate-x-[-50%] top-56 text-6xl">
          Day 1 - 23rd August
        </p>
        <p className="text-white absolute text-center left-[370px] top-[400px] text-3xl">
          Inauguration <br /> 10:00 AM
        </p>
        <p className="text-white absolute text-center left-[720px] top-[400px] text-3xl">
          Talentsque <br /> 11:00 AM
        </p>
        <p className="text-white absolute text-center left-[1065px] top-[380px] text-3xl">
          Desi <br /> Daredevil <br /> 11:00 AM
        </p>
        <p className="text-white absolute text-center left-[390px] top-[735px] text-3xl">
          Coding <br /> Casino <br /> 11:00 AM
        </p>
        <p className="text-white absolute text-center left-[730px] top-[715px] text-3xl">
          Sports <br /> FIFA <br /> Smackdown <br /> 11:00 AM
        </p>
        <p className="text-white absolute text-center left-[1074px] top-[715px] text-3xl">
          Data <br /> Science <br /> Seminar <br /> 1:00 PM
        </p>
        <p className="text-white absolute text-center left-[730px] top-[1060px] text-3xl">
          Flashmob <br /> 3:00 PM
        </p>
      </div>
      <div className="relative">
        <Image
          src="/images/schedule/bg-popeye-2.png"
          width={1000}
          height={1000}
          className=" w-full h-full -mt-2"
        />
        <p className="text-white absolute left-1/2 translate-x-[-50%] top-3 text-6xl">
          Day 2 - 24th August
        </p>
        <p className="text-white absolute text-center left-[380px] top-[295px] text-3xl">
          Cosmo Town <br /> 10:00 AM
        </p>
        <p className="text-white absolute text-center left-[720px] top-[280px] text-3xl">
          Cloud <br /> (Hands On) <br />
          11:00 AM
        </p>
        <p className="text-white absolute text-center left-[1065px] top-[262px] text-3xl">
          Sports <br /> FIFA <br /> Smackdown <br /> 11:00 AM
        </p>
        <p className="text-white absolute text-center left-[558px] top-[715px] text-3xl">
          Coding <br /> Relay <br /> 12:00 PM
        </p>
        <p className="text-white absolute text-center left-[880px] top-[700px] text-3xl">
          Desi <br /> Daredevil <br /> Final Round <br /> 11:00 AM
        </p>
      </div>
    </div>
  );
}
