import tw from '@/styles';

const styles = tw({
  container: `
    relative
    flex flex-row gap-0
    pointer-events-none
    h-full w-full
    p-20
    opacity-0

    motion-safe:animate-fade-in
  `,
  wrapper: `
    flex-1
  `,
  image: `
    rounded-lg
    pointer-events-auto
    cursor-auto
  `,
  caption: `
    flex-none
    relative
    w-86
    pl-12
    flex flex-col justify-between
    font-sans font-medium
    text-xs
    pointer-events-auto
    cursor-auto
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
    flex items-center gap-4
    rounded-md
    p-2
    -m-2
    duration-300

    hover:bg-(--foreground)/2.5
  `,
  icon: `
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
