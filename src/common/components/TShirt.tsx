import { FC } from 'react';
import styles from './TShirt.module.css';

import tshirt from '@assets/white-tshirt-n0j.png';

interface TShirtProps {
  text: string;
  image?: string;
}

const TShirt: FC<TShirtProps> = (props) => {
  return (
    <div className={styles.tshirtContainer}>
      <img className={styles.tshirt} src={tshirt} />
      <div className={styles.tshirtOverlay}>
        <p>{props.text}</p>
        {props.image ? <img src={props.image} /> : ''}
      </div>
    </div>
  );
};

export default TShirt;
