import tw from '@/styles';

const styles = tw({
  container: `
    relative
    flex flex-row gap-1.5
    w-full

    md:gap-4
  `,
  view: `
    absolute -top-12.5 right-0
    font-mono font-bold
    text-xtiny
    uppercase
    border-1 border-(--foreground)
    py-1 px-1.25
    rounded-sm
    bg-(--foreground)
    text-(--background)

    sm:hidden
  `,
  plot: `
    flex-1
    mt-1
    h-[72vh]
    w-full
    rounded-md
    border border-(--foreground)/20
    overflow-hidden
    duration-300
    translate-x-[100vw]

    sm:translate-x-0
  `,
});

export default styles;
