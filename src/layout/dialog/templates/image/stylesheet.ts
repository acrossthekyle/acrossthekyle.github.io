import tw from '@/styles';

const styles = tw({
  desktop: `
    hidden

    lg:block
  `,
  mobile: `
    lg:hidden
  `,
  close: `
    absolute top-4 right-4 z-10
    pointer-events-auto

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  icon: `
    stroke-1

    lg:w-5
    lg:h-5
  `,
  figure: `
    pointer-events-auto
    aspect-video
    h-dvh w-screen
    flex
    items-center
    justify-center

    lg:pointer-events-none
  `,
  image: `
    portrait:!w-auto
    portrait:!h-auto

    landscape-constrained:!w-full
    landscape-constrained:!h-full

    md:!w-auto
    md:!h-auto

    aspect-video
    brightness-90
    grayscale-20
    sepia-10
  `,
});

export default styles;
