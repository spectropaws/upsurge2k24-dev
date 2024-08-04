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
                style = {{ backgroundImage: "linear-gradient(to bottom, #0D131E, #18253e, #243b68, #30569f, #366cd2 60%, #3CBCFC 100%)" }}
                className='h-96 w-full'></div>
        </>
    );
}
