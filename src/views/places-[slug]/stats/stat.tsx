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
          <Length value={value.complex[0]} />
        </small>
      </>
    );
  }

  if (['highest peak', 'max altitude'].includes(label.toLowerCase())) {
    return (
      <>
        <strong>{label}</strong>
        <small>
          <Length isSmall value={value.complex[0]} />
        </small>
      </>
    );
  }

  if (label.toLowerCase() === 'elevation') {
    return (
      <>
        <strong>{label}</strong>
        <small>
          ▲ <Length isSmall value={value.complex[0]} /> / <Length isSmall value={value.complex[1]} /> ▼
        </small>
      </>
    );
  }

  return null;
}
