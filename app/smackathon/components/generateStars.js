const starrySkyStyle = {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#0D131E',
    zIndex: 0,
};

const starStyle = {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: '50%',
    width: '2px',
    height: '2px',
};

const generateStars = (numStars) => {
    let stars = [];
    for (let i = 0; i < numStars; i++) {
        const top = Math.random() * 100 + '%';
        const left = Math.random() * 100 + '%';
        const animationDelay = Math.random() * 10 + 's';
        const size = Math.random() * 3.5 + 'px';
        const opacity = Math.random() * 0.5 + 0.5;

        stars.push(
            <div
                key={i}
                style={{
                    ...starStyle,
                    top,
                    left,
                    width: size,
                    height: size,
                    opacity,
                    animation: `twinkle ${Math.random() * 10 + 5}s infinite`,
                    animationDelay,
                }}
            />
        );
    }
    return stars;
};

export default generateStars;
export { starrySkyStyle };
