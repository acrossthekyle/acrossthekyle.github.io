import tw from '@/styles';

const styles = tw({
  container: `
    fixed top-0 left-0 z-99
    h-full w-full
    bg-black
    text-white/90
    overflow-y-scroll
    overscroll-contain
    h-full w-full
    outline-0

    base:relative
    base:pr-12
  `,
  toggle: `
    absolute top-2 left-0 z-9999
    flex justify-end

    base:right-0
    base:left-auto
    base:fixed
    deka:top-9
    deka:right-7
  `,
  close: `
    p-2
  `,
  x: `
    w-7 h-7
    stroke-1 stroke-white/90
  `,
  article: `
    flex flex-col gap-8
    pt-14
  `,
});

export default styles;
