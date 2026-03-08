import { Strong, Small } from '@/ui/typography';
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
        <Strong>{label}</Strong>
        <Small>{value.basic}</Small>
      </>
    );
  }

  if (label.toLowerCase() === 'distance') {
    return (
      <>
        <Strong>{label}</Strong>
        <Small>
          <Length value={value.complex} />
        </Small>
      </>
    );
  }

  if (['max altitude', 'elevation gain', 'elevation loss'].includes(label.toLowerCase())) {
    return (
      <>
        <Strong>{label}</Strong>
        <Small>
          <Length isSmall value={value.complex} />
        </Small>
      </>
    );
  }

  if (['altitude start', 'altitude end'].includes(label.toLowerCase())) {
    return (
      <>
        <Strong>{label}</Strong>
        <Small>
          <Length isSmall value={{
            imperial: value.complex.imperial,
            metric: new Intl.NumberFormat().format(convertFeetToMeters(
              Number(value.complex.imperial),
            )),
          }}
        />
        </Small>
      </>
    );
  }

  return null;
}
