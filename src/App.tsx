import { FC, PropsWithChildren } from 'react';
import styles from './App.module.css';

import Header from '@components/Header';
import FloatingGif from '@components/FloatingGif';
import SupportRibbon from '@components/SupportRibbon';
import TShirt from '@components/TShirt';
import Footer from '@components/Footer';
import TimeSince from '@components/TimeSince';

import Mugshot from '@assets/ChefRicksMugshot.png';
import notice from '@assets/IMG_1898.jpeg';
import runningMan from '@assets/chefcardanimsm3.gif';

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

const App: FC = () => {
  return (
    <>
      <Header text="Free Chef Rick's" />
      <SupportRibbon url="https://chefricks.com" text="Support Chef Rick's" />
      <main>
        <Card>
          <p>
            The State of California&apos;s Department of Alcoholic Beverage
            Control has{' '}
            <i>
              <u>suspended</u>
            </i>{' '}
            Chef Rick&apos;s Ultimately Fine Foods Inc&apos;s License
          </p>
          <img className={styles.notice} src={notice}></img>
        </Card>
        <TimeSince />
        <Card>
          <TShirt text="Free Chef Rick's" image={Mugshot} />
        </Card>
      </main>
      <FloatingGif src={runningMan} />
      <Footer />
    </>
  );
};

export default App;
