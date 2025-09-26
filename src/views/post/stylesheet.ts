import tw from '@/styles';

const styles = tw({
  backdrop: `
    fixed inset-0 z-5
    h-full w-full
    bg-black

    base:backdrop-blur-md
    base:bg-black/80
  `,
  container: `
    fixed inset-0 z-6
    flex flex-col
    w-full h-full
    bg-transparent
    text-white/90
    overflow-y-scroll
    overscroll-contain

    base:flex-row
  `,
  close: `
    relative z-1
    flex justify-start
    w-full
    pt-4 pl-2
    opacity-0
    animate-in-fade-delayed

    base:w-auto
    base:fixed
    base:top-12
    base:right-12
    base:pt-0
    base:pl-0
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
