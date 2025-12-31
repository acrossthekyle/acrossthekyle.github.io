import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col
    opacity-0
    animate-in-fade

    dark:text-white light: text-black
  `,
  article: `
    p-6
    border-b-1

    dark:border-b-white/15 light:border-b-black/15

    last:border-b-0

    base:p-8
    hecto:p-12
    mega:p-16
  `,
  description: `
    mt-4
    text-base
    line-clamp-3

    base:mt-10
  `,
});

export default styles;
