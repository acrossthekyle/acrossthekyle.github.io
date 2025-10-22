import tw from '@/styles';

const styles = tw({
  container: `
    relative
    bg-transparent
    text-white/90
    overflow-y-scroll
    overscroll-contain
    h-full w-full
    outline-0

    base:pr-12
  `,
  toggle: `
    fixed top-2 right-2 z-1
    flex justify-end

    deka:top-11
    deka:right-9
  `,
  close: `
    hidden

    base:block
  `,
  x: `
    stroke-1 stroke-white/90
  `,
  article: `
    flex flex-col gap-8
  `,
});

export default styles;
