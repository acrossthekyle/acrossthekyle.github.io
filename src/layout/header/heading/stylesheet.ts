import tw from '@/styles';

const styles = tw({
  container: `
    flex items-start
    w-full
    mx-2
    opacity-0
    animate-in-fade

    base:ml-0
  `,
  logo: `
    block
    pt-1.5 pr-4

    base:pr-0
    base:pt-0
    deka:pt-0
  `,
  image: `
    w-11
    opacity-70

    base:w-10
  `,
  heading: `
    text-3xl
    font-extrablack font-stretch-ultra-condensed
    tracking-tight
    uppercase

    base:hidden
  `,
  item: `
    line-clamp-1
  `,
  label: `
    flex items-center gap-1
    text-tiny/3
    uppercase

    plank:text-xs/3.5
    base:hidden
  `,
  icon: `
    h-3.25 w-3.25
  `,
});

export default styles;
