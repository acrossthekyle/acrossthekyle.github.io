import tw from '@/styles';

const styles = tw({
  grid: `
    relative z-0
    grid grid-cols-4 gap-6
    pt-18 pb-14 mx-10
  `,
  cta: `
    group
    relative
    h-auto w-full
  `,
  image: `
    aspect-14/16
    rounded-lg
    grayscale contrast-125
    opacity-0
    duration-700

    motion-safe:group-hover:scale-105
    motion-safe:group-hover:grayscale-0
    motion-safe:group-hover:contrast-100
    motion-safe:animate-fade-in
  `,
  caption: `
    mt-3
    font-sans font-medium
    text-xs
  `,
  faded: `
    block
    opacity-40
  `,
});

export default styles;
