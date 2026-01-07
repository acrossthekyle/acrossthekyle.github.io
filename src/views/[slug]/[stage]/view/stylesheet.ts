import tw from '@/styles';

const styles = tw({
  article: `
    p-6
    opacity-0
    animate-in-fade

    dark:text-white light:text-black

    base:p-8
    hecto:p-12
    kilo:p-16
  `,
  date: `
    mt-6
    capitalize
    italic
  `,
  line: `
    block
  `,
  meta: `
    block
    mb-6
    text-sm
    font-light

    base:text-center
  `,
});

export default styles;
