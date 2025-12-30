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
    text-tiny
    font-bold
    uppercase
    tracking-wide

    base:text-xs
    mega:mt-14
  `,
});

export default styles;
