import tw from '@/styles';

const styles = tw({
  container: `
    flex items-center
    w-full
    mx-2
    opacity-0
    animate-in-fade
  `,
  logo: `
    block
    pt-1.5 pr-4

    base:pt-0
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
    block
    text-tiny/3
    uppercase

    plank:text-xs/3.5
    base:hidden
  `,
});

export default styles;
