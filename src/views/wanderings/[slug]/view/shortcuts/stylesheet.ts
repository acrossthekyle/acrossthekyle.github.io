import tw from '@/styles';

const common = `
  hidden
  absolute z-5
  p-2

  base:flex
`;

const styles = tw({
  anchor: `
    relative -top-32 right-0
  `,
  images: `
    flex flex-col gap-1

    ${common}

    base:top-1
    base:right-1
    base:bottom-auto
    deka:top-10
    deka:right-8
  `,
  image: `
    block
    w-4 h-3
    rounded-xs
    border-1 border-current/90
    bg-transparent

    first:h-[1px]
    first:border-none
    first:bg-current/90
    last:h-[1px]
    last:border-none
    last:bg-current/90
  `,
  overview: `
    flex flex-col gap-0.75

    ${common}

    base:bottom-1
    base:right-1
    deka:bottom-10
    deka:right-8
  `,
  text: `
    block
    w-3 h-0.5
    bg-current/90

    first:w-4
  `,
});

export default styles;
