import tw from '@/styles';

const styles = tw({
  container: (canRender: boolean) => tw(`
    ${!canRender && 'hidden'}

    absolute inset-0 z-9999
    w-full
    dark:bg-black light:bg-white
    p-4 pt-16

    base:pt-4
    base:relative
    base:block
  `),
  title: `
    hidden
    text-sm dark:text-white/90 light:text-black/90
    font-normal
    uppercase
    tracking-tighter
    mb-4

    base:block
  `,
  list: `
    grid grid-cols-2 gap-4
  `,
  item: `
    flex flex-col gap-0
  `,
  heading: `
    capitalize
    font-black
  `,
  view: `
    fixed top-4 left-3.5 z-99999
    uppercase
    text-xs text-center
    font-bold
    py-0.75
    w-24
    border-1 border-current/90
    rounded-full

    base:hidden
  `,
});

export default styles;
