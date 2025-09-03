import tw from '@/styles';

const styles = tw({
  footer: `
    fixed top-6 right-6 z-4
    flex flex-col

    deka:top-auto
    deka:bottom-12
    deka:right-12
  `,
  copy: (isOnRoot: boolean) => tw(`
    ${!isOnRoot && 'invisible'}
    flex items-center
    text-tiny text-white/75
    font-black
  `),
});

export default styles;
