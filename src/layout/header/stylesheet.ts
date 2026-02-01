import tw from '@/styles';

const styles = tw({
  container: `
    flex justify-between items-start
    max-w-lg
  `,
  heading: `
    text-sm
    uppercase

    md:text-xs
  `,
  theme: (isOnRoot: boolean) => tw(`
    ${isOnRoot ? 'block' : 'hidden'}
    fixed top-6 right-6

    md:block
    md:bottom-8
    md:top-auto
    md:right-8
  `),
});

export default styles;
