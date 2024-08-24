import type { FC } from 'react';
import styles from './Plea.module.css';

import gfm from '@assets/GoFundMe.svg';

const GoFundMe = () => {
  return (
    <div className={styles.GoFundMe}>
      <a href="https://www.gofundme.com/f/support-chef-ricks">
        <img src={gfm} />
      </a>
    </div>
  );
};

const Plea: FC = () => {
  return (
    <div className={styles.Plea}>
      <GoFundMe />
      <p>Hello friends!</p>
      <p>
        Since 1989,{' '}
        <u>
          <i>Chef Rick&apos;s Ultimately Fine Foods</i>
        </u>{' '}
        has been a proud part of the Central Coast community. We have shared
        countless memories with you, and your support has been the heart of our
        journey.
      </p>
      <p>
        You all have loved us for a long time and we have loved you! We have
        weathered many storms in the past and we will get through this one but
        we are humbly asking for your kind help at this moment.
      </p>
      <p>
        We have faced challenges before, and with your help, we have always come
        through. The current economic situation (yes, the same one you are
        in!!!) now along with our{' '}
        <span id="cited1">
          <u>Alcoholic Beverage License being suspended</u>
          <sup>
            <a className={styles.CiteLink} href="#cite1">
              [1]
            </a>
          </sup>
        </span>{' '}
        has us in a precarious position that we need to stay in front of to take
        care of the Chef Rick Family and Family matters.
      </p>
      <p>
        We&apos;re determined to protect the Chef Rick family and the legacy
        we&apos;ve built together, but we need your help to do so. Our goal is
        to raise $50,000, which we&apos;ll do through multiple rounds of
        subgoals. With your support, we can continue to be the Central
        Coast&apos;s best, most unique, and friendliest neighborhood restaurant.
      </p>
      <p>
        You can help by clicking the large gofundme logo below (or above!). Or
        by dining with us as usual, we&apos;d love to see you!
      </p>
      <GoFundMe />
      <div className={styles.Signature}>
        <p>Thank you all very much!!!</p>
        <p>&ndash; Chef Rick Manson</p>
      </div>
    </div>
  );
};

export default Plea;
