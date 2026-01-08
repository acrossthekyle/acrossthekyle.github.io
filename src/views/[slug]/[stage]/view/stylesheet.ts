import tw from '@/styles';

const styles = tw({
  header: `
    w-full max-w-7xl
    mt-6 mb-0 mx-auto
    px-6

    dark:text-white light:text-black

    base:mt-8
    base:px-8
    hecto:mt-12
    hecto:px-12
    kilo:mt-16
    kilo:px-16
  `,
  article: `
    w-full max-w-7xl
    my-0 mx-auto
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
  paragraph: `
    w-full max-w-2xl
    mx-auto
  `,
});

export default styles;
