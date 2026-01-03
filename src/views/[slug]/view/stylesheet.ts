  import tw from '@/styles';

const styles = tw({
  container: `
    p-6
    opacity-0
    animate-in-fade

    dark:text-white light:text-black

    base:p-8
    hecto:p-12
    mega:p-16
  `,
  line: `
    block
  `,
  description: `
    mb-4
    text-base

    first:mt-5
    last:mb-0

    base:first:mt-8
  `,
  nav: `
    mt-8
    border-t-1

    dark:border-t-white/15 light:border-t-black/15
  `,
  list: `
    flex flex-col
  `,
  item: `
    py-6
    border-b-1

    dark:border-b-white/15 light:border-b-black/15

    last:border-b-0
    last:pb-0

    base:py-8
    hecto:py-12
    mega:py-16
  `,
  link: `
    group/link
    flex flex-col gap-0.5
    mb-2
  `,
  eyelid: `
    block
    my-0.75
    uppercase
    text-tiny
    font-bold font-stretch-semi-condensed
    tracking-widest
    duration-300

    nano:text-xs
    base:text-tiny
    mega:text-xs
  `,
  heading: `
    text-xl/4
    font-extrablack font-stretch-semi-expanded
    tracking-tighter
    uppercase
    duration-300

    plank:text-2xl/4.5
    nano:text-3xl/5.75
    centi:text-4xl/7
    base:text-3xl/6
    hecto:text-4xl/7
    mega:text-5xl/9.25

    group-hover/link:font-bold
    group-hover/link:font-stretch-normal
  `,
  preview: `
    line-clamp-2
    text-base
  `,
  more: `
    flex items-center gap-1
    mt-4
    font-bold
    text-xs
    uppercase
    duration-300

    hover:gap-2
  `,
  icon: `
    h-3.25 w-3.25
    stroke-3
  `,
});

export default styles;
