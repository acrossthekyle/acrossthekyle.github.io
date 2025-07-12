import tw from '@/styles';

const styles = {
  view: tw(`
    grid auto-rows-[1rem] gap-6 grid-cols-1
    w-full max-w-7xl
    my-0 mx-auto
    pb-4

    sm:gap-8
    sm:pb-8
    sm:grid-cols-2
    lg:gap-16
    lg:grid-cols-3
  `),
  card: (hasEnteredView) => tw(`
    relative
    ease-in-out duration-500
    rounded-2xl
    overflow-hidden

    before:absolute
    before:z-3
    before:inset-0
    before:opacity-100
    before:bg-radial
    before:from-transparent
    before:to-black/40
    before:pointer-events-none
    before:duration-500

    ${hasEnteredView ? 'top-0 opacity-100' : 'top-12 opacity-0'}

    [:nth-child(1n)]:row-span-11
    [:nth-child(2n)]:row-span-14
    [:nth-child(3n)]:row-span-12

    sm:[:nth-child(1n)]:row-span-9
    sm:[:nth-child(2n)]:row-span-13
    sm:[:nth-child(3n)]:row-span-11
    lg:[:nth-child(1n)]:row-span-5
    lg:[:nth-child(2n)]:row-span-8
    lg:[:nth-child(3n)]:row-span-6

    hover:before:opacity-50
  `),
  figure: tw(`
    relative
    h-full
  `),
  link: tw(`
    relative
    block
    w-full h-full
    cursor-pointer
  `),
  image: tw(`
    relative z-0
    object-cover
    h-full w-full
    rounded-2xl
  `),
  caption: tw(`
    absolute inset-0 z-3
    flex flex-col items-center justify-center
    py-4
  `),
  tag: tw(`
    flex items-center justify-center
    py-2.5 pb-2.25 px-2
    mt-2
    bg-white/60
    rounded-sm
    text-tiny/0 text-black/50 font-light uppercase
  `),
  eyebrow: tw(`
    text-xs font-normal uppercase
  `),
  title: tw(`
    text-white text-2xl font-black uppercase
  `),
  year: tw(`
    text-xs uppercase
  `),
  pulse: tw(`
    animate-pulse
  `),
  skeleton: tw(`
    relative
    overflow-hidden
    h-full w-full
    bg-neutral-900
    rounded-3xl
  `),
};

export default styles;
