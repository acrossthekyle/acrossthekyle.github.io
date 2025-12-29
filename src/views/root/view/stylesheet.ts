import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col
    opacity-0
    animate-in-fade

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
  description: `
    mt-10
    text-base
    line-clamp-3
  `,
  footer: `
    flex justify-between items-end
    mt-8
    text-sm
    font-normal

    mega:mt-14
  `,
  type: `
    text-xs/3
    font-bold
    uppercase
    tracking-wide
  `,
  date: `
    text-xs/3
    font-bold
    uppercase
    tracking-wide

    mega:flex-1
    mega:text-right
  `,
});

export default styles;
