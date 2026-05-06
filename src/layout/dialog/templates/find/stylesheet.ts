import tw from '@/styles';

const styles = tw({
  container: `
    relative z-999
    flex flex-col gap-6
    w-full max-w-lg
    h-auto
    my-0 mx-auto
    py-4 px-5
    rounded-md
    cursor-auto
    pointer-events-auto
    text-sm

    sm:py-10
    lg:p-6
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
    absolute top-1.25 right-0 z-99
    px-2 py-2
    text-xs
    font-medium

    md:top-0.25

    motion-safe:opacity-50
    motion-safe:duration-300
    motion-safe:hover:opacity-100
  `,
  x: `
    w-4.5 h-4.5

    lg:w-4
    lg:h-4
  `,
  results: `
    flex flex-col gap-4
  `,
  result: `
    motion-safe:duration-300
    motion-safe:opacity-0
    motion-safe:animate-fade-in-up
  `,
  link: `
    flex flex-col items-start gap-0
    w-full
    rounded-md
    text-left

    motion-safe:duration-300
    motion-safe:hover:bg-(--foreground)/2.5

    sm:p-2
    sm:-m-2
  `,
  external: `
    inline-block
    -mt-0.5
    w-3 h-3

    lg:w-2.5
    lg:h-2.5
  `,
  faded: `
    block
    opacity-20
  `,
  small: `
    text-tiny
  `,
  close: `
    absolute top-2 right-2 z-1
    p-2

    sm:top-8
    lg:top-5
    lg:right-3.75
  `,
});

export default styles;
