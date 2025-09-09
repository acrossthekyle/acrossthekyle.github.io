import tw from '@/styles';

const styles = tw({
  footer: `
    fixed top-3 right-3 z-4
    flex flex-col

    base:top-auto
    base:bottom-12
    base:right-12
  `,
  toggle: (isOnRoot: boolean) => tw(`
    ${!isOnRoot && 'hidden'}
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
