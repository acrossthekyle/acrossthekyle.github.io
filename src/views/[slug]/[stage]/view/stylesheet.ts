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
  line: `
    block
  `,
  section: `
    mt-6

    base:mt-8
    hecto:mt-12
    kilo:mt-16
  `,
  meta: `
    block
    mb-6
    text-sm
    font-bold
  `,
});

export default styles;
