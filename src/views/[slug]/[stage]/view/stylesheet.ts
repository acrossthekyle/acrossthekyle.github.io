import tw from '@/styles';

const styles = tw({
  article: `
    dark:text-white light:text-black
  `,
  header: `
    flex flex-col
    pt-8 px-8 pb-10

    hecto:pt-12
    hecto:px-12
    mega:flex-row
    mega:items-end
    mega:px-16
    mega:pt-16
  `,
  title: `
    relative
    flex
    mb-3
    text-7xl/13.5
    font-extrablack font-stretch-ultra-condensed
    uppercase

    base:text-3xl/6
    hecto:text-4xl/7
    mega:mr-4
    mega:mb-0
    mega:text-5xl/9.25
  `,
  date: `
    text-xs/3
    font-bold
    uppercase
    tracking-wide
    whitespace-nowrap

    mega:flex-1
    mega:text-right
  `,
  figure: `
    relative

    mb-8

    hecto:mb-12
    mega:mb-16
  `,
  caption: `
    px-8 pb-8

    base:pb-5
    hecto:px-12
    hecto:pb-9
    mega:px-16
    mega:pb-13
  `,
  section: `
    px-8 pb-12

    hecto:px-12
    mega:px-16
  `,
  paragraph: `
    text-base
    mb-4

    last:mb-0

    mega:text-lg
  `,
});

export default styles;
