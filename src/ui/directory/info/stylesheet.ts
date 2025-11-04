import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean) => tw(`
    block
    relative z-1
    mt-1 mb-3 mr-4
    text-sm/4 ${isOnChild ? `text-left` : `giga:text-right`}
    font-mono font-light font-stretch-normal
    tracking-wide
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
      base:bottom-36
      base:left-4
      deka:left-12
      deka:bottom-50
      mega:bottom-70
      giga:bottom-0
      giga:right-0
      giga:left-auto
      tera:text-sm/4
    `}
    base:opacity-0
    base:w-52
    base:my-0
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
