import tw from '@/styles';

const styles = tw({
  container: `
    absolute bottom-4 left-1/2 z-1
    -translate-x-1/2

    flex flex-col-reverse
    w-full max-w-lg
    h-auto

    p-2 pb-0

    cursor-auto
    pointer-events-auto

    text-sm text-current/70
    font-normal

    bg-(--background)
    rounded-xl
    shadow-2xl

    overflow-y-scroll

    constrained:h-full
  `,
  form: `
    relative
  `,
  label: `
    absolute top-0 left-1.5
    flex items-center
    h-full
    cursor-pointer
  `,
  placeholder: `
    w-4 h-4
    opacity-50
  `,
  input: `
    w-full
    px-4 py-3 pl-7
    border-t-1 border-current/5
    text-base
    rounded-b-md

    lg:text-sm
  `,
  clear: `
    absolute top-3.5 right-1 z-1
    px-1.5 py-0.5
    text-tiny
    font-medium font-mono

    motion-safe:opacity-50
    motion-safe:duration-300
    motion-safe:hover:opacity-100
    motion-safe:focus:opacity-100
  `,
  results: `
    flex flex-col gap-1
    h-auto max-h-131
    pb-2
    overflow-y-scroll
  `,
  result: `
    motion-safe:duration-300
    motion-safe:opacity-0
    motion-safe:animate-fade-in-up
  `,
  link: `
    relative
    flex flex-col gap-2
    w-full
    p-2
    rounded-lg
    leading-[1]
    text-left

    motion-safe:duration-300
    motion-safe:hover:bg-(--foreground)/5
    motion-safe:focus:bg-(--foreground)/5
  `,
  badge: `
    absolute top-2 right-2
    text-xtiny
    uppercase
    tracking-wider
    bg-yellow-300
    text-black
    leading-[1]
    px-1.5 py-1 pb-0.75
    rounded-sm
  `,
  faded: `
    block
    opacity-20
  `,
  small: `
    text-tiny
  `,
});

export default styles;
