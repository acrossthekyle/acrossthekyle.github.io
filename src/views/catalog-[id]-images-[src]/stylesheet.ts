import tw from '@/styles';

const styles = tw({
  container: `
    col-span-3 order-0
    flex flex-col items-center justify-between
    h-[calc(100svh-7rem)]
    px-4

    landscape-constrained:h-auto
  `,
  back: `
    absolute top-0 right-0.5 -left-0.5
    grid justify-items-center gap-1.5
    w-16 h-16
    p-3

    sm:right-0.5
    sm:left-auto
  `,
  top: `
    h-px w-8
    bg-(--foreground)
    translate-y-4.5 rotate-45
  `,
  bottom: `
    h-px w-8
    bg-(--foreground)
    -translate-y-1.25 -rotate-45
  `,
  figure: `
    relative
    h-[calc(100%-7rem)]
    mt-18

    landscape-constrained:mb-4

    motion-safe:opacity-0
    motion-safe:animate-fade-in
  `,
  image: `
    aspect-video
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
    flex items-center justify-center gap-12
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
