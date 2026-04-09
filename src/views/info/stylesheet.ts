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
    sticky top-12 z-10
    self-start
  `,
  heading: `
    flex-none
    w-24
    leading-[1]
    font-sans font-black
    text-sm
    uppercase
    whitespace-nowrap

    md:w-32
    lg:w-64
  `,
  subheading: `
    block
    mt-1.5
    leading-[1]
    normal-case
    font-sans font-light
    text-xs
  `,
  section: `
    flex flex-col gap-1
    mb-24

    md:flex-row

    last:mb-0
  `,
  intro: `
    relative
    flex flex-col items-end gap-4
    h-126
    mb-12

    md:flex-row
  `,
  float: `
    absolute bottom-33
  `,
  paragraph: `
    w-full
    leading-[1.25]
    font-sans font-light
    text-sm

    sm:w-80
    md:mr-4

    last:mr-0
  `,
  timeline: `
    flex flex-col gap-8
    font-sans font-light
  `,
  entry: `
    flex gap-16
    text-sm
    leading-[1]
  `,
  year: `
    mt-0.5
    font-mono font-normal
    text-xtiny
  `,
  small: `
    block
    mt-1
    font-mono font-normal
    uppercase
    text-xtiny text-current/80
  `,
  grid: `
    grid grid-cols-[14rem_14rem_14rem] gap-8
    columns-3
  `,
  item: `
    font-sans font-light
    text-xs
    uppercase
    break-inside-avoid-column
  `,
  eyebrow: `
    block
    mb-0.5
    font-mono font-normal
    text-xtiny
  `,
  lid: `
    block
    text-xtiny
    font-mono font-normal
  `,
  skill: `
    block
    font-mono font-normal
    text-xtiny text-current/80

    first:mt-2
  `,
});

export default styles;
