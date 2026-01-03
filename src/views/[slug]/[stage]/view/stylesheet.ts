import tw from '@/styles';

const styles = tw({
  container: `
    opacity-0
    animate-in-fade
  `,
  article: `
    p-6

    dark:text-white light:text-black

    base:p-8
    hecto:p-12
    mega:p-16
  `,
  line: `
    block
  `,
  section: `
    mt-8
  `,
  paragraph: `
    text-base
    mb-4

    last:mb-0
  `,
});

export default styles;
