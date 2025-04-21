import Styles from '@/styles';

import Button from '../button';

const scss = Styles.Components.Packs.Units;

type Props = {
  units: string;
  uri: string;
};

function Units({ units, uri }: Props) {
  return (
    <div className={scss.units}>
      <Button
        mode={units === 'imperial' ? 'primary' : 'secondary'}
        href={`${uri}?units=imperial`}
        text="Imperial"
      />
      <Button
        mode={units === 'metric' ? 'primary' : 'secondary'}
        href={`${uri}?units=metric`}
        text="Metric"
      />
    </div>
  );
}

export default Units;
