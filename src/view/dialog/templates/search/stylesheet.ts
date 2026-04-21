import tw from '@/styles';

const styles = tw({
  container: `
    relative z-999
    flex flex-col gap-6
    w-full max-w-lg
    h-full
    my-0 mx-auto
    p-6
    rounded-md
    cursor-auto
    pointer-events-auto
    text-sm
    bg-(--background)
  `,
  input: `
    w-full
    p-2
    border-1
    rounded-md
    text-xs
  `,
  results: `
    flex flex-col gap-4
    px-2
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
    w-4 h-4
    opacity-20
  `,
  prefix: `
    inline-block
    mt-2.5
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
