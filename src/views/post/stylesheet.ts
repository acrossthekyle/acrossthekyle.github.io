import tw from '@/styles';

const styles = tw({
  backdrop: `
    hidden
    fixed inset-0 z-5
    h-full w-full
    bg-black

    base:block
    base:backdrop-blur-md
    base:bg-black/80
  `,
  container: `
    block
    w-full h-full
    bg-transparent
    text-white/90
    mt-12

    base:mt-0
    base:overscroll-contain
    base:overflow-y-scroll
    base:fixed
    base:inset-0
    base:z-6
  `,
  close: `
    hidden
    fixed top-12 right-12 z-1
    justify-start
    opacity-0
    animate-in-fade-delayed

    base:flex
  `,
  x: `
    stroke-1 stroke-white/90
  `,
  article: `
    relative
    flex-none
    flex flex-col items-center gap-8
    w-full
    !pt-0
    opacity-0
    !animate-in-fade-delayed
  `,
  header: `
    w-full
    pt-2

    base:pt-14
    base:max-w-lg
  `,
  heading: `
    text-3xl text-left
    font-black font-stretch-semi-condensed
    uppercase
  `,
  lid: `
    block
    text-sm
    tracking-wider
    font-semibold font-stretch-normal
  `,
  time: `
    block
    mt-1
    text-tiny text-white/75
    font-medium font-stretch-normal
  `,
  figure: `
    w-full

    base:max-w-lg
  `,
  content: `
    w-full

    base:max-w-lg
  `,
  paragraph: `
    pb-4
    text-base text-justify
    font-normal

    last:pb-0
  `,
});

export default styles;
