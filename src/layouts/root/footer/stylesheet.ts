import tw from '@/styles';

const styles = tw({
  footer: `
    fixed top-3 right-3 z-4
    flex flex-col

    deka:top-auto
    deka:bottom-12
    deka:right-12
  `,
  toggle: (isOnRoot: boolean) => tw(`
    ${!isOnRoot && 'invisible'}
  `),
  copy: `
    invisible
    absolute -z-1
    flex items-center
    text-tiny text-white/75
    font-black
  `,
});

export default styles;
