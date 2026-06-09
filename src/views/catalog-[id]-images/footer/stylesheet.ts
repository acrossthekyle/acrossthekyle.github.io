import tw from '@/styles';

const styles = tw({
  container: `
    absolute bottom-0 left-0
    w-full
    px-4 pb-4
    flex flex-col items-center justify-between gap-6

    landscape-constrained:pb-1

    sm:pb-2
    sm:flex-row
    sm:gap-12
  `,
  row: `
    flex flex-col items-center gap-6

    sm:flex-row
    sm:gap-12
  `,
});

export default styles;
