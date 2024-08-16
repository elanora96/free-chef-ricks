import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import styles from './App.module.css';

import Header from '@components/Header';
import FloatingGif from '@components/FloatingGif';
import SupportRibbon from '@components/SupportRibbon';
import TShirt from '@components/TShirt';
import Footer from '@components/Footer';

import Mugshot from '@assets/ChefRicksMugshot.png';
import notice from '@assets/IMG_1898.jpeg';
import runningMan from '@assets/chefcardanimsm3.gif';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import duration from 'dayjs/plugin/duration';

dayjs.extend(advancedFormat);
dayjs.extend(duration);

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

const units = {
  Year: 'Y',
  Month: 'M',
  Week: 'ww',
  Day: 'D',
  Hour: 'H',
  Minute: 'm',
  Second: 's',
};

const TimeSince: FC = () => {
  const suspension = dayjs('2024-08-14');
  const diff = useCallback(
    () => dayjs.duration(dayjs().diff(suspension)),
    [suspension],
  );
  const [timeSince, setTimeSince] = useState(diff());

  useEffect(() => {
    const intrvl = setInterval(() => {
      setTimeSince(diff());
    }, 1000);
    return () => {
      clearInterval(intrvl);
    };
  }, [diff]);

  return (
    <div>
      <h2>
        The first day of the suspension was {suspension.format('MMMM Do, YYYY')}
      </h2>
      <h2>As of today, the liscense has been suspended for:</h2>
      {Object.entries(units).map(([unit, formatCode]) => {
        const t = Number(timeSince.format(formatCode));
        return t >= 1 ? (
          <h1 key={formatCode}>
            {timeSince.format(formatCode)} {unit}
            {t === 1 ? '' : 's'}
          </h1>
        ) : (
          ''
        );
      })}
    </div>
  );
};

const App: FC = () => {
  return (
    <>
      <SupportRibbon url="https://chefricks.com" text="Support Chef Rick's" />
      <Header text="Free Chef Rick's" />
      <main>
        <Card>
          <p>
            The State of California&apos;s Department of Alcoholic Beverage
            Control has fined and suspended Chef Rick&apos;s Ultimately Fine
            Foods Inc&apos;s License after a sting operation targeting the
            restaurant
          </p>
          <img className={styles.notice} src={notice}></img>
          <TimeSince />
        </Card>
        <Card>
          <TShirt text="Free Chef Rick's" image={Mugshot} />
        </Card>
        <FloatingGif src={runningMan} />
      </main>
      <Footer />
    </>
  );
};

export default App;
