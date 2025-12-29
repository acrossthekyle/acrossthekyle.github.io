import tw from '@/styles';

const styles = tw({
  container: `
    opacity-0
    animate-in-fade
  `,
  article: `
    dark:text-white light:text-black
  `,
  figure: `
    relative

    mt-8 mx-8 mb-8

    hecto:mt-12
    hecto:mx-12
    hecto:mb-6
    mega:mt-16
    mega:mx-16
    mega:mb-8
  `,
  caption: `
    px-5 pb-4
  `,
  section: `
    px-8 pb-12

    hecto:px-12
    mega:px-16
  `,
  paragraph: `
    text-base
    mb-4

    last:mb-0
  `,
});

export default styles;
