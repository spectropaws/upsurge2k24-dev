import dynamic from 'next/dynamic';

const LocateUsDesktop = dynamic(() => import('./components/LocateUsDesktop'), { ssr: false });
const LocateUsMobile = dynamic(() => import('./components/LocateUsMobile'), { ssr: false });

export default function LocateUs() {
    return (
        <>
            <div className="w-full hidden md:block">
                <LocateUsDesktop />
            </div>
            <div className="w-full block md:hidden">
                <LocateUsMobile />
            </div>
        </>
    );
}
