import tw from '@/styles';

const styles = tw({
  sticky: `
    sticky top-12 z-10
    self-start
  `,
  heading: `
    flex-none
    w-24
    leading-[1]
    font-mono
    text-xs
    uppercase
    whitespace-nowrap

    md:w-32
    lg:w-64
  `,
  small: `
    text-tiny
  `,
  section: `
    flex flex-col gap-1
    mb-20

    md:flex-row

    last:mb-0
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
    font-mono font-normal
    text-xs

    sm:w-110
    md:mr-8

    last:mr-0
  `,
  list: `
    flex flex-col gap-8
    leading-[1]
    font-mono
    text-tiny
    uppercase
  `,
  timeline: `
    flex gap-12
    leading-[1]
    font-mono
    text-tiny
    uppercase
  `,
  year: `
    block
    w-16
    mt-0.5
    font-mono font-normal
    text-xtiny
  `,
  details: `
    block
    mt-1
    font-mono font-normal
    uppercase
    text-xtiny text-current/80
  `,
  grid: `
    grid grid-cols-[14rem_14rem_14rem_14rem] gap-8
  `,
  item: `
    leading-[1]
    font-mono
    text-xs
    uppercase
    break-inside-avoid-column
  `,
  eyebrow: `
    block
    mb-0.75
    font-mono font-normal
    text-xtiny
  `,
  lid: `
    block
    mt-0.75
    text-xtiny
    font-mono font-normal
  `,
  skill: `
    block
    mt-0.5
    font-mono font-normal
    text-xtiny text-current/80

    first:mt-2
  `,
  link: `
    border-b-1 border-b-transparent border-dashed

    hover:border-b-(--foreground)
  `,
});

export default styles;
