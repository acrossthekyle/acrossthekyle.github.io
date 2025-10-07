import tw from '@/styles';

const common = `
  fixed z-3
  p-2
  bg-white/12.5
  rounded-sm

  base:absolute
  base:bg-transparent
  base:rounded-none
`;

const styles = tw({
  top: `
    bottom-11.5 right-2.75

    ${common}

    base:hidden
  `,
  arrow: `
    w-3.5 h-3.5
    stroke-2
  `,
  images: `
    hidden
    bottom-11.5 right-2.5
    flex flex-col gap-1

    ${common}

    base:flex
    base:top-2
    base:right-2
    base:bottom-auto
    deka:top-10
    deka:right-8
  `,
  image: `
    block
    w-4 h-3
    rounded-xs
    border-1 border-white/90
    bg-transparent
  `,
  overview: `
    bottom-2.5 right-2.5
    flex flex-col gap-0.75

    ${common}

    base:bottom-2
    base:right-2
    deka:bottom-10
    deka:right-8
  `,
  text: `
    block
    w-3 h-0.5
    bg-white/90

    first:w-4
  `,
});

export default styles;
