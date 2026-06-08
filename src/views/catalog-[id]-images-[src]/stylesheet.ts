import tw from '@/styles';

const styles = tw({
  container: `
    col-span-3 order-0
    flex flex-col items-end justify-between
    h-[calc(100svh-7rem)]
    px-4

    landscape-constrained:h-screen
  `,
  back: `
    absolute top-0 right-0.5 -left-0.5
    flex items-center gap-1
    px-4 py-3
    leading-[0.85]
    font-normal
    uppercase
    text-tiny

    sm:right-0.5
    sm:left-auto
  `,
  icon: `
    w-4 h-4
    stroke-1
  `,
  figure: `
    relative
    w-full h-[calc(100%-5rem)]
    mt-10

    motion-safe:opacity-0
    motion-safe:animate-fade-in
  `,
  image: `
    brightness-90
    grayscale-20
    sepia-10
    rounded-lg
  `,
  caption: `
    absolute inset-4
    flex justify-between
    leading-[0.85]
    font-bold
    text-tiny
    uppercase
    tracking-widest
  `,
  heading: `
    absolute top-0 left-0
    mr-12
    text-tiny
    uppercase
    tracking-widest
  `,
  stack: `
    flex flex-col justify-end gap-1
  `,
  navigation: `
    flex items-center justify-between
    w-full
  `,
  total: `
    flex items-center
    leading-[0.85]
    font-bold
    uppercase
    text-tiny
  `,
  navigate: `
    flex items-center gap-8
    leading-[0.85]
    font-bold
    uppercase
    text-tiny
  `,
  arrow: `
    stroke-1
  `,
});

export default styles;
