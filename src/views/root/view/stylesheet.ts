import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col

    dark:text-white light: text-black
  `,
  article: `
    p-8
    border-b-1

    dark:border-b-white/15 light:border-b-black/15

    last:border-b-0

    hecto:p-12
    mega:p-16
  `,
  header: `
    flex flex-col
    pb-10

    mega:flex-row
    mega:items-end
  `,
  title: `
    group/article-title
    relative
    flex
    mb-3
    text-3xl/6
    font-extrablack font-stretch-ultra-condensed
    uppercase

    hecto:text-4xl/7
    mega:mr-4
    mega:mb-0
    mega:text-5xl/9.25
  `,
  link: `
    absolute -left-8 top-0
    w-8
    opacity-0
    text-current/50
    font-medium font-stretch-extra-condensed
    duration-300

    group-hover/article-title:opacity-100

    hover:outline-0
  `,
  date: `
    text-xs/3
    font-bold
    uppercase
    tracking-wide

    mega:flex-1
    mega:text-right
  `,
  prefix: `
    inline-block
    max-w-50
    whitespace-nowrap
  `,
  suffix: `
    pl-1
    whitespace-nowrap
  `,
  description: `
    mt-10
    text-base
    line-clamp-3

    mega:text-lg
  `,
  footer: `
    flex justify-between items-end
    mt-8
    text-sm
    font-normal

    mega:mt-14
  `,
  count: `
    text-current/80
  `,
  view: `
    w-38
    text-right
    underline underline-offset-4
  `,
});

export default styles;
