import styles from './StarsBackground.module.css';

export default function StarsBackground({ children }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#090A0F]">
      <div className="absolute inset-0">
        <div id="stars" className={styles.stars}></div>
        <div id="stars2" className={styles.stars2}></div>
        <div id="stars3" className={styles.stars3}></div>
      </div>
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
