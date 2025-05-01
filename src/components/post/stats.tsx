import Styles from '@/styles';

const scss = Styles.Components.Post.Stats;

type Props = {
  gain: string | number;
  loss: string | number;
  miles: string | number;
  time: number | number[];
};

function Stats({ gain, loss, miles, time }: Props) {
  return (
    <table className={scss.stats}>
      <tbody>
        <tr>
          <th>Distance</th>
          <td>
            {new Intl.NumberFormat().format(Number(miles))}
            <small> mi</small>
          </td>
        </tr>
        <tr>
          <th>Elevation gain</th>
          <td>
            {new Intl.NumberFormat().format(Number(gain))}
            <small> ft</small>
          </td>
        </tr>
        <tr>
          <th>Elevation loss</th>
          <td>
            {new Intl.NumberFormat().format(Number(loss))}
            <small> ft</small>
          </td>
        </tr>
        <tr>
          <th>Time</th>
          <td>
            {Array.isArray(time) ? (
              <>
                {time[0]}
                <small> h</small> {time[1]}
                <small> m</small>
              </>
            ) : (
              <>
                {time}
                <small> days</small>
              </>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;
