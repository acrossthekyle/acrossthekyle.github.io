import tw from '@/styles';

const styles = tw({
  container: [
    'h-152 w-full max-w-5xl',
    'mt-4',
  ],
  map: [
    'relative',
    'h-full w-full',
  ],
  routes: [
    'relative z-2',
    'stroke-3',
    'stroke-white',
    '!cursor-default',
  ],
  dot: [
    'relative z-3',
    'fill-black',
    'stroke-3',
    'stroke-white',
    'outline-none',
    'duration-500',
    'hover:stroke-5',
    'hover:stroke-yellow-300',
  ],
  inner: [
    'relative z-1',
    'fill-stone-500/60',
    'stroke-1',
    'stroke-black',
  ],
  outer: [
    'relative z-0',
    'fill-stone-200/6',
    'stroke-0',
    'duration-500',
    'hover:fill-yellow-300/30',
  ],
  popup: [
    'flex flex-col',
    'w-auto max-w-110',
    'p-2',
    'text-white',
  ],
  day: [
    'block',
    'mb-2',
    'text-sm font-normal uppercase',
  ],
  from: [
    'flex items-center gap-2',
    'text-sm/6 font-normal',
  ],
  to: [
    'text-2xl/6 font-black capitalize',
  ],
  stats: [
    'flex items-center gap-8',
    'mt-5',
  ],
  stat: [
    'flex flex-col items-start gap-1',
    'text-xs font-semibold uppercase tracking-wide',
  ],
  units: [
    'text-sm font-normal lowercase',
  ],
  icon: [
    'w-3 h-3',
    'stroke-3',
  ],
});

export default styles;
