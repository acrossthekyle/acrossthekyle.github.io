import { Small, Strong } from '@/ui/typography';
import { Length } from '@/ui/units';

type Props = {
  label: string;
  value: {
    basic: string;
    complex: Array<{
      imperial: string;
      metric: string;
    }>;
  };
};

export default function Stat({ label, value }: Props) {
  if (['when', 'total', 'experiences', 'duration'].includes(label.toLowerCase())) {
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
          <Length value={value.complex[0]} />
        </Small>
      </>
    );
  }

  if (['highest peak', 'max altitude'].includes(label.toLowerCase())) {
    return (
      <>
        <Strong>{label}</Strong>
        <Small>
          <Length isSmall value={value.complex[0]} />
        </Small>
      </>
    );
  }

  if (label.toLowerCase() === 'elevation') {
    return (
      <>
        <Strong>{label}</Strong>
        <Small>
          ▲ <Length isSmall value={value.complex[0]} /> / <Length isSmall value={value.complex[1]} /> ▼
        </Small>
      </>
    );
  }

  return null;
}
