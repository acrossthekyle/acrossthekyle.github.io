import tw from '@/styles';

const styles = tw({
  container: `
    relative z-999
    flex flex-col gap-6
    w-full max-w-lg
    h-auto
    my-0 mx-auto
    p-6
    rounded-md
    cursor-auto
    pointer-events-auto
    text-sm
  `,
  header: `
    text-base
    font-medium
  `,
  subheader: `
    block
    font-normal
    text-sm
  `,
  categories: `
    flex flex-wrap gap-0
    -mx-2
  `,
  category: `
    flex items-center gap-2
    text-sm
    py-1 px-2
    rounded-md
    capitalize

    md:text-tiny

    motion-safe:duration-300
    motion-safe:opacity-50
    motion-safe:hover:opacity-100
  `,
  tag: `
    w-3 h-3
  `,
  form: `
    relative
  `,
  label: `
    cursor-pointer
  `,
  placeholder: `
    absolute top-3.25 left-2
    w-4 h-4
    opacity-50

    md:top-2.25
  `,
  input: `
    peer
    w-full
    p-2 pl-8
    border-1 border-current/25
    rounded-sm
    text-base

    md:text-xs
  `,
  clear: `
    absolute top-1.25 right-0
    px-2 py-2
    text-xs
    font-medium
    hidden

    md:top-0.25

    peer-focus:block

    motion-safe:opacity-50
    motion-safe:duration-300
    motion-safe:hover:opacity-100
  `,
  x: `
    w-4 h-4
  `,
  results: `
    flex flex-col gap-4
    px-2
  `,
  result: `
    motion-safe:duration-300
    motion-safe:opacity-0
    motion-safe:animate-fade-in-up
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
