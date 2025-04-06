import Components from '@/components';
import Styles from '@/styles';
import { Units } from '@/types/packs';

const scss = Styles.Pages.Packs.PageComponentUnits;

type Props = {
  onClick: () => void;
  units: Units;
};

function Component({ onClick, units }: Props) {
  return (
    <div className={scss.units}>
      <Components.Button
        mode={units === Units.Imperial ? 'primary' : 'secondary'}
        onClick={onClick}
        text="Imperial (oz/lbs)"
      />
      <Components.Button
        mode={units === Units.Metric ? 'primary' : 'secondary'}
        onClick={onClick}
        text="Metric (g/kg)"
      />
    </div>
  );
}

export default Component;
