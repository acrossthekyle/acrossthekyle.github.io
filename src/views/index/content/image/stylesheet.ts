import tw from '@/styles';

export const styles = tw({
  figure: `
    hidden
    fixed top-1/2 left-1/2 z-1
    -translate-y-1/2 -translate-x-1/2
    aspect-square
    w-[74svh]

    md:block
  `,
  image: `
    opacity-75
    sepia-10
  `,
});
