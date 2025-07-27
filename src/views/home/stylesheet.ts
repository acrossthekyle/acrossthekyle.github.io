import tw from '@/styles';

const styles = tw({
  view: `
    grid auto-rows-[1rem] gap-6 grid-cols-1
    w-full max-w-7xl
    my-0 mx-auto

    sm:gap-12
    sm:grid-cols-2
    lg:gap-14
    lg:grid-cols-3
    lg:pb-16
    lg:pt-0
  `,
  card: (hasBeenScrolled: boolean, hasEnteredView: boolean) => tw(`
    group
    relative
    transform-gpu duration-800
    shadow-2xl/50
    select-none
    row-span-11
    mb-32

    sm:[:nth-child(1n)]:row-span-7
    sm:[:nth-child(2n)]:row-span-9
    lg:[:nth-child(1n)]:row-span-8
    lg:[:nth-child(2n)]:row-span-11
    lg:[:nth-child(3n)]:row-span-9
    2xl:[:nth-child(1n)]:row-span-5
    2xl:[:nth-child(2n)]:row-span-8
    2xl:[:nth-child(3n)]:row-span-6

    ${hasEnteredView ? `
      shadow-black
      scale-100

      sm:scale-100
      sm:shadow-transparent
    ` : `
      scale-97

      sm:scale-100
      sm:shadow-transparent
    `}
  `),
  figure: `
    relative
    w-full h-full
  `,
  link: `
    relative
    block
    w-full h-full
    rounded-4xl
    overflow-hidden
    cursor-pointer
    text-center
  `,
  image: (hasEnteredView: boolean) => tw(`
    relative
    rounded-4xl
    object-cover
    h-full w-full
    opacity-90

    sm:transform-gpu
    sm:duration-800
    sm:hover:scale-105
  `),
  caption: `
    flex flex-col gap-3
    py-6 pe-4
    text-left
  `,
  eyebrow: [
    'block',
    'mb-1',
    'text-tiny font-light',
  ],
  title: `
    duration-500
    text-white text-xl font-black uppercase
  `,
  subtitle: `
    text-base text-white font-light
  `,
  pulse: `
    animate-pulse
  `,
  skeleton: `
    relative
    overflow-hidden
    h-full w-full
    bg-neutral-900
    rounded-2xl
  `,
});

export default styles;
