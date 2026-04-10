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
  intro: `
    relative
    mb-20
  `,
  description: `
    flex items-end justify-end
    w-full
    h-123
    mb-20
    leading-[1.75]
    text-sm
    font-serif font-light

    md:w-110
  `,
  sticky: `
    absolute right-0 top-0 bottom-0 z-2
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
  album: `
    absolute -top-20 right-0
    w-20
    mb-6
    leading-[1]
    font-mono font-normal
    text-tiny text-right
    uppercase
  `,
  lid: `
    block
    mt-1
    font-mono font-normal
    text-xtiny
  `,
  section: `
    relative
    flex flex-col gap-4

    lg:flex-row
    lg:gap-12
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
  items: `
    grid grid-cols-1 gap-y-4

    xs:grid-cols-2
    sm:gap-x-4
    sm:grid-cols-3
    md:grid-rows-3
    lg:gap-x-8
  `,
  item: `
    font-mono
    text-xtiny
    uppercase
  `,
  value: `
    block
    mt-0.5
    font-mono font-bold
    text-tiny
  `,
});

export default styles;
