import type { Stat } from '@/types';
import { Length } from '@/ui/units';

export default function Stat({ label, value }: Stat) {
  if (['when', 'total', 'experiences', 'duration'].includes(label.toLowerCase())) {
    return (
      <>
        <span className="block uppercase leading-[1] text-sm font-medium font-stretch-condensed tracking-wide">
          {label}
        </span>
        <span className="uppercase text-sm font-black font-stretch-condensed tracking-tight">
          {value.basic}
        </span>
      </>
    );
  }

  if (label.toLowerCase() === 'distance') {
    return (
      <>
        <span className="block uppercase leading-[1] text-sm font-medium font-stretch-condensed tracking-wide">
          {label}
        </span>
        <span className="uppercase text-sm font-black font-stretch-condensed tracking-tight">
          <Length value={value.complex} />
        </span>
      </>
    );
  }

  return (
    <>
      <span className="block uppercase leading-[1] text-sm font-medium font-stretch-condensed tracking-wide">
        {label}
      </span>
      <span className="uppercase text-sm font-black font-stretch-condensed tracking-tight">
        <Length isSmall value={value.complex} />
      </span>
    </>
  );

  return null;
}
