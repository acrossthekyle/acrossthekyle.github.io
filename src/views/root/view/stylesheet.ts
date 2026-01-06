import tw from '@/styles';

const styles = tw({
  article: `
    p-6
    border-b-1
    opacity-0
    animate-in-fade

    dark:text-white light:text-black
    dark:border-b-white/15 light:border-b-black/15

    last:border-b-0

    base:p-8
    hecto:p-12
    kilo:p-16
  `,
  preview: `
    mt-6

    base:mt-8
  `,
  emphasis: `
    font-serif
    italic
  `,
  filter: `
    absolute top-0 right-0
    p-4
  `,
  icon: `
    w-4.5 h-4.5
  `,
});

export default styles;
