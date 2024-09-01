import { FC } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  text: string;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <h1>{props.text}</h1>
      </div>
    </header>
  );
};

export default Header;
