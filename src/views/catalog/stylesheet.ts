import tw from '@/styles';

const styles = tw({
  container: `
    w-full h-auto
    mt-12

    lg:h-svh
    lg:mt-0
  `,




  list: `
    col-span-3
    grid grid-cols-1 gap-y-10 gap-x-12
    h-full
    p-4

    sm:gap-y-12
    sm:grid-cols-2
    lg:gap-x-24
    lg:grid-cols-3

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  link: `
    group
    flex flex-col justify-end
    h-full
    text-left
  `,
  heading: `
    mb-2
    text-[min(6vw,32px)]
    font-black
    leading-[0.85]
    uppercase
    tracking-tight
    whitespace-nowrap

    sm:text-[min(3vw,22px)]
    lg:text-[min(1.5vw,22px)]

    motion-safe:duration-300
    motion-safe:group-hover:font-thin
    motion-safe:group-hover:font-stretch-condensed
  `,
  index: `
    block
    mb-1.5
    leading-[0.85]
    font-extralight
    text-xs
    tracking-widest

    md:text-tiny
    md:mb-1
  `,
  lid: `
    leading-3.5
    font-normal
    text-tiny
    uppercase
    tracking-widest

    md:text-xtiny
    md:leading-3
  `,
});

export default styles;
