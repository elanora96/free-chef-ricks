import { FC, useEffect, useState, useCallback } from 'react';
import styles from './TimeSince.module.css';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import duration from 'dayjs/plugin/duration';

dayjs.extend(advancedFormat);
dayjs.extend(duration);

const units = {
  Year: 'Y',
  Month: 'M',
  Week: 'ww',
  Day: 'D',
  Hour: 'H',
  Minute: 'm',
  Second: 's',
};

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const TimeSince: FC = () => {
  const suspension = dayjs('2024-08-14');
  const diff = useCallback(
    () => dayjs.duration(dayjs().diff(suspension)),
    [suspension],
  );
  const [tSince, setTSince] = useState(diff());

  useEffect(() => {
    const intrvl = setInterval(() => {
      setTSince(diff());
    }, 1000);
    return () => {
      clearInterval(intrvl);
    };
  }, [diff]);

  return (
    <div className={styles.TimeSince}>
      <h2>
        The first day of the suspension was {suspension.format('MMMM Do, YYYY')}
      </h2>
      <h2>As of today, the license has been suspended for:</h2>
      <div className={styles.clock}>
        {Object.entries(units).map(([unit, formatCode]) => {
          const t = Number(tSince.format(formatCode));
          return t >= 1 || formatCode === 's' ? (
            <h1 key={formatCode}>
              {tSince.format(formatCode)} {unit}
              {t === 1 ? '' : 's'}
            </h1>
          ) : (
            ''
          );
        })}
      </div>
      <div className={styles.loserContainer}>
        <h2>
          This is{' '}
          <span title="Assuming an average of $25,000/month in alcohol sales">
            guesstimated*
          </span>{' '}
          to have cost the restaurant
        </h2>
        <pre>
          <h1 className={styles.lostRevenue}>
            {currencyFormatter.format(
              -1 * (25000 / 31 / 24 / 60 / 60 / 1000) * tSince.asMilliseconds(),
            )}
          </h1>
          <h1 className={styles.lostRevenue}>In</h1>
          <h1 className={styles.lostRevenue}>lost revenue</h1>
        </pre>
      </div>
    </div>
  );
};

export default TimeSince;
