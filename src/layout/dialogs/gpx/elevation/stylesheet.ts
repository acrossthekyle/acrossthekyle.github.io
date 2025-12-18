import tw from '@/styles';

const styles = tw({
  section: `
    relative
    h-52 w-full
    border-t-1 border-t-current/20
    dark:bg-black light:bg-white
    select-none
    touch-none

    base:h-60
  `,
  title: `
    absolute top-2 left-2.5 z-99
    text-sm dark:text-white/90 light:text-black/90
    font-normal
    uppercase
    tracking-tighter
  `,
  ticks: `
    absolute left-0 bottom-0 right-0 z-9999
    flex justify-between
  `,
  tick: `
    w-[1px] h-1.5
    dark:bg-black light:bg-white

    first:opacity-0
    last:opacity-0
  `,
});

export default styles;
