import tw from '@/styles';

const styles = tw({
  container: `
    h-152 w-full max-w-5xl
    mt-4
  `,
  map: `
    relative
    h-full w-full
  `,
  routes: `
    relative z-2
    stroke-4
    stroke-white
    !cursor-default
  `,
  dot: `
    relative z-3
    fill-black
    stroke-4
    stroke-white
    outline-none
    duration-500
    hover:stroke-yellow-300
  `,
  inner: `
    relative z-1
    fill-stone-500/60
    stroke-1
    stroke-black
  `,
  outer: `
    relative z-0
    fill-stone-200/6
    stroke-0
    duration-500

    hover:fill-yellow-300
  `,
  overlay: `
    relative z-5
    outline-none
    duration-500
    pointer-events-auto

    stroke-yellow-300/0
    fill-yellow-300/0

    hover:fill-yellow-300/40
  `,
  overlayDot: `
    relative z-0
    fill-yellow-300
    !cursor-default
    stroke-4
    stroke-yellow-300
    !pointer-events-none
  `,
  active: `
    relative z-0
    outline-none
    stroke-4
    stroke-yellow-300
    !pointer-events-none
    !cursor-default
    duration-500
  `,
  popup: `
    relative
    flex flex-col
    w-auto min-w-74 max-w-110
    h-auto
    bg-black
    rounded-2xl
    p-4 pt-3
    text-white
    shadow-2xl/50 shadow-black
  `,
  day: `
    absolute right-5 top-3
    block
    mb-2
    text-xs font-semibold uppercase
  `,
  from: `
    flex items-center gap-1
    me-12
    text-sm/4 font-semibold
  `,
  to: `
    mt-1
    ps-6.5 pb-8
    text-xl/6 font-black capitalize
  `,
  icon: `
    inline-block
    w-5 h-5
    -ml-6.5 -mt-2
    stroke-2
  `,
  elevation: `
    absolute right-4.5 bottom-3
    flex gap-4
  `,
  value: `
    flex items-center gap-1
    text-sm font-bold
  `,
  trend: `
    w-4 h-4
    stroke-3
  `,
  distance: `
    absolute left-4.5 bottom-3
    flex items-center justify-start gap-2
    text-sm font-bold
  `,
  small: `
    mt-0.5
    text-tiny font-bold uppercase
  `,
});

export default styles;
