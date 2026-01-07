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
  date: `
    block
    mb-2
    text-sm text-current/85
    italic capitalize
  `,
  emphasis: `
    font-serif
    italic
  `,
  filter: `
    absolute top-1.5 right-1.25
    p-2
    border-1
    rounded-sm
    duration-300

    dark:bg-white/15 light:bg-black/15
    dark:border-white/15 light:border-black/15

    hover:dark:bg-white/20
    hover:light:bg-black/20
  `,
  icon: `
    w-4.5 h-4.5
  `,
});

export default styles;
