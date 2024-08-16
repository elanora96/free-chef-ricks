import { FC, useEffect, useState } from 'react';
import styles from './Footer.module.css';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

const Footer: FC = () => {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const intrvl = setInterval(() => {
      setNow(dayjs());
    }, 1000);
    return () => {
      clearInterval(intrvl);
    };
  }, []);

  return (
    <p className={styles.footer}>
      <p>
        The time is: {now.format('h:mm:ss A')} on {now.format('dddd, Do MMMM')}{' '}
      </p>
      <p>
        Page Source:{' '}
        <a href="https://github.com/elanora96/free-chef-ricks">
          elanora96/free-chef-ricks
        </a>
      </p>
      <p>
        Proudly ripping off the work of{' '}
        <a href="https://web.archive.org/web/20100303105608/http://www.chefricks.com/home.htm">
          Richard Gonzalez
        </a>
      </p>
    </p>
  );
};

export default Footer;
