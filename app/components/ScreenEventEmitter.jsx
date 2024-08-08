const handleScreenClick = (e) => {
    e.stopPropagation();
    window.parent.postMessage('screenClick', '*');
};

const handleKeyDown = (e) => {
    e.stopPropagation();
    if (e.key == "Escape") {
        window.parent.postMessage("escapeZoom", '*');
    }
}

window.addEventListener("click", handleScreenClick);
window.addEventListener("keydown", handleKeyDown);

export default function ScreenEventEmitter({ children }) {
    return <div className="w-full h-full m-0 p-0">{children}</div>
}
