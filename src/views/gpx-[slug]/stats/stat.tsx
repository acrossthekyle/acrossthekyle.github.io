import { Length } from '@/ui/units';
import { convertFeetToMeters } from '@/utils';

type Props = {
  label: string;
  value: {
    basic: string;
    complex: {
      imperial: string;
      metric: string;
    };
  };
};

export default function Stat({ label, value }: Props) {
  if (['start', 'end', 'time'].includes(label.toLowerCase())) {
    return (
      <>
        <strong>{label}</strong>
        <small>{value.basic}</small>
      </>
    );
  }

  if (label.toLowerCase() === 'distance') {
    return (
      <>
        <strong>{label}</strong>
        <small>
          <Length value={value.complex} />
        </small>
      </>
    );
  }

  if (['max altitude', 'elevation gain', 'elevation loss'].includes(label.toLowerCase())) {
    return (
      <>
        <strong>{label}</strong>
        <small>
          <Length isSmall value={value.complex} />
        </small>
      </>
    );
  }

  if (['altitude start', 'altitude end'].includes(label.toLowerCase())) {
    return (
      <>
        <strong>{label}</strong>
        <small>
          <Length isSmall value={{
            imperial: value.complex.imperial,
            metric: new Intl.NumberFormat().format(convertFeetToMeters(
              Number(value.complex.imperial),
            )),
          }}
        />
        </small>
      </>
    );
  }

  return null;
}
