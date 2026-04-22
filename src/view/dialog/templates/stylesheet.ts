import tw from '@/styles';

const styles = tw({
  container: `
    relative
    flex justify-center gap-0
    pointer-events-none
    h-full w-full

    motion-safe:opacity-0
    motion-safe:animate-fade-in
  `,
  wrapper: `
    flex-none
  `,
  image: `
    rounded-lg
    pointer-events-auto
    cursor-auto
    aspect-14/16
  `,
  caption: `
    flex-none
    relative
    w-86
    pl-12
    flex flex-col
    font-sans font-medium
    text-xs
    pointer-events-auto
    cursor-auto
  `,
  between: `
    justify-between
  `,
  header: `
    mb-4
  `,
  items: `
    flex flex-col gap-4
  `,
  item: `
    flex items-start gap-4
  `,
  prefix: `
    inline-block
    mt-2.5
  `,
  link: `
    flex items-start gap-4
    rounded-md
    p-2
    -m-2

    motion-safe:duration-300
    motion-safe:hover:bg-(--foreground)/2.5
  `,
  icon: `
    -mt-0.5
    w-4 h-4
    opacity-20
  `,
  external: `
    inline-block
    -mt-0.5
    w-2.5 h-2.5
  `,
  faded: `
    block
    opacity-20
  `,
});

export default styles;
