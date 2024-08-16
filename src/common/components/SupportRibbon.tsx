import { FC } from 'react';
import styles from './SupportRibbon.module.css';

interface SupportRibbonProps {
  text: string;
  url: string;
}

const SupportRibbon: FC<SupportRibbonProps> = (props) => {
  return (
    <a
      href={props.url}
      className={styles.supportRibbon}
      data-ribbon={props.text}
      target="_blank"
      rel="noreferrer"
    />
  );
};

export default SupportRibbon;
