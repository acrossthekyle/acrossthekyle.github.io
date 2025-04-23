import Constants from '@/constants';
import Images from '@/images';
import Styles from '@/styles';

const scss = Styles.Components.Post.Stats;

type Props = {
  className?: string;
  gain?: string | number;
  loss?: string | number;
  miles: string | number;
  time?: number | number[];
};

function Stats({ className = '', gain, loss, miles, time }: Props) {
  return (
    <>
      <div className={`${scss.stats} ${className}`.trim()}>
        <h2 className={scss.stat}>
          <span>
            {new Intl.NumberFormat().format(Number(miles))}
            <small> mi</small>
          </span>
          <span className={scss.label}>Distance</span>
        </h2>
        {gain && (
          <h2 className={scss.stat}>
            <span>
              {new Intl.NumberFormat().format(Number(gain))}
              <small> ft</small>
            </span>
            <span className={scss.label}>Elevation gain</span>
          </h2>
        )}
        {loss && (
          <h2 className={scss.stat}>
            <span>
              {new Intl.NumberFormat().format(Number(loss))}
              <small> ft</small>
            </span>
            <span className={scss.label}>Elevation loss</span>
          </h2>
        )}
        {time && (
          <h2 className={scss.stat}>
            {Array.isArray(time) ? (
              <span>
                {time[0]}
                <small> h</small> {time[1]}
                <small> m</small>
              </span>
            ) : (
              <span>
                {time}
                <small> days</small>
              </span>
            )}
            <span className={scss.label}>Time</span>
          </h2>
        )}
      </div>
    </>
  );
}

export default Stats;
