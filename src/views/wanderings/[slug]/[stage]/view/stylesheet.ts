import tw from '@/styles';

const styles = tw({
  container: `
    relative
    h-full w-full
    pt-6
    bg-black
    text-white/90
    overflow-y-scroll
    overscroll-contain
    h-full w-full
    outline-0
    opacity-0
    animate-in-fade

    base:pt-0
    base:pr-12
  `,
  close: `
    absolute top-3 left-3 z-9999
    p-2

    base:right-0
    base:left-auto
    base:fixed
    deka:top-9
    deka:right-7
  `,
  up: `
    hidden
    fixed z-5
    p-2

    base:block
    base:bottom-1
    base:right-1
    deka:bottom-10
    deka:right-7
  `,
  icon: `
    w-7 h-7
    stroke-1 stroke-white/90
  `,
  article: `
    flex flex-col gap-8
    pt-12
  `,
  section: `
    flex flex-col gap-3

    base:flex-row
    base:gap-0
  `,
  left: `
    base:w-2/10
    base:pr-2
  `,
  right: `
    base:w-8/10
  `,
  heading: `
    font-bold
  `,
});

export default styles;
