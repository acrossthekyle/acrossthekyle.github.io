import tw from '@/styles';

const styles = tw({
  container: (isOnRoot: boolean, isExpanded: boolean) => tw(`
    flex flex-col justify-between
    ${isOnRoot ? `
      h-[calc(100dvh-6.6rem)]
    ` : `
      ${isExpanded ? `h-dvh` : `delay-200 h-[calc(22.25dvh-6.6rem)]`}
    `}
    p-8
    border-r-1 border-b-1
    overflow-y-scroll
    duration-300

    dark:border-b-white/15 light:border-b-black/15
    dark:border-r-white/15 light:border-r-black/15
    dark:text-white light:text-black
    dark:bg-black light:bg-white

    base:h-full
    base:border-b-0
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
    w-6.25
  `,
  logo: `
    stroke-2
  `,
  toggle: `
    absolute top-8 right-8
    uppercase
    text-sm
    font-extrablack font-stretch-condensed

    base:hidden
  `,
  group: (isOnRoot: boolean, isExpanded: boolean) => tw(`
    my-6

    ${!isOnRoot ? `
      duration-300
      ${isExpanded ? 'delay-300 opacity-100' : 'opacity-0'}

      base:opacity-100
    ` : ''}
  `),
  tagline: `
    font-extrablack font-stretch-condensed
    uppercase
    text-3xl/6
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
  footer: (isOnRoot: boolean, isExpanded: boolean) => tw(`
    ${!isOnRoot ? `
      duration-300
      ${isExpanded ? 'delay-300 opacity-100' : 'opacity-0'}

      base:opacity-100
    ` : ''}
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
