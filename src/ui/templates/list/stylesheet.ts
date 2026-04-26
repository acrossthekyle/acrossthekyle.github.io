import tw from '@/styles';

const styles = tw({
  container: `
    grid grid-cols-2
    cursor-auto
    pointer-events-auto

    mobile-landscape:grid
    mobile-landscape:grid-cols-2

    portrait:flex
    portrait:flex-col
    portrait:gap-3

    md:flex
    md:flex-col
    md:gap-3
    lg:gap-4
  `,
});

export default styles;
