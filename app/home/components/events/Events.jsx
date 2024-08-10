import useHorizontalScroll from './HorizontalScroll';


export default function Events() {

    const { containerRef, sectionsRef } = useHorizontalScroll();

    function ScrollContainer({ children, className }) {
        return (
            <div className={`horizontal-scroll-container m-0 p-0 flex relative bg-black ${className}`} ref={containerRef}>
                {children}
            </div>
        );
    }

    function HorizontalSection({ children, className }) {
        return (
            <div ref={el => sectionsRef.current.push(el)} className={`horizontal-scroll-section m-0 p-0 flex-shrink-0 w-screen h-screen bg-black text-white ${className}`}>
                {children}
            </div>
        );
    }

    return (
        <div className="relative">
            <ScrollContainer>
                <HorizontalSection>
                    <h1>Event 1</h1>
                </HorizontalSection>

                <HorizontalSection>
                    <h1>Event 2</h1>
                </HorizontalSection>

                <HorizontalSection>
                    <h1>Event 3</h1>
                </HorizontalSection>
            </ScrollContainer >
        </div >
    );
}
