import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean) => tw(`
    block
    relative z-1
    mt-1 mb-2 mr-4
    text-tiny/3 ${isOnChild ? `text-left` : `base:text-right`}
    font-light font-stretch-normal
    tracking-tight
    duration-200

    group-hover/link:base:opacity-100

    base:absolute
    base:mb-0
    base:mt-0
    ${isOnChild ? `
      base:bottom-44
      base:left-12
      tera:bottom-58
      peta:bottom-92
    ` : `
      base:bottom-0
      base:right-0
    `}
    base:opacity-0
    base:w-52
    base:my-0
    base:text-xs/3
  `),
  first: `
    inline-block
    mr-3

    base:block
    base:mr-0
  `,
  second: `
    inline-block
    mr-3

    base:block
    base:mr-0
  `,
  third: `
    inline-block

    base:block
  `,
});

export default styles;
