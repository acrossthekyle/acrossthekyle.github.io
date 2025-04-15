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
        <h2 className={scss.stat}>
          {new Intl.NumberFormat().format(Number(miles))}
          <span className={scss.label}>Miles</span>
        </h2>
        <h2 className={scss.stat}>
          {new Intl.NumberFormat().format(Number(steps))}
          <span className={scss.label}>Steps</span>
        </h2>
        {gain && (
          <h2 className={scss.stat}>
            {new Intl.NumberFormat().format(Number(gain))}
            <small>ft</small>
            <span className={scss.label}>Ascent</span>
          </h2>
        )}
        {loss && (
          <h2 className={scss.stat}>
            {new Intl.NumberFormat().format(Number(loss))}
            <small>ft</small>
            <span className={scss.label}>Descent</span>
          </h2>
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
