import tw from '@/styles';

const styles = tw({
  container: (isExpanded: boolean) => tw(`
    flex flex-col justify-end
    ${isExpanded ? `
      h-166

      [transition:height_.3s_var(--ease-in-out)]
    ` : `
      h-22

      [transition:height_.3s_var(--ease-in-out)_.3s]
    `}
    p-6
    border-b-1

    dark:border-b-white/15 light:border-b-black/15
    dark:border-r-white/15 light:border-r-black/15
    dark:text-white light:text-black
    dark:bg-black light:bg-white

    base:delay-0
    base:duration-0
    base:h-full
    base:border-b-0
    base:border-r-1
    base:fixed
    base:left-0
    base:top-0
    base:z-2
    base:w-86
    base:p-8
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
  icon: `
    stroke-2
  `,
  toggle: `
    absolute top-8 right-6
    uppercase
    text-sm
    font-extrablack

    base:hidden
  `,
  x: (isExpanded: boolean) => tw(`
    duration-250
    ${isExpanded ? 'rotate-0' : 'rotate-45'}

    stroke-2
  `),
  group: (isExpanded: boolean) => tw(`
    mb-6

    ${isExpanded ? `
      opacity-100

      [transition:opacity_.3s_var(--ease-in-out)_.3s]
    ` : `
      opacity-0

      [transition:opacity_.3s_var(--ease-in-out)]
    `}

    base:delay-0
    base:duration-0
    base:opacity-100
  `),
  tagline: `
    font-extrablack font-stretch-condensed
    uppercase
    text-5xl/9.25
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
    ${isExpanded ? `
      opacity-100

      [transition:opacity_.3s_var(--ease-in-out)_.3s]
    ` : `
      opacity-0 -z-1

      [transition:opacity_.3s_var(--ease-in-out)]
    `}

    base:delay-0
    base:duration-0
    base:opacity-100
  `),
  list: `
    grid grid-cols-2 gap-4

    pico:flex
    pico:flex-row
    pico:justify-center
    pico:gap-4
    base:justify-start
  `,
  link: `
    text-sm
    underline underline-offset-4
  `,
});

export default styles;
