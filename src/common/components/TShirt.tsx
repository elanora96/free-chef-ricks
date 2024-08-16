import { FC } from 'react';
import styles from './TShirt.module.css';

import tshirt from '@assets/white-tshirt-n0j.png';

interface TShirtProps {
  text: string;
  image: string | null;
}

const TShirt: FC<TShirtProps> = (props) => {
  return (
    <div className={styles.tshirtContainer}>
      <img className={styles.tshirt} src={tshirt} />
      <div className={styles.tshirtOverlay}>
        <p className={styles.tshirtText}>{props.text}</p>
        {props.image ? (
          <img className={styles.tshirtImage} src={props.image} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default TShirt;
