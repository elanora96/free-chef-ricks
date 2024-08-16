import { FC, useState, useEffect } from 'react';
import styles from '@components/FloatingGif.module.css';

interface FloatingGifProps {
  src: string;
}

interface FloatingGif {
  id: number;
  size: number;
  left: string;
  delay: string;
  duration: string;
}

const FloatingGif: FC<FloatingGifProps> = (props) => {
  const [gifArray, setGifArray] = useState(new Array<FloatingGif>());

  useEffect(() => {
    const gifCount = 20;
    const gifs = Array.from({ length: gifCount }).map(() => ({
      id: Math.random(),
      size: Math.floor(Math.random() * 5 + 5), // Random size between 5 and 10%
      left: `${Math.floor(Math.random() * 100)}%`, // Random horizontal position
      delay: `${Math.random() * 30}s`, // Random delay to stagger the animations
      duration: `${Math.random() * 45 + 45}s`, // Random animation duration between 45s and 90s
    }));
    setGifArray(gifs);
  }, []);

  return (
    <div>
      {gifArray.map((gif) => (
        <img
          key={gif.id}
          src={props.src}
          alt="Floating Gif"
          className={styles.floatingGif}
          style={{
            width: `${gif.size}%`,
            left: gif.left,
            animationDelay: gif.delay,
            animationDuration: gif.duration,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingGif;
