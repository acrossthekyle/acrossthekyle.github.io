import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean) => tw(`
    hidden
    relative z-1
    mt-1 mb-2 mr-4
    text-xs/4
    font-mono font-light font-stretch-normal
    tracking-wide
    duration-200

    group-hover/link:base:opacity-100

    base:block
    base:text-xs/4
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
      mega:text-xs/4
      tera:bottom-58
      peta:bottom-92
    ` : `
      base:bottom-40
      base:left-2.5
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
