import Constants from '@/constants';
import Styles from '@/styles';

const scss = Styles.Components.Posts.Stats;

type Props = {
  gain?: string;
  garmin?: string;
  loss?: string;
  miles: string;
  steps: string;
};

function Stats({ gain, garmin, loss, miles, steps }: Props) {
  return (
    <>
      <div className={scss.stats}>
        <span className={scss.stat}>
          {new Intl.NumberFormat().format(Number(miles))}
          <span className={scss.label}>Miles</span>
        </span>
        <span className={scss.stat}>
          {new Intl.NumberFormat().format(Number(steps))}
          <span className={scss.label}>Steps</span>
        </span>
        {gain && (
          <span className={scss.stat}>
            {new Intl.NumberFormat().format(Number(gain))} ft
            <span className={scss.label}>Ascent</span>
          </span>
        )}
        {loss && (
          <span className={scss.stat}>
            {new Intl.NumberFormat().format(Number(loss))} ft
            <span className={scss.label}>Descent</span>
          </span>
        )}
      </div>
      {garmin && (
        <div className={scss.external}>
          <a
            className={scss.garmin}
            href={`${Constants.GARMIN_URL}${garmin}`}
            rel="noreferrer"
            target="_blank"
          >
            View route on Garmin.com
          </a>
        </div>
      )}
    </>
  );
}

export default Stats;
