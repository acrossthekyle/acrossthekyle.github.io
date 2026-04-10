import tw from '@/styles';

const styles = tw({
  definition: `
    grid grid-cols-3
    mb-4
    w-full
    font-mono font-normal
    text-xtiny
    uppercase
  `,
  header: `
    flex justify-between items-start
    w-full
    leading-[1.75]
    font-serif font-light
    text-sm
  `,
  blurb: `
    block
    w-102
  `,
  subheader: `
    font-mono font-normal
    text-xtiny
    uppercase
    italic
  `,
  tagline: `
    absolute left-4 bottom-3 right-4 z-1
    grid grid-cols-3
    text-xtiny
    font-mono font-normal
    uppercase
  `,
  links: `
    flex gap-2 justify-center
    text-tiny
    leading-[1]
  `,
  link: `
    border-b-1 border-b-transparent border-dashed

    hover:border-b-(--foreground)
  `,
  last: `
    text-right
  `,
  aside: `
    absolute top-11.25 bottom-4 right-4
    flex flex-col items-end justify-end
    leading-[1.25]
    text-right
    uppercase
  `,
  current: `
    font-mono font-normal
    text-xtiny
  `,
  times: `
    flex gap-4
    font-mono font-normal
    text-xtiny
  `,
  index: `
    block
    mb-0.5
  `,
});

export default styles;
