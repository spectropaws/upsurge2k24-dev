import dynamic from 'next/dynamic';

const LocateUsDesktop = dynamic(() => import('./components/LocateUsDesktop'), { ssr: false });
const LocateUsMobile = dynamic(() => import('./components/LocateUsMobile'), { ssr: false });

export default function LocateUs() {
    return (
        <>
            <div className="w-full hidden lg:block">
                <LocateUsDesktop />
            </div>
            <div className="w-full block lg:hidden">
                <LocateUsMobile />
            </div> 
            <div
                style = {{ backgroundImage: "linear-gradient(to bottom, #010919, #0d1b34, #1a2e5a, #214b73 50%, #2A8AC0 80%, #3CBCFC 100%)" }}
                className='h-72 w-full -mb-[2px]'></div>
        </>
    );
}
