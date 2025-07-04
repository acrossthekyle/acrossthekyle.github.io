import tw from '@/styles';

const styles = {
  map: tw(`
    relative z-0
    h-full w-full
  `),
  routes: tw(`
    relative z-2
    stroke-3
    stroke-white/30
  `),
  glow: tw(`
    relative z-1
    stroke-yellow-300
    filter-[url('#glow-filter')]
    opacity-10
  `),
  current: tw(`
    relative z-1
    stroke-3
    stroke-yellow-300
  `),
  blur: tw(`
    absolute z-2
    w-0
    h-0
  `),
  compass: tw(`
    absolute top-3 left-3 z-3
    flex flex-col items-center
    text-white/50
    pointer-events-none

    sm:top-6
    sm:left-6
  `),
  north: tw(`
    text-red-500

    before:content-['_↑']
  `),
  circle: tw(`
    relative z-1
    stroke-yellow-300
    !pointer-events-none
  `),
  pin: tw(`
    stroke-10
  `),
  gps: tw(`
    relative z-1
    stroke-white
    cursor-pointer
  `),
  active: tw(`
    relative z-1
    stroke-yellow-300
    !pointer-events-none
  `),
};

export default styles;
