import tw from '@/styles';

const styles = tw({
  container: `
    w-full
    mx-2
    opacity-0
    animate-in-fade

    base:hidden
  `,
  heading: `
    flex items-center gap-4
    text-3xl
    font-extrablack font-stretch-ultra-condensed
    tracking-tight
    uppercase
  `,
  item: `
    line-clamp-1
  `,
  back: `
    uppercase
    text-sm text-center
    font-bold
    tracking-normal
    h-6
    w-22
    border-1
    rounded-full
  `,
  label: `
    uppercase
    text-xs/3.5
    block
  `,
});

export default styles;
