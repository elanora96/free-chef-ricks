import { FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
  return (
    <p className={styles.footer}>
      <ol>
        <li id="cite1">
          <sup>
            <a href="#cited1">^</a>
          </sup>
          Assuming an average of $25,000/month in alcohol sales
        </li>
      </ol>
      <p>
        Page Source:{' '}
        <a href="https://github.com/elanora96/free-chef-ricks">
          elanora96/free-chef-ricks
        </a>
      </p>
      <p>
        Proudly ripping off the work of Richard Gonzalez from{' '}
        <a href="https://web.archive.org/web/20100303105608/http://www.chefricks.com/home.htm">
          the original Chef Rick&apos;s website
        </a>
      </p>
    </p>
  );
};

export default Footer;
