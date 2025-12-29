import tw from '@/styles';

const styles = tw({
  container: (isExpanded: boolean) => tw(`
    flex flex-col justify-end
    ${isExpanded ? `h-dvh` : `delay-300 h-22`}
    p-8
    duration-300
    border-b-1

    dark:border-b-white/15 light:border-b-black/15
    dark:border-r-white/15 light:border-r-black/15
    dark:text-white light:text-black
    dark:bg-black light:bg-white

    base:duration-0
    base:h-full
    base:border-b-0
    base:border-r-1
    base:fixed
    base:left-0
    base:top-0
    base:z-2
    base:w-86
    hecto:w-106
    heco:p-12
    mega:w-150
    mega:p-16
  `),
  anchor: `
    absolute top-8
    w-6.25

    hecto:top-12
    mega:top-16
  `,
  logo: `
    stroke-2
  `,
  toggle: `
    absolute top-9 right-8
    uppercase
    text-base
    font-extrablack font-stretch-condensed

    base:hidden
  `,
  group: (isExpanded: boolean) => tw(`
    mb-6
    duration-300

    ${isExpanded ? 'delay-300 opacity-100' : 'opacity-0'}

    base:opacity-100
  `),
  tagline: `
    font-extrablack font-stretch-condensed
    uppercase
    text-4xl/7
    mb-8

    base:text-4xl/7
    hecto:text-5xl/9.25
    mega:mb-12
    mega:text-6xl/11.5
  `,
  about: `
    text-sm

    plank:text-base
  `,
  emphasis: `
    font-serif italic
  `,
  footer: (isExpanded: boolean) => tw(`
    duration-300

    ${isExpanded ? 'delay-300 opacity-100' : 'opacity-0 -z-1'}

    base:opacity-100
  `),
  list: `
    flex flex-row gap-4
  `,
  link: `
    text-sm
    underline underline-offset-4
  `,
});

export default styles;
