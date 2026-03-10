import type { Stat } from '@/types';
import { Strong, Small } from '@/ui/typography';
import { Length } from '@/ui/units';

export default function Stat({ label, value }: Stat) {
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

  return (
    <>
      <Strong>{label}</Strong>
      <Small>
        <Length isSmall value={value.complex} />
      </Small>
    </>
  );
}
