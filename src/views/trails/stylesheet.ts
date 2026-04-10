import tw from '@/styles';

const styles = tw({
  definition: `
    flex justify-between
    mb-4
    w-full
    font-mono
    text-xtiny
    uppercase
  `,
  sticky: `
    absolute right-4 top-20 bottom-4 z-2
    flex items-end
  `,
  map: `
    sticky bottom-14
    relative
    w-full

    md:w-1/2
    lg:w-56
    xl:w-100
  `,
  intro: `
    relative
    flex flex-col items-end gap-4
    h-126
    mb-20

    md:flex-row
  `,
  paragraph: `
    w-full
    leading-[1.75]
    font-serif font-light
    text-sm

    sm:w-98
  `,
  section: `
    relative
    flex flex-col gap-4
    mb-20

    lg:flex-row
    lg:gap-12

    last:mb-0
  `,
  heading: `
    sticky top-12 z-10
    self-start
    flex-none
    w-24
    mb-2
    leading-[1]
    font-mono font-bold
    text-xs
    uppercase
    whitespace-nowrap

    md:w-32
    lg:mb-0
    lg:w-48
  `,
  subheading: `
    block
    mt-1.5
    leading-[1]
    font-mono font-normal
    text-xtiny
  `,
  items: `
    flex flex-col gap-10
  `,
  item: `
    flex flex-col gap-2

    md:flex-row
    md:gap-12
  `,
  index: `
    block
    font-mono
    text-xtiny
  `,
  link: `
    block
    leading-[1]
    font-mono font-bold
    text-xs
    uppercase
    overflow-hidden

    md:duration-300
    md:hover:font-thin
  `,
  lid: `
    block
    mt-2
    leading-[1.25]
    font-mono font-normal
    text-xtiny text-current/70
  `,
});

export default styles;
