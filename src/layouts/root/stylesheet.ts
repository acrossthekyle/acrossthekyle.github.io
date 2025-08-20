import tw from '@/styles';

const styles = tw({
  main: `
    flex-1

    md:h-auto
    ml:flex
  `,
  footer: `
    fixed bottom-6 right-6 z-4
    flex flex-col

    ml:bottom-12
    ml:right-20
  `,
  copy: `
    absolute
    invisible
  `,
});

export default styles;
