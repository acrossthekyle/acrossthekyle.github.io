import tw from '@/styles';

const styles = tw({
  view: `
    grid auto-rows-[1rem] gap-6 grid-cols-1
    w-full max-w-7xl
    my-0 mx-auto
    pb-6

    sm:gap-12
    sm:pb-12
    sm:grid-cols-2
    lg:gap-16
    lg:grid-cols-3
    lg:pb-16
  `,
  card: (hasBeenScrolled: boolean, hasEnteredView: boolean) => tw(`
    group
    relative
    transform-gpu
    duration-800
    shadow-2xl/50
    select-none
    row-span-11

    sm:[:nth-child(1n)]:row-span-7
    sm:[:nth-child(2n)]:row-span-9
    lg:[:nth-child(1n)]:row-span-5
    lg:[:nth-child(2n)]:row-span-8
    lg:[:nth-child(3n)]:row-span-6

    ${hasEnteredView ? `
      opacity-100
      shadow-black
      scale-100
    ` : `
      opacity-50
      scale-97
    `}

    active:scale-90

    sm:duration-500
    sm:shadow-transparent
    sm:scale-100
    sm:hover:scale-105
    sm:hover:shadow-black
    sm:active:scale-100
  `),
  figure: (hasBeenScrolled: boolean) => tw(`
    relative
    h-full
    rounded-3xl
    overflow-hidden
    duration-500

    ${hasBeenScrolled ? `
      sm:opacity-100
    ` : `
      sm:opacity-30
    `}
  `),
  link: `
    relative
    block
    w-full h-full
    cursor-pointer
  `,
  image: (hasEnteredView: boolean) => tw(`
    relative z-0
    object-cover
    h-full w-full
    transform-gpu duration-500

    group-hover:grayscale-0
    group-hover:opacity-80

    ${hasEnteredView ? `
      grayscale-0
      opacity-65
    ` : `
      grayscale-100
      opacity-40
    `}
  `),
  caption: `
    absolute inset-0 z-3
    flex flex-col items-start justify-end
    p-6

    sm:p-12
  `,
  title: `
    duration-500
    mb-1
    text-white/80 text-3xl/8 font-black uppercase

    sm:text-2xl/7

    group-hover:text-white/100
  `,
  subtitle: `
    text-tiny text-white font-light uppercase
  `,
  pulse: `
    animate-pulse
  `,
  skeleton: `
    relative
    overflow-hidden
    h-full w-full
    bg-neutral-900
    rounded-lg
  `,
});

export default styles;
