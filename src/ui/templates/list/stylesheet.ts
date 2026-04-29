import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col gap-3
    cursor-auto
    pointer-events-auto

    constrained:grid
    constrained:grid-cols-2

    lg:gap-4
  `,
});

export default styles;
