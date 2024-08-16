import { FC } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  text: string;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <header className={styles.header}>
      <h1>{props.text}</h1>
    </header>
  );
};

export default Header;
