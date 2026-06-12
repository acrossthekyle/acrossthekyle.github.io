import tw from '@/styles';

export const styles = tw({
  list: `
    flex flex-col gap-8

    lg:pb-4
  `,
  link: `
    group
    flex flex-col justify-end
    h-full
    text-left
  `,
  heading: (isInView: boolean) => tw(`
    mb-2
    text-[min(6.5vw,32px)]
    font-black
    leading-[0.85]
    uppercase
    tracking-tight
    whitespace-nowrap

    sm:text-[min(3.25vw,30px)]
    lg:text-[min(2.25vw,30px)]

    motion-safe:duration-300

    ${isInView ? '' : 'font-thin'}

    motion-safe:group-hover:font-thin
  `),
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


