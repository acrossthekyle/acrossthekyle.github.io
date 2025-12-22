import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean) => tw(`
    relative z-1
    block
    mt-1 mr-4
    text-tiny/3
    font-normal font-stretch-semi-condensed
    tracking-tight
    duration-200

    group-hover/link:base:opacity-100
    group-hover/link:base:visible

    base:invisible
    base:absolute
    base:mt-0
    base:opacity-0
    base:w-52
    base:my-0
    base:mr-2
    deka:mr-0

    ${isOnChild ? `
      text-left

      base:bottom-34
      base:left-4
      deka:bottom-42
      deka:left-12
      mega:bottom-44
      mega:text-xs/3.5
      tera:bottom-58
      peta:bottom-92
    ` : `
      base:bottom-0
      base:right-0
      base:text-right
      mega:tracking-normal
      mega:text-xs/3.5
      tera:text-sm/4
    `}
  `),
  first: `
    hidden

    base:block
    base:mr-0
  `,
  second: `
    inline-block
    mr-1

    base:block
    base:mr-0
  `,
  third: `
    inline-block

    base:block
  `,
});

export default styles;
