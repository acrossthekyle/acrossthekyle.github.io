import tw from '@/styles';

const styles = tw({
  options: `
    absolute top-9 left-15 z-9
    px-4
    bg-black

    base:bg-transparent
    base:fixed
    base:top-0
    base:left-auto
    base:right-0
    base:p-2
    deka:top-10
    deka:right-10
    deka:pl-4
    base:opacity-0
    base:animate-elastic-in-from-right
  `,
  list: `
    flex gap-1
    text-tiny/3 text-current/90
    font-medium
    uppercase

    plank:text-xs/3.5
    base:flex-col
    base:gap-0
    base:text-xs/4
    base:text-right
  `,
  cta: `
    ml-1
    font-semibold
    uppercase
    underline underline-offset-2
    decoration-solid decoration-1
    duration-200
    py-2

    hover:font-black

    base:py-0
  `,
});

export default styles;
