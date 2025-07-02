import tw from '@/styles';

const styles = {
  container: tw(`
    absolute
    h-full
    w-full
  `),
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
  stats: tw(`
    absolute bottom-3 right-3
    flex flex-col items-end gap-4
    text-xs text-right font-bold uppercase

    sm:bottom-6
    sm:right-6
  `),
  label: tw(`
    block
    text-tiny font-normal
  `),
  resize: tw(`
    absolute z-2 top-3 right-3
    flex items-center justify-center
    w-8 h-8
    cursor-pointer
    bg-black/50
    backdrop-blur-sm
    rounded-lg
    hidden

    lg:flex
    sm:top-6
    sm:right-6
    lg:bottom-6
    lg:left-6
    lg:top-auto
    lg:right-auto
  `),
  icon: tw(`
    w-5 h-5
    stroke-white
    stroke-2
  `),
};

export default styles;
