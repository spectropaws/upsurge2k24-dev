export function generateStars(containerId, numStars, clearRadius) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const width = container.clientWidth;
  const height = container.clientHeight;
  const centerX = width / 2;
  const centerY = height / 2;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.borderRadius = '50%';
    star.style.backgroundColor = 'white';
    star.style.width = '2px'; // Size of the stars
    star.style.height = '2px'; // Size of the stars

    const x = Math.random() * width;
    const y = Math.random() * height;

    // Check if the star is in the clear center area
    const distanceFromCenter = Math.sqrt(
      Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
    );
    if (distanceFromCenter > clearRadius) {
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      container.appendChild(star);
    }
  }
}
