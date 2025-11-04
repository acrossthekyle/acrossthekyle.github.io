import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean) => tw(`
    block
    relative z-1
    mt-1.5 mb-3 mr-4
    text-xs
    font-mono font-light font-stretch-normal
    tracking-wide
    duration-200

    group-hover/link:base:opacity-100

    base:text-xs/3
    base:absolute
    base:mb-0
    base:mt-0
    base:opacity-0
    base:w-52
    base:my-0

    ${isOnChild ? `
      text-left

      base:bottom-34
      base:left-4
      deka:bottom-42
      deka:left-12
      mega:bottom-44
      mega:text-sm/4
      tera:bottom-58
      peta:bottom-92
    ` : `
      base:bottom-36
      base:left-4
      deka:left-12
      deka:bottom-50
      mega:bottom-70
      giga:bottom-0
      giga:right-0
      giga:left-auto
      giga:text-right
      tera:text-sm/4
    `}
  `),
  first: `
    inline-block
    mr-0.75
    after:content-['_/']

    base:after:hidden
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
    block
  `,
});

export default styles;
