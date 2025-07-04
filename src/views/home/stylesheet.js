import tw from '@/styles';

const styles = {
  view: tw(`
    grid auto-rows-[1rem] gap-4 grid-cols-1
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

    ${hasEnteredView ? 'top-0 opacity-100' : 'top-12 opacity-0'}

    [:nth-child(1n)]:row-span-11
    [:nth-child(2n)]:row-span-15
    [:nth-child(3n)]:row-span-13

    sm:[:nth-child(1n)]:row-span-9
    sm:[:nth-child(2n)]:row-span-13
    sm:[:nth-child(3n)]:row-span-11
    lg:[:nth-child(1n)]:row-span-5
    lg:[:nth-child(2n)]:row-span-8
    lg:[:nth-child(3n)]:row-span-6
  `),
  figure: tw(`
    relative
    h-full
  `),
  link: tw(`
    group
    relative
    block
    w-full h-full
    overflow-hidden
    rounded-2xl
    cursor-pointer
    text-left
  `),
  image: tw(`
    relative z-0
    object-cover
    transition-all duration-500
    h-full w-full
    transition-gpu duration-500

    grayscale-100
    opacity-90

    group-focus:grayscale-0
    group-focus:opacity-100
    group-active:grayscale-0
    group-active:opacity-100
    group-hover:opacity-100
    group-hover:grayscale-0
  `),
  caption: tw(`
    absolute z-3 inset-0
    flex flex-col items-center justify-center
    p-4
    text-center
  `),
  title: tw(`text-white text-2xl font-black uppercase`),
  eyebrow: tw(`
    mx-2 mt-1
    text-xs font-normal uppercase
  `),
  year: tw(`text-sm uppercase`),
  pulse: tw(`animate-pulse`),
  skeleton: tw(`
    relative
    overflow-hidden
    h-full w-full
    bg-neutral-900
    rounded-3xl
  `),
};

export default styles;
