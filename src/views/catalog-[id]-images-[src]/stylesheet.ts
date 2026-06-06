import tw from '@/styles';

const styles = tw({
  container: `
    col-span-2 order-0
    flex flex-col items-end justify-between
    h-auto
    p-4

    sm:h-full

    landscape-constrained:mt-30
    landscape-constrained:justify-start
    landscape-constrained:min-h-[58vw]

    lg:mt-0
    lg:fixed
    lg:left-0
    lg:w-3/4
  `,
  back: `
    relative -top-3 -right-2
    flex items-center gap-1
    p-2
    leading-[0.85]
    font-normal
    uppercase
    text-tiny
  `,
  icon: `
    w-4 h-4
    stroke-1
  `,
  figure: `
    relative
    w-full
    mt-12
    aspect-video

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
    flex justify-between
    w-full
    pt-4
  `,
  link: `
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
