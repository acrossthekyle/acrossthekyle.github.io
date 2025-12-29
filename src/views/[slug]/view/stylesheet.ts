import tw from '@/styles';

const styles = tw({
  overview: `
    relative
    flex flex-col gap-3
    p-8

    dark:text-white light:text-black

    hecto:p-12
    mega:p-16
  `,
  heading: `
    text-7xl/13.5
    font-extrablack font-stretch-ultra-condensed
    uppercase
    mb-1

    base:text-4xl/7
    mega:text-5xl/9.25
  `,
  meta: `
    text-xs
    font-bold
    uppercase
    tracking-wide
  `,
  description: `
    mb-4
    text-base

    first:mt-4
    last:mb-0

    base:first:mt-8
    mega:text-lg
  `,
  article: `
    relative
    mx-8 mb-8
    pb-8
    border-b-1

    dark:border-b-white/25 light:border-b-black/25
    dark:text-white light:text-black

    last:border-b-0
    last:mb-0

    base:h-54
    base:mx-8
    base:mb-8
    base:pb-8
    base:gap-4
    hecto:h-76
    hecto:mx-12
    hecto:mb-12
    hecto:pb-12
    hecto:gap-6
    mega:mx-16
    mega:mb-16
    mega:pb-16
    mega:gap-8
  `,
  figure: `
    relative

    base:w-[calc(50%-1rem)]
    base:absolute
    base:top-0
    base:left-0
    base:bottom-8
    hecto:bottom-12
    mega:bottom-16
  `,
  header: `
    relative
    mb-4

    base:mb-0
    base:w-[calc(50%-1rem)]
    base:absolute
    base:top-0
    base:right-0
    base:left-auto
  `,
  title: `
    relative
    flex flex-col
    mb-3
    text-4xl/7
    font-extrablack font-stretch-ultra-condensed
    uppercase

    base:text-2xl/5
    hecto:text-3xl/6
    mega:text-4xl/7
  `,
  prefix: `
    block
    mb-1
    text-base
    font-bold
  `,
  date: `
    text-xs/3
    font-bold
    uppercase
    tracking-wide
    whitespace-nowrap
  `,
  preview: `
    relative
    mt-4

    base:mt-0
    base:w-[calc(50%-1rem)]
    base:absolute
    base:bottom-8
    base:right-0
    base:left-auto
    hecto:bottom-12
    mega:bottom-16
  `,
  paragraph: `
    line-clamp-3
    text-base
    mb-4
  `,
  view: `
    flex items-center gap-2
    text-right text-xs
    font-bold
    uppercase
  `,
  icon: `
    w-3.5 h-3.5
    stroke-2
  `,
});

export default styles;
