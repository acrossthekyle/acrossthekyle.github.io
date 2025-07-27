import tw from '@/styles';

const styles = tw({
  header: `
    relative z-1
    w-full
    mt-6
    px-4

    sm:px-8
    sm:mt-12
  `,
  inner: `
    flex items-center justify-between
    w-full max-w-7xl
    my-0 mx-auto
  `,
  home: `
    group
  `,
  menu: `
    text-sm text-white/70 font-light tracking-widest
    cursor-pointer
    duration-500

    hover:text-white/100
  `,
  icon: `
    h-5 w-5
    stroke-1
    stroke-white
    duration-500

    group-hover:stroke-2
  `,
  main: `
    flex flex-col
    w-full
    px-4 pt-6

    sm:px-8
    sm:pt-12
  `,
});

export default styles;
