import { FC } from 'react';
import styles from './Footer.module.css';
import notice from '@assets/IMG_1898.jpeg';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ol>
        <li id="cite1">
          <span>
            <sup>
              <a href="#cited1">^</a>
            </sup>
            <details>
              <summary>A little backstory (Click to expand)</summary>
              <p>
                On August 14th, 2024, the State of California&apos;s Department
                of Alcoholic Beverage Control suspended Chef Rick&apos;s
                Ultimately Fine Foods Inc&apos;s Alcoholic Beverage License
              </p>
              <img className={styles.image} src={notice}></img>
            </details>
          </span>
        </li>
        <li id="cite2">
          <span>
            <sup>
              <a href="#cited2">^</a>
            </sup>
            Assuming an average of $25,000/month in alcohol sales
          </span>
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
    </footer>
  );
};

export default Footer;
