import tw from '@/styles';

const styles = tw({
  container: (canRender: boolean) => tw(`
    ${!canRender && 'hidden'}

    absolute bottom-0 left-0 z-9999
    w-full
    dark:bg-black light:bg-white
    border-t-1 border-t-current/20
    p-4

    before:fixed
    before:inset-0
    before:-z-1
    before:bg-black/40

    base:relative
    base:block
    base:before:hidden
    base:border-t-0
  `),
  title: `
    text-sm dark:text-white/90 light:text-black/90
    font-normal
    uppercase
    tracking-tighter
    mb-4
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
    w-28
    border-1 border-current/90
    rounded-full

    base:hidden
  `,
});

export default styles;
