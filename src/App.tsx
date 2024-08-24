import { FC } from 'react';
import styles from './App.module.css';

import FloatingGif from '@components/FloatingGif';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Plea from '@components/Plea';
import SupportRibbon from '@components/SupportRibbon';
import TShirt from '@components/TShirt';
import TimeSince from '@components/TimeSince';

import Mugshot from '@assets/ChefRicksMugshot.png';

import runningMan from '@assets/chefcardanimsm3.gif';

const App: FC = () => {
  return (
    <>
      <Header text="Support Chef Rick's" />
      <SupportRibbon url="https://chefricks.com" text="Support Chef Rick's" />
      <main className={styles.Main}>
        <Plea />
        <TimeSince />
        <TShirt text="Free Chef Rick's" image={Mugshot} />
      </main>
      <FloatingGif src={runningMan} />
      <Footer />
    </>
  );
};

export default App;
