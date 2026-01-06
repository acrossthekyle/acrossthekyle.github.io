  import tw from '@/styles';

const styles = tw({
  container: `
    p-6
    border-b-1

    dark:text-white light:text-black
    dark:border-b-white/15 light:border-b-black/15

    base:p-8
    hecto:p-12
    kilo:p-16
  `,
  line: `
    block
  `,
  preview: `
    mt-6
    text-base

    mega:text-xl
    peta:text-3xl
  `,
});

export default styles;
